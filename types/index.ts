import { Token } from "@uniswap/sdk-core";
import { FeeAmount } from "@uniswap/v3-sdk";

// Sets if the example should run locally or on chain
export enum Environment {
  MAINNET,
  BASE,
  OPTIMISM,
  ARBITRUM,
}

// Liquidity Pool Configuration
export interface LiquidityPoolConfig {
  env: Environment;
  rpc: {
    mainnet: string;
  };
  pool: {
    tokenA: Token;
    tokenB: Token;
    fee: FeeAmount;
  };
  chart: {
    numSurroundingTicks: number;
  };
}

// Swap Configuration
export interface SwapConfig {
  rpc: {
    mainnet: string;
  };
  tokens: {
    in: Token;
    amountIn: number;
    out: Token;
    poolFee: number;
  };
}