import fs from "fs";
import path from "path";
import { ethers } from "ethers";

import { getBaseEthUsdcPool } from "../../lib/base/eth-usdc-pool";
import { getBaseEzethWethPool } from "../../lib/base/ezeth-weth-pool";
import { getBaseEthUsdcPoolSlippage } from "../../lib/base/eth-usdc-pool-slippage";
import { getBaseEzethWethPoolSlippage } from "../../lib/base/ezeth-weth-pool-slippage";

//////////////////////////////////////
//////// POOL TICK FUNCTIONS /////////
//////////////////////////////////////

export async function processBaseEthUsdcPool() {
  try {
    console.log("---------STARTING BASE ETH USDC POOL FUNCTION---------");
    const { baseTicks } = await getBaseEthUsdcPool();

    const chartTicks = baseTicks
      .map((tickProcessed) => {
        return {
          ...tickProcessed,
          liquidityActiveChart: parseFloat(
            tickProcessed.liquidityActive.toString()
          ),
        };
      })
      .reverse();

    console.log("Printing Base ETH USDC chart ticks...");
    fs.writeFileSync(
      path.join("data", "base", "BaseEthUsdcChartTicks.json"),
      JSON.stringify(chartTicks, null, 2)
    );
    console.log("Successfully printed chart ticks 🎉");
    return JSON.stringify(chartTicks);
  } catch (error: any) {
    console.error("Error in processBaseEthUsdcPool function:", error);
    return JSON.stringify({ error: error.message });
  }
}

export async function processBaseEzethWethPool() {
  try {
    console.log("---------STARTING BASE EZETH WETH POOL FUNCTION---------");
    const { baseTicks } = await getBaseEzethWethPool();

    const chartTicks = baseTicks
      .map((tickProcessed) => {
        return {
          ...tickProcessed,
          liquidityActiveChart: parseFloat(
            tickProcessed.liquidityActive.toString()
          ),
        };
      })
      .reverse();

    console.log("Printing Base ezETH WETH chart ticks...");
    fs.writeFileSync(
      path.join("data", "base", "BaseEzethWethChartTicks.json"),
      JSON.stringify(chartTicks, null, 2)
    );
    console.log("Successfully printed chart ticks 🎉");
    return JSON.stringify(chartTicks);
  } catch (error: any) {
    console.error("Error in processBaseEzethWethPool function:", error);
    return JSON.stringify({ error: error.message });
  }
}

//////////////////////////////////
/////// SLIPPAGE FUNCTIONS ///////
//////////////////////////////////

export async function calculateBaseEthUsdcPoolSlippage(
  tokenInAddress: string,
  tokenOutAddress: string,
  fee: number,
  amountIn: ethers.BigNumber
) {
  try {
    console.log(
      "---------STARTING BASE ETH USDC POOL SLIPPAGE FUNCTION---------"
    );

    const result = await getBaseEthUsdcPoolSlippage(
      tokenInAddress,
      tokenOutAddress,
      fee,
      amountIn
    );

    console.log("Successfully calculated slippage 🎉");

    return result;
  } catch (error) {
    console.error("Error in getting Base ETH USDC pool slippage:", error);
    throw error;
  }
}

export async function calculateBaseEzethWethPoolSlippage(
  tokenInAddress: string,
  tokenOutAddress: string,
  fee: number,
  amountIn: ethers.BigNumber
) {
  try {
    console.log(
      "---------STARTING BASE EZETH WETH POOL SLIPPAGE FUNCTION---------"
    );

    const result = await getBaseEzethWethPoolSlippage(
      tokenInAddress,
      tokenOutAddress,
      fee,
      amountIn
    );

    console.log("Successfully calculated slippage 🎉");

    return result;
  } catch (error) {
    console.error("Error in getting Base EZETH WETH pool slippage:", error);
    throw error;
  }
}
