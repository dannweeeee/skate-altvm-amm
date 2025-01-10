import { ethers } from "ethers";
import { EthereumEzethWethSwapConfig } from "../../config";
import {
  ETHEREUM_EZETH_WETH_POOL_CONTRACT_ADDRESS,
  ETHEREUM_QUOTER_CONTRACT_ADDRESS,
} from "./constants";
import { QUOTER_CONTRACT_ABI } from "../../abis/quoter-abi";
import { UNISWAP_V3_POOL_CONTRACT_ABI } from "../../abis/uniswapv3-pool-abi";
import { getMainnetProvider } from "../providers";
import { toReadableAmount, fromReadableAmount } from "../conversion";

export async function getEthereumEzethWethQuote(
  amountIn: number
): Promise<string> {
  const quoterContract = new ethers.Contract(
    ETHEREUM_QUOTER_CONTRACT_ADDRESS,
    QUOTER_CONTRACT_ABI,
    getMainnetProvider()
  );
  const poolConstants = await getPoolConstants();

  const quotedAmountOut = await quoterContract.callStatic.quoteExactInputSingle(
    poolConstants.token0,
    poolConstants.token1,
    poolConstants.fee,
    fromReadableAmount(
      amountIn,
      EthereumEzethWethSwapConfig.tokens.in.decimals
    ).toString(),
    0
  );

  return toReadableAmount(
    quotedAmountOut,
    EthereumEzethWethSwapConfig.tokens.out.decimals
  );
}

async function getPoolConstants(): Promise<{
  token0: string;
  token1: string;
  fee: number;
}> {
  const currentPoolAddress = ETHEREUM_EZETH_WETH_POOL_CONTRACT_ADDRESS;

  const poolContract = new ethers.Contract(
    currentPoolAddress,
    UNISWAP_V3_POOL_CONTRACT_ABI,
    getMainnetProvider()
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
