import { ethers } from "ethers";
import { Tick, Pool, TickMath } from "@uniswap/v3-sdk";
import { OPTIMISM_EZETH_WSTETH_POOL_CONTRACT_ADDRESS } from "../optimism/constants";
import { UNISWAP_V3_POOL_CONTRACT_ABI } from "../../abis/uniswapv3-pool-abi";
import { getOptimismProvider } from "../providers";
import { OptimismEzethWstethConfig } from "../../config";
import { BarChartTick, GraphTick } from "../interfaces";
import { createBarChartTicks } from "../active-liquidity";
import { getBuiltGraphSDK } from "../../.graphclient";

export async function getOptimismEzethWstethPool(): Promise<{
  pool: Pool;
  optimismTicks: BarChartTick[];
}> {
  console.log(
    "Starting Optimism ezETH wstETH getOptimismEzethWstethPool function"
  );

  const poolAddress = OPTIMISM_EZETH_WSTETH_POOL_CONTRACT_ADDRESS;

  const poolContract = new ethers.Contract(
    poolAddress,
    UNISWAP_V3_POOL_CONTRACT_ABI,
    getOptimismProvider()
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
    OptimismEzethWstethConfig.pool.tokenA,
    OptimismEzethWstethConfig.pool.tokenB,
    OptimismEzethWstethConfig.pool.fee,
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

  console.log("OPTIMISM ezETH wstETH Pool activeTickIdx", activeTickIdx);

  const barChartTicks = await createBarChartTicks(
    activeTickIdx,
    fullPool.liquidity,
    tickSpacing,
    fullPool.token0,
    fullPool.token1,
    OptimismEzethWstethConfig.chart.numSurroundingTicks,
    fullPool.fee,
    graphTicks
  );

  console.log(
    "Returning Optimism ezETH wstETH getOptimismEzethWstethPool function"
  );

  return {
    pool: fullPool,
    optimismTicks: barChartTicks,
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
  const { GetAllTicksOptimism } = getBuiltGraphSDK();
  const result = await GetAllTicksOptimism({
    poolAddress: poolAddress,
    skip: skip,
  });

  const ticks = result.Optimism_ticks || [];

  return ticks.map((graphTick: any) => ({
    tickIdx: graphTick.index,
    liquidityGross: graphTick.liquidityGross,
    liquidityNet: graphTick.liquidityNet,
  }));
}
