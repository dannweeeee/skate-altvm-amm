import { ethers } from "ethers";
import {
  ArbitrumEthUsdcConfig,
  BaseEthUsdcConfig,
  EthereumEthUsdcConfig,
  OptimismEthUsdcConfig,
} from "../config";
import { BaseProvider } from "@ethersproject/providers";

// Providers
const mainnetProvider = new ethers.providers.JsonRpcProvider(
  EthereumEthUsdcConfig.rpc.mainnet
);

const baseProvider = new ethers.providers.JsonRpcProvider(
  BaseEthUsdcConfig.rpc.mainnet
);

const optimismProvider = new ethers.providers.JsonRpcProvider(
  OptimismEthUsdcConfig.rpc.mainnet
);

const arbitrumProvider = new ethers.providers.JsonRpcProvider(
  ArbitrumEthUsdcConfig.rpc.mainnet
);

// Provider  Functions
export function getMainnetProvider(): BaseProvider {
  return mainnetProvider;
}

export function getBaseProvider(): BaseProvider {
  return baseProvider;
}

export function getOptimismProvider(): BaseProvider {
  return optimismProvider;
}

export function getArbitrumProvider(): BaseProvider {
  return arbitrumProvider;
}
