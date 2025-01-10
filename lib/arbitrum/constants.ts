import { SUPPORTED_CHAINS, Token } from "@uniswap/sdk-core";

///////////////////////////////////
/////// CONTRACT ADDRESSES ////////
///////////////////////////////////

// Arbitrum Uniswap V3 Factory Contract
export const ARBITRUM_UNISWAP_V3_FACTORY_CONTRACT_ADDRESS =
  "0x1f98431c8ad98523631ae4a59f267346ea31f984";

// Arbitrum ETH USDC Liquidity Pool Contract
export const ARBITRUM_ETH_USDC_POOL_CONTRACT_ADDRESS =
  "0xc6962004f452be9203591991d15f6b388e09e8d0";

// Arbitrum ezETH WETH Liquidity Pool Contract
export const ARBITRUM_EZETH_WETH_POOL_CONTRACT_ADDRESS =
  "0x40cc6f68400958bf7225e8a762d3ad41c1064086";

// Arbitrum Quoter Contract Address
export const ARBITRUM_QUOTER_CONTRACT_ADDRESS =
  "0xb27308f9f90d607463bb33ea1bebb41c27ce5ab6";

// Arbitrum QuoterV2 Contract Address
export const ARBITRUM_QUOTER_V2_CONTRACT_ADDRESS =
  "0x61ffe014ba17989e743c5f6cb21bf9697530b21e";

////////////////////////////////////
///// TOKEN CONTRACT ADDRESSES /////
////////////////////////////////////

export const ARBITRUM_WETH_TOKEN = new Token(
  SUPPORTED_CHAINS[4],
  "0x82af49447d8a07e3bd95bd0d56f35241523fbab1",
  18,
  "WETH",
  "Wrapped Ether"
);

export const ARBITRUM_USDC_TOKEN = new Token(
  SUPPORTED_CHAINS[4],
  "0xaf88d065e77c8cc2239327c5edb3a432268e5831",
  6,
  "USDC",
  "USD//C"
);

export const ARBITRUM_EZETH_TOKEN = new Token(
  SUPPORTED_CHAINS[4],
  "0x2416092f143378750bb29b79ed961ab195cceea5",
  18,
  "ezETH",
  "Renzo Restaked ETH"
);
