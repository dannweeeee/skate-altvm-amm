import fs from "fs";
import path from "path";
import { getEthereumEthUsdcPool } from "../../lib/ethereum/eth-usdc-pool";
import { getBaseEthUsdcPool } from "../../lib/base/eth-usdc-pool";
import { getOptimismEthUsdcPool } from "../../lib/optimism/eth-usdc-pool";
import { getArbitrumEthUsdcPool } from "../../lib/arbitrum/eth-usdc-pool";
import { getEthereumEzethWethPool } from "../../lib/ethereum/ezeth-weth-pool";
import { getBaseEzethWethPool } from "../../lib/base/ezeth-weth-pool";
import { getArbitrumEzethWethPool } from "../../lib/arbitrum/ezeth-weth-pool";
import { getOptimismEzethWstethPool } from "../../lib/optimism/ezeth-wsteth-pool";
import { ethers } from "ethers";
import { getAggregatedEthUsdcPoolSlippage } from "../../lib/aggregated/aggregated-eth-usdc-pool-slippage";
import { getAggregatedUsdcEthPoolSlippage } from "../../lib/aggregated/aggregated-usdc-eth-pool-slippage";
import { getAggregatedEzethWethPoolSlippage } from "../../lib/aggregated/aggregated-ezeth-weth-pool-slippage";
import { getAggregatedWethEzethPoolSlippage } from "../../lib/aggregated/aggregated-weth-ezeth-pool-slippage";

//////////////////////////////////////
//////// POOL TICK FUNCTIONS /////////
//////////////////////////////////////

export async function aggregateEthUsdcLiquidity() {
  try {
    console.log("---------AGGREGATING ETH USDC LIQUIDITY POOLS---------");
    const { ethereumTicks } = await getEthereumEthUsdcPool();
    const { baseTicks } = await getBaseEthUsdcPool();
    const { optimismTicks } = await getOptimismEthUsdcPool();
    const { arbitrumTicks } = await getArbitrumEthUsdcPool();

    const ethereumChartTicks = ethereumTicks
      .map((tickProcessed) => ({
        ...tickProcessed,
        liquidityActiveChart: parseFloat(
          tickProcessed.liquidityActive.toString()
        ),
      }))
      .reverse();

    const baseChartTicks = baseTicks
      .map((tickProcessed) => ({
        ...tickProcessed,
        liquidityActiveChart: parseFloat(
          tickProcessed.liquidityActive.toString()
        ),
      }))
      .reverse();

    const optimismChartTicks = optimismTicks
      .map((tickProcessed) => ({
        ...tickProcessed,
        liquidityActiveChart: parseFloat(
          tickProcessed.liquidityActive.toString()
        ),
      }))
      .reverse();

    const arbitrumChartTicks = arbitrumTicks
      .map((tickProcessed) => ({
        ...tickProcessed,
        liquidityActiveChart: parseFloat(
          tickProcessed.liquidityActive.toString()
        ),
      }))
      .reverse();

    const aggregatedTicks = ethereumChartTicks.map((ethereumTick, index) => {
      const baseTick = baseChartTicks[index];
      const optimismTick = optimismChartTicks[index];
      const arbitrumTick = arbitrumChartTicks[index];
      return {
        tickIdx: ethereumTick.tickIdx,
        ethereumLiquidityActive: parseFloat(
          ethereumTick.liquidityActive.toString()
        ),
        baseLiquidityActive: parseFloat(baseTick.liquidityActive.toString()),
        optimismLiquidityActive: parseFloat(
          optimismTick.liquidityActive.toString()
        ),
        arbitrumLiquidityActive: parseFloat(
          arbitrumTick.liquidityActive.toString()
        ),
        totalLiquidityActive:
          parseFloat(ethereumTick.liquidityActive.toString()) +
          parseFloat(baseTick.liquidityActive.toString()) +
          parseFloat(optimismTick.liquidityActive.toString()) +
          parseFloat(arbitrumTick.liquidityActive.toString()),
        totalLiquidityLockedToken0:
          parseFloat(ethereumTick.liquidityLockedToken1.toString()) +
          parseFloat(baseTick.liquidityLockedToken0.toString()) +
          parseFloat(optimismTick.liquidityLockedToken1.toString()) +
          parseFloat(arbitrumTick.liquidityLockedToken0.toString()),
        totalLiquidityLockedToken1:
          parseFloat(ethereumTick.liquidityLockedToken0.toString()) +
          parseFloat(baseTick.liquidityLockedToken1.toString()) +
          parseFloat(optimismTick.liquidityLockedToken0.toString()) +
          parseFloat(arbitrumTick.liquidityLockedToken1.toString()),
        price0: ethereumTick.price0,
        price1: ethereumTick.price1,
        isCurrent: ethereumTick.isCurrent,
      };
    });

    console.log("Printing aggregated ETH USDC chart ticks...");
    fs.writeFileSync(
      path.join("data", "aggregated", "AggregatedEthUsdcChartTicks.json"),
      JSON.stringify(aggregatedTicks, null, 2)
    );
    console.log("Successfully printed aggregated chart ticks 🎉");
    return JSON.stringify(aggregatedTicks);
  } catch (error: any) {
    console.error("Error in aggregateEthUsdcLiquidity function:", error);
    return JSON.stringify({ error: error.message });
  }
}

export async function aggregateEzethWethLiquidity() {
  try {
    console.log("---------AGGREGATING EZETH WETH LIQUIDITY POOLS---------");
    const { ethereumTicks } = await getEthereumEzethWethPool();
    const { baseTicks } = await getBaseEzethWethPool();
    const { arbitrumTicks } = await getArbitrumEzethWethPool();

    const ethereumChartTicks = ethereumTicks
      .map((tickProcessed) => ({
        ...tickProcessed,
        liquidityActiveChart: parseFloat(
          tickProcessed.liquidityActive.toString()
        ),
      }))
      .reverse();

    const baseChartTicks = baseTicks
      .map((tickProcessed) => ({
        ...tickProcessed,
        liquidityActiveChart: parseFloat(
          tickProcessed.liquidityActive.toString()
        ),
      }))
      .reverse();

    const arbitrumChartTicks = arbitrumTicks
      .map((tickProcessed) => ({
        ...tickProcessed,
        liquidityActiveChart: parseFloat(
          tickProcessed.liquidityActive.toString()
        ),
      }))
      .reverse();

    const aggregatedTicks = ethereumChartTicks.map((ethereumTick, index) => {
      const baseTick = baseChartTicks[index];
      const arbitrumTick = arbitrumChartTicks[index];
      return {
        tickIdx: ethereumTick.tickIdx,
        ethereumLiquidityActive: parseFloat(
          ethereumTick.liquidityActive.toString()
        ),
        baseLiquidityActive: parseFloat(baseTick.liquidityActive.toString()),
        arbitrumLiquidityActive: parseFloat(
          arbitrumTick.liquidityActive.toString()
        ),
        totalLiquidityActive:
          parseFloat(ethereumTick.liquidityActive.toString()) +
          parseFloat(baseTick.liquidityActive.toString()) +
          parseFloat(arbitrumTick.liquidityActive.toString()),
        totalLiquidityLockedToken0:
          parseFloat(ethereumTick.liquidityLockedToken0.toString()) +
          parseFloat(baseTick.liquidityLockedToken0.toString()) +
          parseFloat(arbitrumTick.liquidityLockedToken0.toString()),
        totalLiquidityLockedToken1:
          parseFloat(ethereumTick.liquidityLockedToken1.toString()) +
          parseFloat(baseTick.liquidityLockedToken1.toString()) +
          parseFloat(arbitrumTick.liquidityLockedToken1.toString()),
        price0: ethereumTick.price0,
        price1: ethereumTick.price1,
        isCurrent: ethereumTick.isCurrent,
      };
    });

    console.log("Printing aggregated ezETH WETH chart ticks...");
    fs.writeFileSync(
      path.join("data", "aggregated", "AggregatedEzethWethChartTicks.json"),
      JSON.stringify(aggregatedTicks, null, 2)
    );
    console.log("Successfully printed aggregated chart ticks 🎉");
    return JSON.stringify(aggregatedTicks);
  } catch (error: any) {
    console.error("Error in aggregateEzethWethLiquidity function:", error);
    return JSON.stringify({ error: error.message });
  }
}

export async function aggregateEzethWstethLiquidity() {
  try {
    console.log("---------AGGREGATING EZETH WSTETH LIQUIDITY POOLS---------");
    const { optimismTicks } = await getOptimismEzethWstethPool();

    const optimismChartTicks = optimismTicks
      .map((tickProcessed) => ({
        ...tickProcessed,
        liquidityActiveChart: parseFloat(
          tickProcessed.liquidityActive.toString()
        ),
      }))
      .reverse();

    const aggregatedTicks = optimismChartTicks.map((optimismTick, index) => {
      return {
        tickIdx: optimismTick.tickIdx,
        optimismLiquidityActive: parseFloat(
          optimismTick.liquidityActive.toString()
        ),
        totalLiquidityActive: parseFloat(
          optimismTick.liquidityActive.toString()
        ),
        totalLiquidityLockedToken0: parseFloat(
          optimismTick.liquidityLockedToken0.toString()
        ),
        totalLiquidityLockedToken1: parseFloat(
          optimismTick.liquidityLockedToken1.toString()
        ),
        price0: optimismTick.price0,
        price1: optimismTick.price1,
        isCurrent: optimismTick.isCurrent,
      };
    });

    console.log("Printing aggregated ezETH wstETH chart ticks...");
    fs.writeFileSync(
      path.join("data", "aggregated", "AggregatedEzethWstethChartTicks.json"),
      JSON.stringify(aggregatedTicks, null, 2)
    );
    console.log("Successfully printed aggregated chart ticks 🎉");
    return JSON.stringify(aggregatedTicks);
  } catch (error: any) {
    console.error("Error in aggregateEzethWstethLiquidity function:", error);
    return JSON.stringify({ error: error.message });
  }
}

//////////////////////////////////
//////// GETTER FUNCTIONS ////////
//////////////////////////////////

export async function getCurrentEthUsdcLiquidity() {
  try {
    const { ethereumTicks } = await getEthereumEthUsdcPool();
    const { baseTicks } = await getBaseEthUsdcPool();
    const { optimismTicks } = await getOptimismEthUsdcPool();
    const { arbitrumTicks } = await getArbitrumEthUsdcPool();

    const ethereumChartTicks = ethereumTicks
      .map((tickProcessed) => ({
        ...tickProcessed,
        liquidityActiveChart: parseFloat(
          tickProcessed.liquidityActive.toString()
        ),
      }))
      .reverse();

    const baseChartTicks = baseTicks
      .map((tickProcessed) => ({
        ...tickProcessed,
        liquidityActiveChart: parseFloat(
          tickProcessed.liquidityActive.toString()
        ),
      }))
      .reverse();

    const optimismChartTicks = optimismTicks
      .map((tickProcessed) => ({
        ...tickProcessed,
        liquidityActiveChart: parseFloat(
          tickProcessed.liquidityActive.toString()
        ),
      }))
      .reverse();

    const arbitrumChartTicks = arbitrumTicks
      .map((tickProcessed) => ({
        ...tickProcessed,
        liquidityActiveChart: parseFloat(
          tickProcessed.liquidityActive.toString()
        ),
      }))
      .reverse();

    const aggregatedTicks = ethereumChartTicks.map((ethereumTick, index) => {
      const baseTick = baseChartTicks[index];
      const optimismTick = optimismChartTicks[index];
      const arbitrumTick = arbitrumChartTicks[index];
      return {
        tickIdx: ethereumTick.tickIdx,
        ethereumLiquidityActive: parseFloat(
          ethereumTick.liquidityActive.toString()
        ),
        baseLiquidityActive: parseFloat(baseTick.liquidityActive.toString()),
        arbitrumLiquidityActive: parseFloat(
          arbitrumTick.liquidityActive.toString()
        ),
        optimismLiquidityActive: parseFloat(
          optimismTick.liquidityActive.toString()
        ),
        totalLiquidityActive:
          parseFloat(ethereumTick.liquidityActive.toString()) +
          parseFloat(baseTick.liquidityActive.toString()) +
          parseFloat(optimismTick.liquidityActive.toString()) +
          parseFloat(arbitrumTick.liquidityActive.toString()),
        isCurrent: ethereumTick.isCurrent,
      };
    });

    const currentTick = aggregatedTicks.find((tick) => tick.isCurrent);
    if (currentTick) {
      return {
        ethereumLiquidityActive: currentTick.ethereumLiquidityActive,
        baseLiquidityActive: currentTick.baseLiquidityActive,
        optimismLiquidityActive: currentTick.optimismLiquidityActive,
        arbitrumLiquidityActive: currentTick.arbitrumLiquidityActive,
        totalLiquidityActive: currentTick.totalLiquidityActive,
      };
    } else {
      throw new Error("No current tick found");
    }
  } catch (error: any) {
    console.error("Error in getCurrentEthUsdcLiquidity function:", error);
    return { error: error.message };
  }
}

export async function getCurrentEzethWethLiquidity() {
  try {
    const { ethereumTicks } = await getEthereumEzethWethPool();
    const { baseTicks } = await getBaseEzethWethPool();
    const { arbitrumTicks } = await getArbitrumEzethWethPool();

    const ethereumChartTicks = ethereumTicks
      .map((tickProcessed) => ({
        ...tickProcessed,
        liquidityActiveChart: parseFloat(
          tickProcessed.liquidityActive.toString()
        ),
      }))
      .reverse();

    const baseChartTicks = baseTicks
      .map((tickProcessed) => ({
        ...tickProcessed,
        liquidityActiveChart: parseFloat(
          tickProcessed.liquidityActive.toString()
        ),
      }))
      .reverse();

    const arbitrumChartTicks = arbitrumTicks
      .map((tickProcessed) => ({
        ...tickProcessed,
        liquidityActiveChart: parseFloat(
          tickProcessed.liquidityActive.toString()
        ),
      }))
      .reverse();

    const aggregatedTicks = ethereumChartTicks.map((ethereumTick, index) => {
      const baseTick = baseChartTicks[index];
      const arbitrumTick = arbitrumChartTicks[index];
      return {
        tickIdx: ethereumTick.tickIdx,
        ethereumLiquidityActive: parseFloat(
          ethereumTick.liquidityActive.toString()
        ),
        baseLiquidityActive: parseFloat(baseTick.liquidityActive.toString()),
        arbitrumLiquidityActive: parseFloat(
          arbitrumTick.liquidityActive.toString()
        ),
        totalLiquidityActive:
          parseFloat(ethereumTick.liquidityActive.toString()) +
          parseFloat(baseTick.liquidityActive.toString()) +
          parseFloat(arbitrumTick.liquidityActive.toString()),
        isCurrent: ethereumTick.isCurrent,
      };
    });

    const currentTick = aggregatedTicks.find((tick) => tick.isCurrent);
    if (currentTick) {
      return {
        ethereumLiquidityActive: currentTick.ethereumLiquidityActive,
        baseLiquidityActive: currentTick.baseLiquidityActive,
        arbitrumLiquidityActive: currentTick.arbitrumLiquidityActive,
        totalLiquidityActive: currentTick.totalLiquidityActive,
      };
    } else {
      throw new Error("No current tick found");
    }
  } catch (error: any) {
    console.error("Error in getCurrentEzethWethLiquidity function:", error);
    return { error: error.message };
  }
}

//////////////////////////////////
/////// SLIPPAGE FUNCTIONS ///////
//////////////////////////////////

export async function calculateAggregatedEthUsdcPoolSlippage(
  amountIn: ethers.BigNumber
) {
  try {
    console.log(
      "---------STARTING AGGREGATED ETH USDC POOL SLIPPAGE FUNCTION---------"
    );

    const result = await getAggregatedEthUsdcPoolSlippage(amountIn);

    console.log("Successfully calculated slippage 🎉");

    return result;
  } catch (error) {
    console.error("Error in getting Aggregated ETH USDC pool slippage:", error);
    throw error;
  }
}

export async function calculateAggregatedUsdcEthPoolSlippage(
  amountIn: ethers.BigNumber
) {
  try {
    console.log(
      "---------STARTING AGGREGATED USDC ETH POOL SLIPPAGE FUNCTION---------"
    );

    const result = await getAggregatedUsdcEthPoolSlippage(amountIn);

    console.log("Successfully calculated slippage 🎉");

    return result;
  } catch (error) {
    console.error("Error in getting Aggregated USDC ETH pool slippage:", error);
    throw error;
  }
}

export async function calculateAggregatedEzethWethPoolSlippage(
  amountIn: ethers.BigNumber
) {
  try {
    console.log(
      "---------STARTING AGGREGATED EZETH WETH POOL SLIPPAGE FUNCTION---------"
    );

    const result = await getAggregatedEzethWethPoolSlippage(amountIn);

    console.log("Successfully calculated slippage 🎉");

    return result;
  } catch (error) {
    console.error(
      "Error in getting Aggregated EZETH WETH pool slippage:",
      error
    );
    throw error;
  }
}

export async function calculateAggregatedWethEzethPoolSlippage(
  amountIn: ethers.BigNumber
) {
  try {
    console.log(
      "---------STARTING AGGREGATED WETH EZETH POOL SLIPPAGE FUNCTION---------"
    );

    const result = await getAggregatedWethEzethPoolSlippage(amountIn);

    console.log("Successfully calculated slippage 🎉");

    return result;
  } catch (error) {
    console.error(
      "Error in getting Aggregated WETH EZETH pool slippage:",
      error
    );
    throw error;
  }
}
