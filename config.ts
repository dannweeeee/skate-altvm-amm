import { Token } from "@uniswap/sdk-core";
import { FeeAmount } from "@uniswap/v3-sdk";
import {
  ETHEREUM_WETH_TOKEN,
  ETHEREUM_USDC_TOKEN,
  ETHEREUM_EZETH_TOKEN,
} from "./lib/ethereum/constants";
import {
  BASE_WETH_TOKEN,
  BASE_USDC_TOKEN,
  BASE_EZETH_TOKEN,
} from "./lib/base/constants";
import {
  OPTIMISM_WETH_TOKEN,
  OPTIMISM_USDC_TOKEN,
  OPTIMISM_WSTETH_TOKEN,
  OPTIMISM_EZETH_TOKEN,
} from "./lib/optimism/constants";
import {
  ARBITRUM_WETH_TOKEN,
  ARBITRUM_USDC_TOKEN,
  ARBITRUM_EZETH_TOKEN,
} from "./lib/arbitrum/constants";

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

// Liquidity Pool Configuration
export interface SwapConfig {
  rpc: {
    mainnet: string;
  };
  tokens: {
    in: Token;
    out: Token;
    poolFee: number;
  };
}

///////////////////////////
//////// ETHEREUM /////////
///////////////////////////

// Ethereum ETH USDC Pool Configuration
export const EthereumEthUsdcConfig: LiquidityPoolConfig = {
  env: Environment.MAINNET,
  rpc: {
    mainnet: "https://mainnet.infura.io/v3/e98d53689b66463ea30f45bc94e28aab",
  },
  pool: {
    tokenA: ETHEREUM_WETH_TOKEN,
    tokenB: ETHEREUM_USDC_TOKEN,
    fee: FeeAmount.LOW,
  },
  chart: {
    numSurroundingTicks: 100,
  },
};

// Ethereum ezETH WETH Pool Configuration
export const EthereumEzethWethConfig: LiquidityPoolConfig = {
  env: Environment.MAINNET,
  rpc: {
    mainnet: "https://mainnet.infura.io/v3/e98d53689b66463ea30f45bc94e28aab",
  },
  pool: {
    tokenA: ETHEREUM_EZETH_TOKEN,
    tokenB: ETHEREUM_WETH_TOKEN,
    fee: FeeAmount.LOWEST,
  },
  chart: {
    numSurroundingTicks: 100,
  },
};

// Ethereum ETH USDC Swap Configuration
export const EthereumEthUsdcSwapConfig: SwapConfig = {
  rpc: {
    mainnet: "https://mainnet.infura.io/v3/e98d53689b66463ea30f45bc94e28aab",
  },
  tokens: {
    in: ETHEREUM_USDC_TOKEN,
    out: ETHEREUM_WETH_TOKEN,
    poolFee: FeeAmount.LOW,
  },
};

// Ethereum ezETH WETH Swap Configuration
export const EthereumEzethWethSwapConfig: SwapConfig = {
  rpc: {
    mainnet: "https://mainnet.infura.io/v3/e98d53689b66463ea30f45bc94e28aab",
  },
  tokens: {
    in: ETHEREUM_EZETH_TOKEN,
    out: ETHEREUM_WETH_TOKEN,
    poolFee: FeeAmount.LOWEST,
  },
};

///////////////////////////
////////// BASE ///////////
///////////////////////////

// Base ETH USDC Pool Configuration
export const BaseEthUsdcConfig: LiquidityPoolConfig = {
  env: Environment.BASE,
  rpc: {
    mainnet:
      "https://base-mainnet.infura.io/v3/e98d53689b66463ea30f45bc94e28aab",
  },
  pool: {
    tokenA: BASE_WETH_TOKEN,
    tokenB: BASE_USDC_TOKEN,
    fee: FeeAmount.LOW,
  },
  chart: {
    numSurroundingTicks: 100,
  },
};

// Base ezETH WETH Pool Configuration
export const BaseEzethWethConfig: LiquidityPoolConfig = {
  env: Environment.BASE,
  rpc: {
    mainnet:
      "https://base-mainnet.infura.io/v3/e98d53689b66463ea30f45bc94e28aab",
  },
  pool: {
    tokenA: BASE_EZETH_TOKEN,
    tokenB: BASE_WETH_TOKEN,
    fee: FeeAmount.LOW,
  },
  chart: {
    numSurroundingTicks: 100,
  },
};

///////////////////////////////
////////// OPTIMISM ///////////
///////////////////////////////

// Optimism ETH USDC Pool Configuration
export const OptimismEthUsdcConfig: LiquidityPoolConfig = {
  env: Environment.OPTIMISM,
  rpc: {
    mainnet:
      "https://optimism-mainnet.infura.io/v3/e98d53689b66463ea30f45bc94e28aab",
  },
  pool: {
    tokenA: OPTIMISM_WETH_TOKEN,
    tokenB: OPTIMISM_USDC_TOKEN,
    fee: FeeAmount.LOW,
  },
  chart: {
    numSurroundingTicks: 100,
  },
};

// Optimism EZETH WSTETH Pool Configuration
export const OptimismEzethWstethConfig: LiquidityPoolConfig = {
  env: Environment.OPTIMISM,
  rpc: {
    mainnet:
      "https://optimism-mainnet.infura.io/v3/e98d53689b66463ea30f45bc94e28aab",
  },
  pool: {
    tokenA: OPTIMISM_EZETH_TOKEN,
    tokenB: OPTIMISM_WSTETH_TOKEN,
    fee: FeeAmount.LOWEST,
  },
  chart: {
    numSurroundingTicks: 100,
  },
};

// Optimism ETH USDC Swap Configuration
export const OptimismEthUsdcSwapConfig: SwapConfig = {
  rpc: {
    mainnet:
      "https://optimism-mainnet.infura.io/v3/e98d53689b66463ea30f45bc94e28aab",
  },
  tokens: {
    in: OPTIMISM_USDC_TOKEN,
    out: OPTIMISM_WETH_TOKEN,
    poolFee: FeeAmount.LOW,
  },
};

// Optimism ezETH WSTETH Swap Configuration
export const OptimismEzethWstethSwapConfig: SwapConfig = {
  rpc: {
    mainnet:
      "https://optimism-mainnet.infura.io/v3/e98d53689b66463ea30f45bc94e28aab",
  },
  tokens: {
    in: OPTIMISM_WSTETH_TOKEN,
    out: OPTIMISM_EZETH_TOKEN,
    poolFee: FeeAmount.LOWEST,
  },
};

///////////////////////////////
////////// ARBITRUM ///////////
///////////////////////////////

// Arbitrum ETH USDC Pool Configuration
export const ArbitrumEthUsdcConfig: LiquidityPoolConfig = {
  env: Environment.ARBITRUM,
  rpc: {
    mainnet:
      "https://arbitrum-mainnet.infura.io/v3/e98d53689b66463ea30f45bc94e28aab",
  },
  pool: {
    tokenA: ARBITRUM_WETH_TOKEN,
    tokenB: ARBITRUM_USDC_TOKEN,
    fee: FeeAmount.LOW,
  },
  chart: {
    numSurroundingTicks: 100,
  },
};

// Arbitrum ezETH WETH Pool Configuration
export const ArbitrumEzethWethConfig: LiquidityPoolConfig = {
  env: Environment.ARBITRUM,
  rpc: {
    mainnet:
      "https://arbitrum-mainnet.infura.io/v3/e98d53689b66463ea30f45bc94e28aab",
  },
  pool: {
    tokenA: ARBITRUM_EZETH_TOKEN,
    tokenB: ARBITRUM_WETH_TOKEN,
    fee: FeeAmount.LOWEST,
  },
  chart: {
    numSurroundingTicks: 100,
  },
};

// Arbitrum ETH USDC Swap Configuration
export const ArbitrumEthUsdcSwapConfig: SwapConfig = {
  rpc: {
    mainnet:
      "https://arbitrum-mainnet.infura.io/v3/e98d53689b66463ea30f45bc94e28aab",
  },
  tokens: {
    in: ARBITRUM_WETH_TOKEN,
    out: ARBITRUM_USDC_TOKEN,
    poolFee: FeeAmount.LOW,
  },
};

// Arbitrum ezETH WETH Swap Configuration
export const ArbitrumEzethWethSwapConfig: SwapConfig = {
  rpc: {
    mainnet:
      "https://arbitrum-mainnet.infura.io/v3/e98d53689b66463ea30f45bc94e28aab",
  },
  tokens: {
    in: ARBITRUM_EZETH_TOKEN,
    out: ARBITRUM_WETH_TOKEN,
    poolFee: FeeAmount.LOWEST,
  },
};
