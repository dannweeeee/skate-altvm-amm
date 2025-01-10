import fs from "fs";
import path from "path";
import { BigNumber, ethers } from "ethers";

import { getEthereumEthUsdcPool } from "../../lib/ethereum/eth-usdc-pool";
import { getEthereumEzethWethPool } from "../../lib/ethereum/ezeth-weth-pool";
import { getEthereumEthUsdcQuote } from "../../lib/ethereum/eth-usdc-quote";
import {
  EthereumEthUsdcSwapConfig,
  EthereumEzethWethSwapConfig,
} from "../../config";
import { getEthereumEzethWethQuote } from "../../lib/ethereum/ezeth-weth-quote";
import { getEthereumEthUsdcPoolSlippage } from "../../lib/ethereum/eth-usdc-pool-slippage";
import { getEthereumEzethWethPoolSlippage } from "../../lib/ethereum/ezeth-weth-pool-slippage";

//////////////////////////////////////
//////// POOL TICK FUNCTIONS /////////
//////////////////////////////////////

export async function processEthereumEthUsdcPool() {
  try {
    console.log("---------STARTING ETHEREUM ETH USDC POOL FUNCTION---------");
    const { ethereumTicks } = await getEthereumEthUsdcPool();

    const chartTicks = ethereumTicks
      .map((tickProcessed) => {
        return {
          ...tickProcessed,
          liquidityActiveChart: parseFloat(
            tickProcessed.liquidityActive.toString()
          ),
        };
      })
      .reverse();

    console.log("Printing Ethereum ETH USDC chart ticks...");
    fs.writeFileSync(
      path.join("data", "ethereum", "EthereumEthUsdcChartTicks.json"),
      JSON.stringify(chartTicks, null, 2)
    );
    console.log("Successfully printed chart ticks 🎉");
    return JSON.stringify(chartTicks);
  } catch (error: any) {
    console.error("Error in processEthereumEthUsdcPool function:", error);
    return JSON.stringify({ error: error.message });
  }
}

export async function processEthereumEzethWethPool() {
  try {
    console.log("---------STARTING ETHEREUM ezETH WETH POOL FUNCTION---------");
    const { ethereumTicks } = await getEthereumEzethWethPool();

    const chartTicks = ethereumTicks
      .map((tickProcessed) => {
        return {
          ...tickProcessed,
          liquidityActiveChart: parseFloat(
            tickProcessed.liquidityActive.toString()
          ),
        };
      })
      .reverse();

    console.log("Printing Ethereum ezETH WETH chart ticks...");
    fs.writeFileSync(
      path.join("data", "ethereum", "EthereumEzethWethChartTicks.json"),
      JSON.stringify(chartTicks, null, 2)
    );
    console.log("Successfully printed chart ticks 🎉");
    return JSON.stringify(chartTicks);
  } catch (error: any) {
    console.error("Error in processEthereumEzethWethPool function:", error);
    return JSON.stringify({ error: error.message });
  }
}

//////////////////////////////////
//////// QUOTE FUNCTIONS /////////
//////////////////////////////////

export async function fetchEthereumEthUsdcQuote(
  amountIn: number
): Promise<string> {
  try {
    console.log("---------STARTING ETHEREUM ETH USDC QUOTE FUNCTION---------");
    const quoteAmount = await getEthereumEthUsdcQuote(amountIn);

    console.log(
      `Quote for ${amountIn} ${EthereumEthUsdcSwapConfig.tokens.in.symbol} to ${EthereumEthUsdcSwapConfig.tokens.out.symbol}: ${quoteAmount}`
    );

    return quoteAmount;
  } catch (error: any) {
    console.error("Error in fetching Ethereum ETH USDC quote:", error);
    return JSON.stringify({ error: error.message });
  }
}

export async function fetchEthereumEzethWethQuote(
  amountIn: number
): Promise<string> {
  try {
    console.log(
      "---------STARTING ETHEREUM EZETH WETH QUOTE FUNCTION---------"
    );
    const quoteAmount = await getEthereumEzethWethQuote(amountIn);

    console.log(
      `Quote for ${amountIn} ${EthereumEzethWethSwapConfig.tokens.in.symbol} to ${EthereumEzethWethSwapConfig.tokens.out.symbol}: ${quoteAmount}`
    );

    return quoteAmount;
  } catch (error: any) {
    console.error("Error in fetching Ethereum ezETH WETH quote:", error);
    return JSON.stringify({ error: error.message });
  }
}

//////////////////////////////////
/////// SLIPPAGE FUNCTIONS ///////
//////////////////////////////////

export async function calculateEthereumEthUsdcPoolSlippage(
  tokenInAddress: string,
  tokenOutAddress: string,
  fee: number,
  amountIn: ethers.BigNumber
) {
  try {
    console.log(
      "---------STARTING ETHEREUM ETH USDC POOL SLIPPAGE FUNCTION---------"
    );

    const result = await getEthereumEthUsdcPoolSlippage(
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

export async function calculateEthereumEzethWethPoolSlippage(
  tokenInAddress: string,
  tokenOutAddress: string,
  fee: number,
  amountIn: ethers.BigNumber
) {
  try {
    console.log(
      "---------STARTING ETHEREUM EZETH WETH POOL SLIPPAGE FUNCTION---------"
    );

    const result = await getEthereumEzethWethPoolSlippage(
      tokenInAddress,
      tokenOutAddress,
      fee,
      amountIn
    );

    console.log("Successfully calculated slippage 🎉");

    return result;
  } catch (error) {
    console.error("Error in getting Ethereum EZETH WETH pool slippage:", error);
    throw error;
  }
}
