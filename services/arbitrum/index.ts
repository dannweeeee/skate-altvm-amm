import fs from "fs";
import path from "path";
import { ethers } from "ethers";

import { getArbitrumEthUsdcPool } from "../../lib/arbitrum/eth-usdc-pool";
import { getArbitrumEzethWethPool } from "../../lib/arbitrum/ezeth-weth-pool";
import { getArbitrumEthUsdcQuote } from "../../lib/arbitrum/eth-usdc-quote";
import {
  ArbitrumEthUsdcSwapConfig,
  ArbitrumEzethWethSwapConfig,
} from "../../config";
import { getArbitrumEzethWethQuote } from "../../lib/arbitrum/ezeth-weth-quote";
import { getArbitrumEthUsdcPoolSlippage } from "../../lib/arbitrum/eth-usdc-pool-slippage";
import { getArbitrumEzethWethPoolSlippage } from "../../lib/arbitrum/ezeth-weth-pool-slippage";

//////////////////////////////////////
//////// POOL TICK FUNCTIONS /////////
//////////////////////////////////////

export async function processArbitrumEthUsdcPool() {
  try {
    console.log("---------STARTING ARBITRUM ETH USDC POOL FUNCTION---------");
    const { arbitrumTicks } = await getArbitrumEthUsdcPool();

    const chartTicks = arbitrumTicks
      .map((tickProcessed) => {
        return {
          ...tickProcessed,
          liquidityActiveChart: parseFloat(
            tickProcessed.liquidityActive.toString()
          ),
        };
      })
      .reverse();

    console.log("Printing Arbitrum ETH USDC chart ticks...");
    fs.writeFileSync(
      path.join("data", "arbitrum", "ArbitrumEthUsdcChartTicks.json"),
      JSON.stringify(chartTicks, null, 2)
    );
    console.log("Successfully printed chart ticks 🎉");
    return JSON.stringify(chartTicks);
  } catch (error: any) {
    console.error("Error in processArbitrumEthUsdcPool function:", error);
    return JSON.stringify({ error: error.message });
  }
}

export async function processArbitrumEzethWethPool() {
  try {
    console.log("---------STARTING ARBITRUM EZETH WETH POOL FUNCTION---------");
    const { arbitrumTicks } = await getArbitrumEzethWethPool();

    const chartTicks = arbitrumTicks
      .map((tickProcessed) => {
        return {
          ...tickProcessed,
          liquidityActiveChart: parseFloat(
            tickProcessed.liquidityActive.toString()
          ),
        };
      })
      .reverse();

    console.log("Printing Arbitrum ezETH WETH chart ticks...");
    fs.writeFileSync(
      path.join("data", "arbitrum", "ArbitrumEzethWethChartTicks.json"),
      JSON.stringify(chartTicks, null, 2)
    );
    console.log("Successfully printed chart ticks 🎉");
    return JSON.stringify(chartTicks);
  } catch (error: any) {
    console.error("Error in processArbitrumEzethWethPool function:", error);
    return JSON.stringify({ error: error.message });
  }
}

//////////////////////////////////
//////// QUOTE FUNCTIONS /////////
//////////////////////////////////

export async function fetchArbitrumEthUsdcQuote(
  amountIn: number
): Promise<string> {
  try {
    console.log("---------STARTING ARBITRUM ETH USDC QUOTE FUNCTION---------");
    const quoteAmount = await getArbitrumEthUsdcQuote(amountIn);

    console.log(
      `Quote for ${amountIn} ${ArbitrumEthUsdcSwapConfig.tokens.in.symbol} to ${ArbitrumEthUsdcSwapConfig.tokens.out.symbol}: ${quoteAmount}`
    );

    return quoteAmount;
  } catch (error: any) {
    console.error("Error in fetching Arbitrum ETH USDC quote:", error);
    return JSON.stringify({ error: error.message });
  }
}

export async function fetchArbitrumEzethWethQuote(
  amountIn: number
): Promise<string> {
  try {
    console.log(
      "---------STARTING ARBITRUM EZETH WETH QUOTE FUNCTION---------"
    );
    const quoteAmount = await getArbitrumEzethWethQuote(amountIn);

    console.log(
      `Quote for ${amountIn} ${ArbitrumEzethWethSwapConfig.tokens.in.symbol} to ${ArbitrumEzethWethSwapConfig.tokens.out.symbol}: ${quoteAmount}`
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

export async function calculateArbitrumEthUsdcPoolSlippage(
  tokenInAddress: string,
  tokenOutAddress: string,
  fee: number,
  amountIn: ethers.BigNumber
) {
  try {
    console.log(
      "---------STARTING ARBITRUM ETH USDC POOL SLIPPAGE FUNCTION---------"
    );

    const result = await getArbitrumEthUsdcPoolSlippage(
      tokenInAddress,
      tokenOutAddress,
      fee,
      amountIn
    );

    console.log("Successfully calculated slippage 🎉");

    return result;
  } catch (error) {
    console.error("Error in getting Arbitrum ETH USDC pool slippage:", error);
    throw error;
  }
}

export async function calculateArbitrumEzethWethPoolSlippage(
  tokenInAddress: string,
  tokenOutAddress: string,
  fee: number,
  amountIn: ethers.BigNumber
) {
  try {
    console.log(
      "---------STARTING ARBITRUM EZETH WETH POOL SLIPPAGE FUNCTION---------"
    );

    const result = await getArbitrumEzethWethPoolSlippage(
      tokenInAddress,
      tokenOutAddress,
      fee,
      amountIn
    );

    console.log("Successfully calculated slippage 🎉");

    return result;
  } catch (error) {
    console.error("Error in getting Arbitrum ezETH WETH pool slippage:", error);
    throw error;
  }
}
