import fs from "fs";
import path from "path";
import { ethers } from "ethers";

import { getOptimismEthUsdcPool } from "../../lib/optimism/eth-usdc-pool";
import { getOptimismEzethWstethPool } from "../../lib/optimism/ezeth-wsteth-pool";
import { getOptimismEthUsdcQuote } from "../../lib/optimism/eth-usdc-quote";
import {
  OptimismEthUsdcSwapConfig,
  OptimismEzethWstethSwapConfig,
} from "../../config";
import { getOptimismEzethWstethQuote } from "../../lib/optimism/ezeth-wsteth-quote";
import { getOptimismEthUsdcPoolSlippage } from "../../lib/optimism/eth-usdc-pool-slippage";
import { getOptimismEzethWstethPoolSlippage } from "../../lib/optimism/ezeth-wsteth-pool-slippage";

//////////////////////////////////////
//////// POOL TICK FUNCTIONS /////////
//////////////////////////////////////

export async function processOptimismEthUsdcPool() {
  try {
    console.log("---------STARTING OPTIMISM ETH USDC POOL FUNCTION---------");
    const { optimismTicks } = await getOptimismEthUsdcPool();

    const chartTicks = optimismTicks
      .map((tickProcessed) => {
        return {
          ...tickProcessed,
          liquidityActiveChart: parseFloat(
            tickProcessed.liquidityActive.toString()
          ),
        };
      })
      .reverse();

    console.log("Printing Optimism ETH USDC chart ticks...");
    fs.writeFileSync(
      path.join("data", "optimism", "OptimismEthUsdcChartTicks.json"),
      JSON.stringify(chartTicks, null, 2)
    );
    console.log("Successfully printed chart ticks 🎉");
    return JSON.stringify(chartTicks);
  } catch (error: any) {
    console.error("Error in processOptimismEthUsdcPool function:", error);
    return JSON.stringify({ error: error.message });
  }
}

export async function processOptimismEzethWstethPool() {
  try {
    console.log(
      "---------STARTING OPTIMISM EZETH WSTETH POOL FUNCTION---------"
    );
    const { optimismTicks } = await getOptimismEzethWstethPool();

    const chartTicks = optimismTicks
      .map((tickProcessed) => {
        return {
          ...tickProcessed,
          liquidityActiveChart: parseFloat(
            tickProcessed.liquidityActive.toString()
          ),
        };
      })
      .reverse();

    console.log("Printing Optimism ezETH WSTETH chart ticks...");
    fs.writeFileSync(
      path.join("data", "optimism", "OptimismEzethWstethChartTicks.json"),
      JSON.stringify(chartTicks)
    );
    console.log("Successfully printed chart ticks 🎉");
    return JSON.stringify(chartTicks, null, 2);
  } catch (error: any) {
    console.error("Error in processOptimismEzethWstethPool function:", error);
    return JSON.stringify({ error: error.message });
  }
}

//////////////////////////////////
//////// QUOTE FUNCTIONS /////////
//////////////////////////////////

export async function fetchOptimismEthUsdcQuote(
  amountIn: number
): Promise<string> {
  try {
    console.log("---------STARTING OPTIMISM ETH USDC QUOTE FUNCTION---------");
    const quoteAmount = await getOptimismEthUsdcQuote(amountIn);

    console.log(
      `Quote for ${amountIn} ${OptimismEthUsdcSwapConfig.tokens.in.symbol} to ${OptimismEthUsdcSwapConfig.tokens.out.symbol}: ${quoteAmount}`
    );

    return quoteAmount;
  } catch (error: any) {
    console.error("Error in fetching Optimism ETH USDC quote:", error);
    return JSON.stringify({ error: error.message });
  }
}

export async function fetchOptimismEzethWstethQuote(
  amountIn: number
): Promise<string> {
  try {
    console.log(
      "---------STARTING OPTIMISM EZETH WSTETH QUOTE FUNCTION---------"
    );
    const quoteAmount = await getOptimismEzethWstethQuote(amountIn);

    console.log(
      `Quote for ${amountIn} ${OptimismEzethWstethSwapConfig.tokens.in.symbol} to ${OptimismEzethWstethSwapConfig.tokens.out.symbol}: ${quoteAmount}`
    );

    return quoteAmount;
  } catch (error: any) {
    console.error("Error in fetching Optimism ezETH wstETH quote:", error);
    return JSON.stringify({ error: error.message });
  }
}

//////////////////////////////////
/////// SLIPPAGE FUNCTIONS ///////
//////////////////////////////////

export async function calculateOptimismEthUsdcPoolSlippage(
  tokenInAddress: string,
  tokenOutAddress: string,
  fee: number,
  amountIn: ethers.BigNumber
) {
  try {
    console.log(
      "---------STARTING OPTIMISM ETH USDC POOL SLIPPAGE FUNCTION---------"
    );

    const result = await getOptimismEthUsdcPoolSlippage(
      tokenInAddress,
      tokenOutAddress,
      fee,
      amountIn
    );

    console.log("Successfully calculated slippage 🎉");

    return result;
  } catch (error) {
    console.error("Error in getting Ethereum ETH USDC pool slippage:", error);
    throw error;
  }
}

export async function calculateOptimismEzethWstethPoolSlippage(
  tokenInAddress: string,
  tokenOutAddress: string,
  fee: number,
  amountIn: ethers.BigNumber
) {
  try {
    console.log(
      "---------STARTING OPTIMISM EZETH WSTETH POOL SLIPPAGE FUNCTION---------"
    );

    const result = await getOptimismEzethWstethPoolSlippage(
      tokenInAddress,
      tokenOutAddress,
      fee,
      amountIn
    );

    console.log("Successfully calculated slippage 🎉");

    return result;
  } catch (error) {
    console.error(
      "Error in getting Optimism ezETH wstETH pool slippage:",
      error
    );
    throw error;
  }
}
