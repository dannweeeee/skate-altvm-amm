import { SUPPORTED_CHAINS, Token } from "@uniswap/sdk-core";

///////////////////////////////////
/////// CONTRACT ADDRESSES ////////
///////////////////////////////////

// Ethereum Uniswap V3 Factory Contract
export const ETHEREUM_UNISWAP_V3_FACTORY_CONTRACT_ADDRESS =
  "0x1f98431c8ad98523631ae4a59f267346ea31f984";

// Ethereum ETH USDC Liquidity Pool Contract
export const ETHEREUM_ETH_USDC_POOL_CONTRACT_ADDRESS =
  "0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640";

// Ethereum ezETH WETH Liquidity Pool Contract
export const ETHEREUM_EZETH_WETH_POOL_CONTRACT_ADDRESS =
  "0xbe80225f09645f172b079394312220637c440a63";

// Ethereum Quoter Contract
export const ETHEREUM_QUOTER_CONTRACT_ADDRESS =
  "0xb27308f9f90d607463bb33ea1bebb41c27ce5ab6";

// Ethereum QuoterV2 Contract
export const ETHEREUM_QUOTER_V2_CONTRACT_ADDRESS =
  "0x61ffe014ba17989e743c5f6cb21bf9697530b21e";

////////////////////////////////////
///// TOKEN CONTRACT ADDRESSES /////
////////////////////////////////////

export const ETHEREUM_WETH_TOKEN = new Token(
  SUPPORTED_CHAINS[0],
  "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
  18,
  "WETH",
  "Wrapped Ether"
);

export const ETHEREUM_USDC_TOKEN = new Token(
  SUPPORTED_CHAINS[0],
  "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
  6,
  "USDC",
  "USD//C"
);

export const ETHEREUM_EZETH_TOKEN = new Token(
  SUPPORTED_CHAINS[0],
  "0xbf5495efe5db9ce00f80364c8b423567e58d2110",
  18,
  "ezETH",
  "Renzo Restaked ETH"
);
