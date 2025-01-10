import { ethers } from "ethers";
import { Tick, Pool, TickMath } from "@uniswap/v3-sdk";
import { ETHEREUM_EZETH_WETH_POOL_CONTRACT_ADDRESS } from "./constants";
import { UNISWAP_V3_POOL_CONTRACT_ABI } from "../../abis/uniswapv3-pool-abi";
import { getMainnetProvider } from "../providers";
import { EthereumEzethWethConfig } from "../../config";
import { BarChartTick, GraphTick } from "../interfaces";
import { createBarChartTicks } from "../active-liquidity";
import { getBuiltGraphSDK } from "../../.graphclient";

export async function getEthereumEzethWethPool(): Promise<{
  pool: Pool;
  ethereumTicks: BarChartTick[];
}> {
  console.log("Starting Ethereum ezETH WETH getEthereumEzethWethPool function");

  const poolAddress = ETHEREUM_EZETH_WETH_POOL_CONTRACT_ADDRESS;

  const poolContract = new ethers.Contract(
    poolAddress,
    UNISWAP_V3_POOL_CONTRACT_ABI,
    getMainnetProvider()
  );

  const [slot0, liquidity, graphTicks] = await Promise.all([
    poolContract.slot0(),
    poolContract.liquidity(),
    getFullTickData(poolAddress),
  ]);

  const sdkTicks = graphTicks.map((graphTick: GraphTick) => {
    return new Tick({
      index: +graphTick.tickIdx,
      liquidityGross: graphTick.liquidityGross,
      liquidityNet: graphTick.liquidityNet,
    });
  });

  const fullPool = new Pool(
    EthereumEzethWethConfig.pool.tokenA,
    EthereumEzethWethConfig.pool.tokenB,
    EthereumEzethWethConfig.pool.fee,
    slot0.sqrtPriceX96,
    liquidity,
    slot0.tick,
    sdkTicks
  );

  const tickSpacing = fullPool.tickSpacing;
  const activeTickIdx = (
    await fullPool.tickDataProvider.nextInitializedTickWithinOneWord(
      fullPool.tickCurrent,
      fullPool.tickCurrent === TickMath.MIN_TICK ? false : true,
      tickSpacing
    )
  )[0];

  console.log("ETHEREUM ezETH WETH Pool activeTickIdx", activeTickIdx);

  const barChartTicks = await createBarChartTicks(
    activeTickIdx,
    fullPool.liquidity,
    tickSpacing,
    fullPool.token0,
    fullPool.token1,
    EthereumEzethWethConfig.chart.numSurroundingTicks,
    fullPool.fee,
    graphTicks
  );

  console.log(
    "Returning Ethereum ezETH WETH getEthereumEzethWethPool function"
  );

  return {
    pool: fullPool,
    ethereumTicks: barChartTicks,
  };
}

async function getFullTickData(poolAddress: string): Promise<GraphTick[]> {
  let allTicks: GraphTick[] = [];
  let skip = 0;
  let loadingTicks = true;
  while (loadingTicks) {
    const ticks = await getTickDataFromSubgraph(poolAddress, skip);
    allTicks = allTicks.concat(ticks);
    if (ticks.length < 1000) {
      loadingTicks = false;
    } else {
      skip += 1000;
    }
  }
  return allTicks;
}

async function getTickDataFromSubgraph(
  poolAddress: string,
  skip: number
): Promise<GraphTick[]> {
  const { GetAllTicksEthereum } = getBuiltGraphSDK();
  const result = await GetAllTicksEthereum({
    poolAddress: poolAddress,
    skip: skip,
  });

  const ticks = result.Ethereum_ticks || [];

  return ticks.map((graphTick: any) => ({
    tickIdx: graphTick.index,
    liquidityGross: graphTick.liquidityGross,
    liquidityNet: graphTick.liquidityNet,
  }));
}
