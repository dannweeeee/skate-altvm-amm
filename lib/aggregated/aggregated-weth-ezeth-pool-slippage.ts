import { ethers } from "ethers";
import { ETHEREUM_EZETH_WETH_POOL_CONTRACT_ADDRESS } from "../ethereum/constants";
import { BASE_EZETH_WETH_POOL_CONTRACT_ADDRESS } from "../base/constants";
import { ARBITRUM_EZETH_WETH_POOL_CONTRACT_ADDRESS } from "../arbitrum/constants";
import {
  getArbitrumProvider,
  getBaseProvider,
  getMainnetProvider,
} from "../providers";
import { UNISWAP_V3_POOL_CONTRACT_ABI } from "../../abis/uniswapv3-pool-abi";

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

export async function getAggregatedWethEzethPoolSlippage(
  amountIn: ethers.BigNumber
) {
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

  const ethereumSqrtPriceX96After = ethereumSqrtPriceX96;

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

  const baseSqrtPriceX96After = baseSqrtPriceX96;

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

  const arbitrumSqrtPriceX96After = arbitrumSqrtPriceX96;

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

  // when swapping ezeth for weth, the sqrtPriceX96 is rebalanced to be the same as sqrtPriceX96After because of ezETH being pegged to WETH

  return {
    price,
    priceAfter,
    absolutePriceImpact,
    slippage,
  };
}
