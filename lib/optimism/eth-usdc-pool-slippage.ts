import { ethers } from "ethers";

import { QUOTER_V2_CONTRACT_ABI } from "../../abis/quoterv2-abi";
import { UNISWAP_V3_POOL_CONTRACT_ABI } from "../../abis/uniswapv3-pool-abi";
import { UNISWAP_V3_FACTORY_CONTRACT_ABI } from "../../abis/uniswapv3-factory-abi";

import { ERC20_ABI } from "../../abis/erc20-abi";
import { WETH_ABI } from "../../abis/weth-abi";

import {
  OPTIMISM_QUOTER_V2_CONTRACT_ADDRESS,
  OPTIMISM_UNISWAP_V3_FACTORY_CONTRACT_ADDRESS,
  OPTIMISM_WETH_TOKEN,
} from "./constants";

import { getOptimismProvider } from "../providers";

const getAbi = (address: string) =>
  address.toLowerCase() === OPTIMISM_WETH_TOKEN.address.toLowerCase()
    ? WETH_ABI
    : ERC20_ABI;

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

export async function getOptimismEthUsdcPoolSlippage(
  tokenIn: any,
  tokenOut: any,
  fee: any,
  amountIn: any
) {
  const factory = new ethers.Contract(
    OPTIMISM_UNISWAP_V3_FACTORY_CONTRACT_ADDRESS,
    UNISWAP_V3_FACTORY_CONTRACT_ABI,
    getOptimismProvider()
  );

  const poolAddress = await factory.getPool(tokenIn, tokenOut, fee);

  const poolContract = new ethers.Contract(
    poolAddress,
    UNISWAP_V3_POOL_CONTRACT_ABI,
    getOptimismProvider()
  );

  const slot0 = await poolContract.slot0();

  const sqrtPriceX96 = slot0.sqrtPriceX96;

  const token0 = await poolContract.token0;
  const token1 = await poolContract.token1;

  const token0IsInput = tokenIn === token0;

  const tokenInAbi = getAbi(tokenIn);
  const tokenOutAbi = getAbi(tokenOut);

  const tokenInContract = new ethers.Contract(
    tokenIn,
    tokenInAbi,
    getOptimismProvider()
  );
  const tokenOutContract = new ethers.Contract(
    tokenOut,
    tokenOutAbi,
    getOptimismProvider()
  );

  const decimalsIn = await tokenInContract.decimals();
  const decimalsOut = await tokenOutContract.decimals();

  const quoter = new ethers.Contract(
    OPTIMISM_QUOTER_V2_CONTRACT_ADDRESS,
    QUOTER_V2_CONTRACT_ABI,
    getOptimismProvider()
  );

  const params = {
    tokenIn: tokenIn,
    tokenOut: tokenOut,
    fee: fee,
    amountIn: amountIn,
    sqrtPriceLimitX96: ethers.constants.Zero,
  };

  const quote = await quoter.callStatic.quoteExactInputSingle(params);

  const sqrtPriceX96After = quote.sqrtPriceX96After;

  const price = sqrtToPrice(
    sqrtPriceX96,
    decimalsIn,
    decimalsOut,
    token0IsInput
  );

  const priceAfter = sqrtToPrice(
    sqrtPriceX96After,
    decimalsIn,
    decimalsOut,
    token0IsInput
  );

  console.log("price", price);
  console.log("priceAfter", priceAfter);

  const absolutePriceImpact = price - priceAfter;
  const slippage = (absolutePriceImpact / price) * 100;

  console.log("absolutePriceImpact", absolutePriceImpact); // assumes no multi-hop or multi-path swaps
  console.log("slippage", slippage); // assumes no multi-hop or multi-path swaps

  return {
    price,
    priceAfter,
    absolutePriceImpact,
    slippage,
  };
}
