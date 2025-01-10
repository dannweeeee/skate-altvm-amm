import { SUPPORTED_CHAINS, Token } from "@uniswap/sdk-core";

///////////////////////////////////
/////// CONTRACT ADDRESSES ////////
///////////////////////////////////

// Optimism Uniswap V3 Factory Contract
export const OPTIMISM_UNISWAP_V3_FACTORY_CONTRACT_ADDRESS =
  "0x1f98431c8ad98523631ae4a59f267346ea31f984";

// Optimism ETH USDC Liquidity Pool Contract
export const OPTIMISM_ETH_USDC_POOL_CONTRACT_ADDRESS =
  "0x1fb3cf6e48f1e7b10213e7b6d87d4c073c7fdb7b";

// Optimism EZETH WSTETH Liquidity Pool Contract
export const OPTIMISM_EZETH_WSTETH_POOL_CONTRACT_ADDRESS =
  "0xb40da71c49c745dd3ab801882b1d410760541678";

// Optimism Quoter Contract
export const OPTIMISM_QUOTER_CONTRACT_ADDRESS =
  "0xb27308f9f90d607463bb33ea1bebb41c27ce5ab6";

// Optimism QuoterV2 Contract
export const OPTIMISM_QUOTER_V2_CONTRACT_ADDRESS =
  "0x61ffe014ba17989e743c5f6cb21bf9697530b21e";

////////////////////////////////////
///// TOKEN CONTRACT ADDRESSES /////
////////////////////////////////////

export const OPTIMISM_WETH_TOKEN = new Token(
  SUPPORTED_CHAINS[1],
  "0x4200000000000000000000000000000000000006",
  18,
  "WETH",
  "Wrapped Ether"
);

export const OPTIMISM_USDC_TOKEN = new Token(
  SUPPORTED_CHAINS[1],
  "0x0b2c639c533813f4aa9d7837caf62653d097ff85",
  6,
  "USDC.e",
  "USD//C.e"
);

export const OPTIMISM_EZETH_TOKEN = new Token(
  SUPPORTED_CHAINS[1],
  "0x2416092f143378750bb29b79ed961ab195cceea5",
  18,
  "ezETH",
  "Renzo Restaked ETH"
);

export const OPTIMISM_WSTETH_TOKEN = new Token(
  SUPPORTED_CHAINS[1],
  "0x1f32b1c2345538c0c6f582fcb022739c4a194ebb",
  18,
  "wstETH",
  "Wrapped Lido Staked ETH"
);
