import { ethers } from "ethers";
import { OptimismEthUsdcSwapConfig } from "../../config";
import {
  OPTIMISM_ETH_USDC_POOL_CONTRACT_ADDRESS,
  OPTIMISM_QUOTER_CONTRACT_ADDRESS,
} from "./constants";
import { QUOTER_CONTRACT_ABI } from "../../abis/quoter-abi";
import { UNISWAP_V3_POOL_CONTRACT_ABI } from "../../abis/uniswapv3-pool-abi";
import { getOptimismProvider } from "../providers";
import { toReadableAmount, fromReadableAmount } from "../conversion";

export async function getOptimismEthUsdcQuote(
  amountIn: number
): Promise<string> {
  const quoterContract = new ethers.Contract(
    OPTIMISM_QUOTER_CONTRACT_ADDRESS,
    QUOTER_CONTRACT_ABI,
    getOptimismProvider()
  );
  const poolConstants = await getPoolConstants();

  const quotedAmountOut = await quoterContract.callStatic.quoteExactInputSingle(
    poolConstants.token0,
    poolConstants.token1,
    poolConstants.fee,
    fromReadableAmount(
      amountIn,
      OptimismEthUsdcSwapConfig.tokens.in.decimals
    ).toString(),
    0
  );

  return toReadableAmount(
    quotedAmountOut,
    OptimismEthUsdcSwapConfig.tokens.out.decimals
  );
}

async function getPoolConstants(): Promise<{
  token0: string;
  token1: string;
  fee: number;
}> {
  const currentPoolAddress = OPTIMISM_ETH_USDC_POOL_CONTRACT_ADDRESS;

  const poolContract = new ethers.Contract(
    currentPoolAddress,
    UNISWAP_V3_POOL_CONTRACT_ABI,
    getOptimismProvider()
  );
  const [token0, token1, fee] = await Promise.all([
    poolContract.token0(),
    poolContract.token1(),
    poolContract.fee(),
  ]);

  return {
    token0,
    token1,
    fee,
  };
}
