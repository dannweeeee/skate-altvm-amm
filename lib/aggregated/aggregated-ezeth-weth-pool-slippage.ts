import { ethers } from "ethers";
import {
  ETHEREUM_EZETH_WETH_POOL_CONTRACT_ADDRESS,
  ETHEREUM_QUOTER_V2_CONTRACT_ADDRESS,
  ETHEREUM_EZETH_TOKEN,
  ETHEREUM_WETH_TOKEN,
} from "../ethereum/constants";
import {
  BASE_EZETH_WETH_POOL_CONTRACT_ADDRESS,
  BASE_QUOTER_V2_CONTRACT_ADDRESS,
  BASE_EZETH_TOKEN,
  BASE_WETH_TOKEN,
} from "../base/constants";
import {
  ARBITRUM_EZETH_WETH_POOL_CONTRACT_ADDRESS,
  ARBITRUM_QUOTER_V2_CONTRACT_ADDRESS,
  ARBITRUM_EZETH_TOKEN,
  ARBITRUM_WETH_TOKEN,
} from "../arbitrum/constants";
import {
  getArbitrumProvider,
  getBaseProvider,
  getMainnetProvider,
} from "../providers";
import { UNISWAP_V3_POOL_CONTRACT_ABI } from "../../abis/uniswapv3-pool-abi";
import { QUOTER_V2_CONTRACT_ABI } from "../../abis/quoterv2-abi";
import { getCurrentEzethWethLiquidity } from "../../services/aggregated";

// convert sqrtPriceX96 to price
function sqrtToPrice(
  sqrt: any,
  decimals0: any,
  decimals1: any,
  token0IsInput: boolean = true
) {
  const numerator = sqrt ** 2;
  const denominator = 2 ** 192;
  let ratio = numerator / denominator;
  const shiftDecimals = Math.pow(10, decimals0 - decimals1);
  ratio = ratio * shiftDecimals;

  if (!token0IsInput) {
    ratio = 1 / ratio;
  }

  return ratio;
}

// getter function for the active liquidity in each pool
export async function getAggregatedEzethWethPoolSlippage(
  amountIn: ethers.BigNumber
) {
  const aggregatedLiquidity = await getCurrentEzethWethLiquidity();
  console.log("aggregatedLiquidity", aggregatedLiquidity);

  let ethereumLiquidityRatio = 0;
  let baseLiquidityRatio = 0;
  let arbitrumLiquidityRatio = 0;

  if (aggregatedLiquidity.totalLiquidityActive !== undefined) {
    ethereumLiquidityRatio =
      (aggregatedLiquidity.ethereumLiquidityActive ?? 0) /
      aggregatedLiquidity.totalLiquidityActive;
    baseLiquidityRatio =
      (aggregatedLiquidity.baseLiquidityActive ?? 0) /
      aggregatedLiquidity.totalLiquidityActive;
    arbitrumLiquidityRatio =
      (aggregatedLiquidity.arbitrumLiquidityActive ?? 0) /
      aggregatedLiquidity.totalLiquidityActive;

    console.log("Ethereum Liquidity Ratio:", ethereumLiquidityRatio);
    console.log("Base Liquidity Ratio:", baseLiquidityRatio);
    console.log("Arbitrum Liquidity Ratio:", arbitrumLiquidityRatio);
  } else {
    console.log("Total Liquidity is undefined");
  }

  ////////////////////
  ///// ETHEREUM /////
  ////////////////////

  const ethereumPoolAddress = ETHEREUM_EZETH_WETH_POOL_CONTRACT_ADDRESS;
  const ethereumPoolContract = new ethers.Contract(
    ethereumPoolAddress,
    UNISWAP_V3_POOL_CONTRACT_ABI,
    getMainnetProvider()
  );
  const ethereumSlot0 = await ethereumPoolContract.slot0();
  const ethereumSqrtPriceX96 = ethereumSlot0.sqrtPriceX96;

  const ethereumQuoter = new ethers.Contract(
    ETHEREUM_QUOTER_V2_CONTRACT_ADDRESS,
    QUOTER_V2_CONTRACT_ABI,
    getMainnetProvider()
  );

  const ethereumParams = {
    tokenIn: ETHEREUM_EZETH_TOKEN.address,
    tokenOut: ETHEREUM_WETH_TOKEN.address,
    fee: 100,
    amountIn: amountIn.mul(Math.floor(ethereumLiquidityRatio * 1e6)).div(1e6),
    sqrtPriceLimitX96: ethers.constants.Zero,
  };

  const ethereumQuote = await ethereumQuoter.callStatic.quoteExactInputSingle(
    ethereumParams
  );

  const ethereumSqrtPriceX96After = ethereumQuote.sqrtPriceX96After;

  ////////////////////
  /////// BASE ///////
  ////////////////////

  const basePoolAddress = BASE_EZETH_WETH_POOL_CONTRACT_ADDRESS;
  const basePoolContract = new ethers.Contract(
    basePoolAddress,
    UNISWAP_V3_POOL_CONTRACT_ABI,
    getBaseProvider()
  );
  const baseSlot0 = await basePoolContract.slot0();
  const baseSqrtPriceX96 = baseSlot0.sqrtPriceX96;

  const baseQuoter = new ethers.Contract(
    BASE_QUOTER_V2_CONTRACT_ADDRESS,
    QUOTER_V2_CONTRACT_ABI,
    getBaseProvider()
  );

  const baseParams = {
    tokenIn: BASE_EZETH_TOKEN.address,
    tokenOut: BASE_WETH_TOKEN.address,
    fee: 500,
    amountIn: amountIn.mul(Math.floor(baseLiquidityRatio * 1e6)).div(1e6),
    sqrtPriceLimitX96: ethers.constants.Zero,
  };

  const baseQuote = await baseQuoter.callStatic.quoteExactInputSingle(
    baseParams
  );

  const baseSqrtPriceX96After = baseQuote.sqrtPriceX96After;

  ////////////////////
  ///// ARBITRUM /////
  ////////////////////

  const arbitrumPoolAddress = ARBITRUM_EZETH_WETH_POOL_CONTRACT_ADDRESS;
  const arbitrumPoolContract = new ethers.Contract(
    arbitrumPoolAddress,
    UNISWAP_V3_POOL_CONTRACT_ABI,
    getArbitrumProvider()
  );
  const arbitrumSlot0 = await arbitrumPoolContract.slot0();
  const arbitrumSqrtPriceX96 = arbitrumSlot0.sqrtPriceX96;

  const arbitrumQuoter = new ethers.Contract(
    ARBITRUM_QUOTER_V2_CONTRACT_ADDRESS,
    QUOTER_V2_CONTRACT_ABI,
    getArbitrumProvider()
  );

  const arbitrumParams = {
    tokenIn: ARBITRUM_EZETH_TOKEN.address,
    tokenOut: ARBITRUM_WETH_TOKEN.address,
    fee: 100,
    amountIn: amountIn.mul(Math.floor(arbitrumLiquidityRatio * 1e6)).div(1e6),
    sqrtPriceLimitX96: ethers.constants.Zero,
  };

  const arbitrumQuote = await arbitrumQuoter.callStatic.quoteExactInputSingle(
    arbitrumParams
  );

  const arbitrumSqrtPriceX96After = arbitrumQuote.sqrtPriceX96After;

  //////////////////////
  ///// AGGREGATED /////
  //////////////////////

  const aggregatedSqrtPriceX96 =
    ethereumSqrtPriceX96 + baseSqrtPriceX96 + arbitrumSqrtPriceX96;

  const aggregatedSqrtPriceX96After =
    ethereumSqrtPriceX96After +
    baseSqrtPriceX96After +
    arbitrumSqrtPriceX96After;

  const price = sqrtToPrice(aggregatedSqrtPriceX96, 18, 18, false);
  const priceAfter = sqrtToPrice(aggregatedSqrtPriceX96After, 18, 18, false);

  console.log("price", price);
  console.log("priceAfter", priceAfter);

  const absolutePriceImpact = price - priceAfter;
  const slippage = (absolutePriceImpact / price) * 100;

  console.log("absolutePriceImpact", absolutePriceImpact);
  console.log("slippage", slippage);

  // this is in the scenario where liquidity is split between 3 pools, based on the active liquidity in each pool
  // in an ideal use case, the liquidity should be rebalanced to pools better to swap in pools with the lowest slippage

  return {
    price,
    priceAfter,
    absolutePriceImpact,
    slippage,
  };
}
