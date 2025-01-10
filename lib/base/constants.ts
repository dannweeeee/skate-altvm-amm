import { SUPPORTED_CHAINS, Token } from "@uniswap/sdk-core";

///////////////////////////////////
/////// CONTRACT ADDRESSES ////////
///////////////////////////////////

// Base ETH USDC Liquidity Pool Contract
export const BASE_ETH_USDC_POOL_CONTRACT_ADDRESS =
  "0xd0b53d9277642d899df5c87a3966a349a798f224";

// Base ezETH WETH Liquidity Pool Contract
export const BASE_EZETH_WETH_POOL_CONTRACT_ADDRESS =
  "0x58603091b4da10685e114d85e330cab36e655627";

// Base Uniswap V3 Factory Contract
export const BASE_UNISWAP_V3_FACTORY_CONTRACT_ADDRESS =
  "0x33128a8fc17869897dce68ed026d694621f6fdfd";

// Base QuoterV2 Contract
export const BASE_QUOTER_V2_CONTRACT_ADDRESS =
  "0x3d4e44eb1374240ce5f1b871ab261cd16335b76a";

////////////////////////////////////
///// TOKEN CONTRACT ADDRESSES /////
////////////////////////////////////

export const BASE_WETH_TOKEN = new Token(
  SUPPORTED_CHAINS[15],
  "0x4200000000000000000000000000000000000006",
  18,
  "WETH",
  "Wrapped Ether"
);

export const BASE_USDC_TOKEN = new Token(
  SUPPORTED_CHAINS[15],
  "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",
  6,
  "USDC",
  "USD//C"
);

export const BASE_EZETH_TOKEN = new Token(
  SUPPORTED_CHAINS[15],
  "0x2416092f143378750bb29b79ed961ab195cceea5",
  18,
  "ezETH",
  "Renzo Restaked ETH"
);
