// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace Uniswapv3ArbitrumTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Arbitrum_BigDecimal: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  Arbitrum_Bytes: { input: any; output: any; }
  Arbitrum_Int8: { input: any; output: any; }
  Timestamp: { input: any; output: any; }
};

export type Arbitrum_Account = {
  /**  { Account address }  */
  id: Scalars['Arbitrum_Bytes']['output'];
  /**  Number of positions this account has  */
  positionCount: Scalars['Int']['output'];
  /**  All positions that belong to this account  */
  positions: Array<Arbitrum_Position>;
  /**  Number of open positions this account has  */
  openPositionCount: Scalars['Int']['output'];
  /**  Number of closed positions this account has  */
  closedPositionCount: Scalars['Int']['output'];
  /**  Number of deposits this account made  */
  depositCount: Scalars['Int']['output'];
  /**  All deposit events of this account  */
  deposits: Array<Arbitrum_Deposit>;
  /**  Number of withdrawals this account made  */
  withdrawCount: Scalars['Int']['output'];
  /**  All withdraw events of this account  */
  withdraws: Array<Arbitrum_Withdraw>;
  /**  Number of times this account has traded/swapped */
  swapCount: Scalars['Int']['output'];
  /**  All swap events of this account  */
  swaps: Array<Arbitrum_Swap>;
};


export type Arbitrum_AccountpositionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrum_Position_orderBy>;
  orderDirection?: InputMaybe<Arbitrum_OrderDirection>;
  where?: InputMaybe<Arbitrum_Position_filter>;
};


export type Arbitrum_AccountdepositsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrum_Deposit_orderBy>;
  orderDirection?: InputMaybe<Arbitrum_OrderDirection>;
  where?: InputMaybe<Arbitrum_Deposit_filter>;
};


export type Arbitrum_AccountwithdrawsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrum_Withdraw_orderBy>;
  orderDirection?: InputMaybe<Arbitrum_OrderDirection>;
  where?: InputMaybe<Arbitrum_Withdraw_filter>;
};


export type Arbitrum_AccountswapsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrum_Swap_orderBy>;
  orderDirection?: InputMaybe<Arbitrum_OrderDirection>;
  where?: InputMaybe<Arbitrum_Swap_filter>;
};

export type Arbitrum_Account_filter = {
  id?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Arbitrum_Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Arbitrum_Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  positionCount?: InputMaybe<Scalars['Int']['input']>;
  positionCount_not?: InputMaybe<Scalars['Int']['input']>;
  positionCount_gt?: InputMaybe<Scalars['Int']['input']>;
  positionCount_lt?: InputMaybe<Scalars['Int']['input']>;
  positionCount_gte?: InputMaybe<Scalars['Int']['input']>;
  positionCount_lte?: InputMaybe<Scalars['Int']['input']>;
  positionCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  positionCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  positions_?: InputMaybe<Arbitrum_Position_filter>;
  openPositionCount?: InputMaybe<Scalars['Int']['input']>;
  openPositionCount_not?: InputMaybe<Scalars['Int']['input']>;
  openPositionCount_gt?: InputMaybe<Scalars['Int']['input']>;
  openPositionCount_lt?: InputMaybe<Scalars['Int']['input']>;
  openPositionCount_gte?: InputMaybe<Scalars['Int']['input']>;
  openPositionCount_lte?: InputMaybe<Scalars['Int']['input']>;
  openPositionCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  openPositionCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  closedPositionCount?: InputMaybe<Scalars['Int']['input']>;
  closedPositionCount_not?: InputMaybe<Scalars['Int']['input']>;
  closedPositionCount_gt?: InputMaybe<Scalars['Int']['input']>;
  closedPositionCount_lt?: InputMaybe<Scalars['Int']['input']>;
  closedPositionCount_gte?: InputMaybe<Scalars['Int']['input']>;
  closedPositionCount_lte?: InputMaybe<Scalars['Int']['input']>;
  closedPositionCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  closedPositionCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  depositCount?: InputMaybe<Scalars['Int']['input']>;
  depositCount_not?: InputMaybe<Scalars['Int']['input']>;
  depositCount_gt?: InputMaybe<Scalars['Int']['input']>;
  depositCount_lt?: InputMaybe<Scalars['Int']['input']>;
  depositCount_gte?: InputMaybe<Scalars['Int']['input']>;
  depositCount_lte?: InputMaybe<Scalars['Int']['input']>;
  depositCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  depositCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  deposits_?: InputMaybe<Arbitrum_Deposit_filter>;
  withdrawCount?: InputMaybe<Scalars['Int']['input']>;
  withdrawCount_not?: InputMaybe<Scalars['Int']['input']>;
  withdrawCount_gt?: InputMaybe<Scalars['Int']['input']>;
  withdrawCount_lt?: InputMaybe<Scalars['Int']['input']>;
  withdrawCount_gte?: InputMaybe<Scalars['Int']['input']>;
  withdrawCount_lte?: InputMaybe<Scalars['Int']['input']>;
  withdrawCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  withdrawCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  withdraws_?: InputMaybe<Arbitrum_Withdraw_filter>;
  swapCount?: InputMaybe<Scalars['Int']['input']>;
  swapCount_not?: InputMaybe<Scalars['Int']['input']>;
  swapCount_gt?: InputMaybe<Scalars['Int']['input']>;
  swapCount_lt?: InputMaybe<Scalars['Int']['input']>;
  swapCount_gte?: InputMaybe<Scalars['Int']['input']>;
  swapCount_lte?: InputMaybe<Scalars['Int']['input']>;
  swapCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  swapCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  swaps_?: InputMaybe<Arbitrum_Swap_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Arbitrum_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arbitrum_Account_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arbitrum_Account_filter>>>;
};

export type Arbitrum_Account_orderBy =
  | 'id'
  | 'positionCount'
  | 'positions'
  | 'openPositionCount'
  | 'closedPositionCount'
  | 'depositCount'
  | 'deposits'
  | 'withdrawCount'
  | 'withdraws'
  | 'swapCount'
  | 'swaps';

export type Arbitrum_ActiveAccount = {
  /**  { daily/hourly }-{ Address of the account }-{ Days/hours since Unix epoch }  */
  id: Scalars['Arbitrum_Bytes']['output'];
};

export type Arbitrum_ActiveAccount_filter = {
  id?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Arbitrum_Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Arbitrum_Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Arbitrum_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arbitrum_ActiveAccount_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arbitrum_ActiveAccount_filter>>>;
};

export type Arbitrum_ActiveAccount_orderBy =
  | 'id';

export type Arbitrum_Aggregation_interval =
  | 'hour'
  | 'day';

export type Arbitrum_BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Arbitrum_Block_height = {
  hash?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

/**
 * An event is any user action that occurs in a protocol. Generally, they are Ethereum events
 * emitted by a function in the smart contracts, stored in transaction receipts as event logs.
 * However, some user actions of interest are function calls that don't emit events. For example,
 * the deposit and withdraw functions in Yearn do not emit any events. In our subgraphs, we still
 * store them as events, although they are not technically Ethereum events emitted by smart
 * contracts.
 *
 */
export type Arbitrum_Deposit = {
  /**  { Transaction hash }-{ Log index }  */
  id: Scalars['Arbitrum_Bytes']['output'];
  /**  Transaction hash of the transaction that emitted this event  */
  hash: Scalars['Arbitrum_Bytes']['output'];
  /**  Nonce of the transaction that emitted this event  */
  nonce: Scalars['BigInt']['output'];
  /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
  logIndex: Scalars['Int']['output'];
  /**  Gas limit of the transaction that emitted this event  */
  gasLimit?: Maybe<Scalars['BigInt']['output']>;
  /**  Gas used in this transaction. (Optional because not every chain will support this)  */
  gasUsed?: Maybe<Scalars['BigInt']['output']>;
  /**  Gas price of the transaction that emitted this event  */
  gasPrice?: Maybe<Scalars['BigInt']['output']>;
  /**  The protocol this transaction belongs to  */
  protocol: Arbitrum_DexAmmProtocol;
  /**  Account that emitted this event  */
  account: Arbitrum_Account;
  /**  The user position changed by this event  */
  position?: Maybe<Arbitrum_Position>;
  /**  The pool involving this event  */
  pool: Arbitrum_LiquidityPool;
  /**  lower tick of position  */
  tickLower?: Maybe<Scalars['BigInt']['output']>;
  /**  upper tick of position  */
  tickUpper?: Maybe<Scalars['BigInt']['output']>;
  /**  Block number of this event  */
  blockNumber: Scalars['BigInt']['output'];
  /**  Timestamp of this event  */
  timestamp: Scalars['BigInt']['output'];
  /**  Amount of liquidity minted  */
  liquidity: Scalars['BigInt']['output'];
  /**  Input tokens of the pool. E.g. WETH and USDC to a WETH-USDC pool  */
  inputTokens: Array<Arbitrum_Token>;
  /**  Amount of input tokens in the token's native unit  */
  inputTokenAmounts: Array<Scalars['BigInt']['output']>;
  /**  Amount of input tokens in the liquidity pool  */
  reserveAmounts?: Maybe<Array<Scalars['BigInt']['output']>>;
  /**  USD-normalized value of the transaction of the underlying (e.g. sum of tokens deposited into a pool)  */
  amountUSD: Scalars['Arbitrum_BigDecimal']['output'];
};


/**
 * An event is any user action that occurs in a protocol. Generally, they are Ethereum events
 * emitted by a function in the smart contracts, stored in transaction receipts as event logs.
 * However, some user actions of interest are function calls that don't emit events. For example,
 * the deposit and withdraw functions in Yearn do not emit any events. In our subgraphs, we still
 * store them as events, although they are not technically Ethereum events emitted by smart
 * contracts.
 *
 */
export type Arbitrum_DepositinputTokensArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrum_Token_orderBy>;
  orderDirection?: InputMaybe<Arbitrum_OrderDirection>;
  where?: InputMaybe<Arbitrum_Token_filter>;
};

export type Arbitrum_Deposit_filter = {
  id?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Arbitrum_Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Arbitrum_Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  hash?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  hash_not?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  hash_gt?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  hash_lt?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  hash_gte?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  hash_lte?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  hash_in?: InputMaybe<Array<Scalars['Arbitrum_Bytes']['input']>>;
  hash_not_in?: InputMaybe<Array<Scalars['Arbitrum_Bytes']['input']>>;
  hash_contains?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  hash_not_contains?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  nonce?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_not?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_gt?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_lt?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_gte?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_lte?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  nonce_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex?: InputMaybe<Scalars['Int']['input']>;
  logIndex_not?: InputMaybe<Scalars['Int']['input']>;
  logIndex_gt?: InputMaybe<Scalars['Int']['input']>;
  logIndex_lt?: InputMaybe<Scalars['Int']['input']>;
  logIndex_gte?: InputMaybe<Scalars['Int']['input']>;
  logIndex_lte?: InputMaybe<Scalars['Int']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  gasLimit?: InputMaybe<Scalars['BigInt']['input']>;
  gasLimit_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasLimit_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasLimit_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasLimit_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasLimit_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasLimit_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasLimit_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  protocol?: InputMaybe<Scalars['String']['input']>;
  protocol_not?: InputMaybe<Scalars['String']['input']>;
  protocol_gt?: InputMaybe<Scalars['String']['input']>;
  protocol_lt?: InputMaybe<Scalars['String']['input']>;
  protocol_gte?: InputMaybe<Scalars['String']['input']>;
  protocol_lte?: InputMaybe<Scalars['String']['input']>;
  protocol_in?: InputMaybe<Array<Scalars['String']['input']>>;
  protocol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  protocol_contains?: InputMaybe<Scalars['String']['input']>;
  protocol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  protocol_not_contains?: InputMaybe<Scalars['String']['input']>;
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  protocol_starts_with?: InputMaybe<Scalars['String']['input']>;
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  protocol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  protocol_ends_with?: InputMaybe<Scalars['String']['input']>;
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  protocol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  protocol_?: InputMaybe<Arbitrum_DexAmmProtocol_filter>;
  account?: InputMaybe<Scalars['String']['input']>;
  account_not?: InputMaybe<Scalars['String']['input']>;
  account_gt?: InputMaybe<Scalars['String']['input']>;
  account_lt?: InputMaybe<Scalars['String']['input']>;
  account_gte?: InputMaybe<Scalars['String']['input']>;
  account_lte?: InputMaybe<Scalars['String']['input']>;
  account_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_contains?: InputMaybe<Scalars['String']['input']>;
  account_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_contains?: InputMaybe<Scalars['String']['input']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_?: InputMaybe<Arbitrum_Account_filter>;
  position?: InputMaybe<Scalars['String']['input']>;
  position_not?: InputMaybe<Scalars['String']['input']>;
  position_gt?: InputMaybe<Scalars['String']['input']>;
  position_lt?: InputMaybe<Scalars['String']['input']>;
  position_gte?: InputMaybe<Scalars['String']['input']>;
  position_lte?: InputMaybe<Scalars['String']['input']>;
  position_in?: InputMaybe<Array<Scalars['String']['input']>>;
  position_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  position_contains?: InputMaybe<Scalars['String']['input']>;
  position_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  position_not_contains?: InputMaybe<Scalars['String']['input']>;
  position_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  position_starts_with?: InputMaybe<Scalars['String']['input']>;
  position_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  position_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  position_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  position_ends_with?: InputMaybe<Scalars['String']['input']>;
  position_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  position_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  position_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  position_?: InputMaybe<Arbitrum_Position_filter>;
  pool?: InputMaybe<Scalars['String']['input']>;
  pool_not?: InputMaybe<Scalars['String']['input']>;
  pool_gt?: InputMaybe<Scalars['String']['input']>;
  pool_lt?: InputMaybe<Scalars['String']['input']>;
  pool_gte?: InputMaybe<Scalars['String']['input']>;
  pool_lte?: InputMaybe<Scalars['String']['input']>;
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_contains?: InputMaybe<Scalars['String']['input']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_?: InputMaybe<Arbitrum_LiquidityPool_filter>;
  tickLower?: InputMaybe<Scalars['BigInt']['input']>;
  tickLower_not?: InputMaybe<Scalars['BigInt']['input']>;
  tickLower_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tickLower_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tickLower_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tickLower_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tickLower_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tickLower_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tickUpper?: InputMaybe<Scalars['BigInt']['input']>;
  tickUpper_not?: InputMaybe<Scalars['BigInt']['input']>;
  tickUpper_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tickUpper_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tickUpper_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tickUpper_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tickUpper_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tickUpper_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidity?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_not?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_gt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_lt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_gte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_lte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidity_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  inputTokens?: InputMaybe<Array<Scalars['String']['input']>>;
  inputTokens_not?: InputMaybe<Array<Scalars['String']['input']>>;
  inputTokens_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  inputTokens_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  inputTokens_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  inputTokens_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  inputTokens_?: InputMaybe<Arbitrum_Token_filter>;
  inputTokenAmounts?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  inputTokenAmounts_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  inputTokenAmounts_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  inputTokenAmounts_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  inputTokenAmounts_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  inputTokenAmounts_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  reserveAmounts?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  reserveAmounts_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  reserveAmounts_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  reserveAmounts_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  reserveAmounts_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  reserveAmounts_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amountUSD?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  amountUSD_not?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  amountUSD_gt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  amountUSD_lt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  amountUSD_gte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  amountUSD_lte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  amountUSD_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Arbitrum_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arbitrum_Deposit_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arbitrum_Deposit_filter>>>;
};

export type Arbitrum_Deposit_orderBy =
  | 'id'
  | 'hash'
  | 'nonce'
  | 'logIndex'
  | 'gasLimit'
  | 'gasUsed'
  | 'gasPrice'
  | 'protocol'
  | 'protocol__id'
  | 'protocol__name'
  | 'protocol__slug'
  | 'protocol__schemaVersion'
  | 'protocol__subgraphVersion'
  | 'protocol__methodologyVersion'
  | 'protocol__network'
  | 'protocol__type'
  | 'protocol__totalValueLockedUSD'
  | 'protocol__totalLiquidityUSD'
  | 'protocol__activeLiquidityUSD'
  | 'protocol__uncollectedProtocolSideValueUSD'
  | 'protocol__uncollectedSupplySideValueUSD'
  | 'protocol__protocolControlledValueUSD'
  | 'protocol__cumulativeVolumeUSD'
  | 'protocol__cumulativeSupplySideRevenueUSD'
  | 'protocol__cumulativeProtocolSideRevenueUSD'
  | 'protocol__cumulativeTotalRevenueUSD'
  | 'protocol__cumulativeUniqueUsers'
  | 'protocol__cumulativeUniqueLPs'
  | 'protocol__cumulativeUniqueTraders'
  | 'protocol__totalPoolCount'
  | 'protocol__openPositionCount'
  | 'protocol__cumulativePositionCount'
  | 'protocol__lastSnapshotDayID'
  | 'protocol__lastUpdateTimestamp'
  | 'protocol__lastUpdateBlockNumber'
  | 'protocol___regenesis'
  | 'account'
  | 'account__id'
  | 'account__positionCount'
  | 'account__openPositionCount'
  | 'account__closedPositionCount'
  | 'account__depositCount'
  | 'account__withdrawCount'
  | 'account__swapCount'
  | 'position'
  | 'position__id'
  | 'position__hashOpened'
  | 'position__hashClosed'
  | 'position__blockNumberOpened'
  | 'position__timestampOpened'
  | 'position__blockNumberClosed'
  | 'position__timestampClosed'
  | 'position__liquidityTokenType'
  | 'position__liquidity'
  | 'position__liquidityUSD'
  | 'position__cumulativeDepositUSD'
  | 'position__cumulativeWithdrawUSD'
  | 'position__depositCount'
  | 'position__withdrawCount'
  | 'pool'
  | 'pool__id'
  | 'pool__name'
  | 'pool__symbol'
  | 'pool__liquidityTokenType'
  | 'pool__isSingleSided'
  | 'pool__createdTimestamp'
  | 'pool__createdBlockNumber'
  | 'pool__tick'
  | 'pool__totalValueLockedUSD'
  | 'pool__totalLiquidity'
  | 'pool__totalLiquidityUSD'
  | 'pool__activeLiquidity'
  | 'pool__activeLiquidityUSD'
  | 'pool__cumulativeSupplySideRevenueUSD'
  | 'pool__cumulativeProtocolSideRevenueUSD'
  | 'pool__cumulativeTotalRevenueUSD'
  | 'pool__cumulativeVolumeUSD'
  | 'pool__stakedOutputTokenAmount'
  | 'pool__cumulativeDepositCount'
  | 'pool__cumulativeWithdrawCount'
  | 'pool__cumulativeSwapCount'
  | 'pool__positionCount'
  | 'pool__openPositionCount'
  | 'pool__closedPositionCount'
  | 'pool__lastSnapshotDayID'
  | 'pool__lastSnapshotHourID'
  | 'pool__lastUpdateTimestamp'
  | 'pool__lastUpdateBlockNumber'
  | 'tickLower'
  | 'tickUpper'
  | 'blockNumber'
  | 'timestamp'
  | 'liquidity'
  | 'inputTokens'
  | 'inputTokenAmounts'
  | 'reserveAmounts'
  | 'amountUSD';

export type Arbitrum_DexAmmProtocol = Arbitrum_Protocol & {
  /**  Smart contract address of the protocol's main contract (Factory, Registry, etc)  */
  id: Scalars['Arbitrum_Bytes']['output'];
  /**  Name of the protocol, including version. e.g. Uniswap v3  */
  name: Scalars['String']['output'];
  /**  Slug of protocol, including version. e.g. uniswap-v3  */
  slug: Scalars['String']['output'];
  /**  Version of the subgraph schema, in SemVer format (e.g. 1.0.0)  */
  schemaVersion: Scalars['String']['output'];
  /**  Version of the subgraph implementation, in SemVer format (e.g. 1.0.0)  */
  subgraphVersion: Scalars['String']['output'];
  /**  Version of the methodology used to compute metrics, loosely based on SemVer format (e.g. 1.0.0)  */
  methodologyVersion: Scalars['String']['output'];
  /**  The blockchain network this subgraph is indexing on  */
  network: Arbitrum_Network;
  /**  The type of protocol (e.g. DEX, Lending, Yield, etc)  */
  type: Arbitrum_ProtocolType;
  /**  Current TVL (Total Value Locked) of the entire protocol  */
  totalValueLockedUSD: Scalars['Arbitrum_BigDecimal']['output'];
  /**  The sum of all active and non-active liquidity in USD for this pool.  */
  totalLiquidityUSD: Scalars['Arbitrum_BigDecimal']['output'];
  /**  All liquidity in USD that is active. Will be equal to totalLiquidity except for in concentrated liquidity - where activeLiquidity is all liquidity positions that contain the pools current tick.  */
  activeLiquidityUSD: Scalars['Arbitrum_BigDecimal']['output'];
  /**  All protocol-side value locking in USD that remains uncollected and unused in the protocol.  */
  uncollectedProtocolSideValueUSD: Scalars['Arbitrum_BigDecimal']['output'];
  /**  All supply-side value locking in USD that remains uncollected and unused in the protocol.  */
  uncollectedSupplySideValueUSD: Scalars['Arbitrum_BigDecimal']['output'];
  /**  Current PCV (Protocol Controlled Value). Only relevant for protocols with PCV.  */
  protocolControlledValueUSD?: Maybe<Scalars['Arbitrum_BigDecimal']['output']>;
  /**  All historical volume in USD  */
  cumulativeVolumeUSD: Scalars['Arbitrum_BigDecimal']['output'];
  /**  Revenue claimed by suppliers to the protocol. LPs on DEXs (e.g. 0.25% of the swap fee in Sushiswap). Depositors on Lending Protocols. NFT sellers on OpenSea.  */
  cumulativeSupplySideRevenueUSD: Scalars['Arbitrum_BigDecimal']['output'];
  /**  Gross revenue for the protocol (revenue claimed by protocol). Examples: AMM protocol fee (Sushi’s 0.05%). OpenSea 10% sell fee.  */
  cumulativeProtocolSideRevenueUSD: Scalars['Arbitrum_BigDecimal']['output'];
  /**  All revenue generated by the protocol. e.g. 0.30% of swap fee in Sushiswap, all yield generated by Yearn.  */
  cumulativeTotalRevenueUSD: Scalars['Arbitrum_BigDecimal']['output'];
  /**  Number of cumulative unique users  */
  cumulativeUniqueUsers: Scalars['Int']['output'];
  /**  Number of cumulative liquidity providers  */
  cumulativeUniqueLPs: Scalars['Int']['output'];
  /**  Number of cumulative traders  */
  cumulativeUniqueTraders: Scalars['Int']['output'];
  /**  Total number of pools  */
  totalPoolCount: Scalars['Int']['output'];
  /**  Total number of open positions  */
  openPositionCount: Scalars['Int']['output'];
  /**  Total number of positions (open and closed)  */
  cumulativePositionCount: Scalars['Int']['output'];
  /**  Day ID of the most recent daily snapshot  */
  lastSnapshotDayID: Scalars['Int']['output'];
  /**  Timestamp of the last time this entity was updated  */
  lastUpdateTimestamp: Scalars['BigInt']['output'];
  /**  Block number of the last time this entity was updated  */
  lastUpdateBlockNumber: Scalars['BigInt']['output'];
  /**  Daily usage metrics for this protocol  */
  dailyUsageMetrics: Array<Arbitrum_UsageMetricsDailySnapshot>;
  /**  Hourly usage metrics for this protocol  */
  hourlyUsageMetrics: Array<Arbitrum_UsageMetricsHourlySnapshot>;
  /**  Daily financial metrics for this protocol  */
  financialMetrics: Array<Arbitrum_FinancialsDailySnapshot>;
  /**  All pools that belong to this protocol  */
  pools: Array<Arbitrum_LiquidityPool>;
  /**  This is a boolean to indicate whether or not the pools have been instantiated the were initialized before Optimism regenesis  */
  _regenesis: Scalars['Boolean']['output'];
};


export type Arbitrum_DexAmmProtocoldailyUsageMetricsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrum_UsageMetricsDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<Arbitrum_OrderDirection>;
  where?: InputMaybe<Arbitrum_UsageMetricsDailySnapshot_filter>;
};


export type Arbitrum_DexAmmProtocolhourlyUsageMetricsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrum_UsageMetricsHourlySnapshot_orderBy>;
  orderDirection?: InputMaybe<Arbitrum_OrderDirection>;
  where?: InputMaybe<Arbitrum_UsageMetricsHourlySnapshot_filter>;
};


export type Arbitrum_DexAmmProtocolfinancialMetricsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrum_FinancialsDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<Arbitrum_OrderDirection>;
  where?: InputMaybe<Arbitrum_FinancialsDailySnapshot_filter>;
};


export type Arbitrum_DexAmmProtocolpoolsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrum_LiquidityPool_orderBy>;
  orderDirection?: InputMaybe<Arbitrum_OrderDirection>;
  where?: InputMaybe<Arbitrum_LiquidityPool_filter>;
};

export type Arbitrum_DexAmmProtocol_filter = {
  id?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Arbitrum_Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Arbitrum_Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_gt?: InputMaybe<Scalars['String']['input']>;
  slug_lt?: InputMaybe<Scalars['String']['input']>;
  slug_gte?: InputMaybe<Scalars['String']['input']>;
  slug_lte?: InputMaybe<Scalars['String']['input']>;
  slug_in?: InputMaybe<Array<Scalars['String']['input']>>;
  slug_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  slug_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  slug_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  slug_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  slug_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  schemaVersion?: InputMaybe<Scalars['String']['input']>;
  schemaVersion_not?: InputMaybe<Scalars['String']['input']>;
  schemaVersion_gt?: InputMaybe<Scalars['String']['input']>;
  schemaVersion_lt?: InputMaybe<Scalars['String']['input']>;
  schemaVersion_gte?: InputMaybe<Scalars['String']['input']>;
  schemaVersion_lte?: InputMaybe<Scalars['String']['input']>;
  schemaVersion_in?: InputMaybe<Array<Scalars['String']['input']>>;
  schemaVersion_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  schemaVersion_contains?: InputMaybe<Scalars['String']['input']>;
  schemaVersion_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  schemaVersion_not_contains?: InputMaybe<Scalars['String']['input']>;
  schemaVersion_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  schemaVersion_starts_with?: InputMaybe<Scalars['String']['input']>;
  schemaVersion_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  schemaVersion_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  schemaVersion_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  schemaVersion_ends_with?: InputMaybe<Scalars['String']['input']>;
  schemaVersion_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  schemaVersion_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  schemaVersion_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subgraphVersion?: InputMaybe<Scalars['String']['input']>;
  subgraphVersion_not?: InputMaybe<Scalars['String']['input']>;
  subgraphVersion_gt?: InputMaybe<Scalars['String']['input']>;
  subgraphVersion_lt?: InputMaybe<Scalars['String']['input']>;
  subgraphVersion_gte?: InputMaybe<Scalars['String']['input']>;
  subgraphVersion_lte?: InputMaybe<Scalars['String']['input']>;
  subgraphVersion_in?: InputMaybe<Array<Scalars['String']['input']>>;
  subgraphVersion_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  subgraphVersion_contains?: InputMaybe<Scalars['String']['input']>;
  subgraphVersion_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  subgraphVersion_not_contains?: InputMaybe<Scalars['String']['input']>;
  subgraphVersion_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  subgraphVersion_starts_with?: InputMaybe<Scalars['String']['input']>;
  subgraphVersion_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subgraphVersion_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  subgraphVersion_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subgraphVersion_ends_with?: InputMaybe<Scalars['String']['input']>;
  subgraphVersion_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subgraphVersion_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  subgraphVersion_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  methodologyVersion?: InputMaybe<Scalars['String']['input']>;
  methodologyVersion_not?: InputMaybe<Scalars['String']['input']>;
  methodologyVersion_gt?: InputMaybe<Scalars['String']['input']>;
  methodologyVersion_lt?: InputMaybe<Scalars['String']['input']>;
  methodologyVersion_gte?: InputMaybe<Scalars['String']['input']>;
  methodologyVersion_lte?: InputMaybe<Scalars['String']['input']>;
  methodologyVersion_in?: InputMaybe<Array<Scalars['String']['input']>>;
  methodologyVersion_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  methodologyVersion_contains?: InputMaybe<Scalars['String']['input']>;
  methodologyVersion_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  methodologyVersion_not_contains?: InputMaybe<Scalars['String']['input']>;
  methodologyVersion_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  methodologyVersion_starts_with?: InputMaybe<Scalars['String']['input']>;
  methodologyVersion_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  methodologyVersion_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  methodologyVersion_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  methodologyVersion_ends_with?: InputMaybe<Scalars['String']['input']>;
  methodologyVersion_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  methodologyVersion_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  methodologyVersion_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  network?: InputMaybe<Arbitrum_Network>;
  network_not?: InputMaybe<Arbitrum_Network>;
  network_in?: InputMaybe<Array<Arbitrum_Network>>;
  network_not_in?: InputMaybe<Array<Arbitrum_Network>>;
  type?: InputMaybe<Arbitrum_ProtocolType>;
  type_not?: InputMaybe<Arbitrum_ProtocolType>;
  type_in?: InputMaybe<Array<Arbitrum_ProtocolType>>;
  type_not_in?: InputMaybe<Array<Arbitrum_ProtocolType>>;
  totalValueLockedUSD?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  totalValueLockedUSD_not?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  totalLiquidityUSD?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  totalLiquidityUSD_not?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  totalLiquidityUSD_gt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  totalLiquidityUSD_lt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  totalLiquidityUSD_gte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  totalLiquidityUSD_lte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  totalLiquidityUSD_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  totalLiquidityUSD_not_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  activeLiquidityUSD?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  activeLiquidityUSD_not?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  activeLiquidityUSD_gt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  activeLiquidityUSD_lt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  activeLiquidityUSD_gte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  activeLiquidityUSD_lte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  activeLiquidityUSD_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  activeLiquidityUSD_not_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  uncollectedProtocolSideValueUSD?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  uncollectedProtocolSideValueUSD_not?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  uncollectedProtocolSideValueUSD_gt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  uncollectedProtocolSideValueUSD_lt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  uncollectedProtocolSideValueUSD_gte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  uncollectedProtocolSideValueUSD_lte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  uncollectedProtocolSideValueUSD_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  uncollectedProtocolSideValueUSD_not_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  uncollectedSupplySideValueUSD?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  uncollectedSupplySideValueUSD_not?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  uncollectedSupplySideValueUSD_gt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  uncollectedSupplySideValueUSD_lt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  uncollectedSupplySideValueUSD_gte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  uncollectedSupplySideValueUSD_lte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  uncollectedSupplySideValueUSD_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  uncollectedSupplySideValueUSD_not_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  protocolControlledValueUSD?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  protocolControlledValueUSD_not?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  protocolControlledValueUSD_gt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  protocolControlledValueUSD_lt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  protocolControlledValueUSD_gte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  protocolControlledValueUSD_lte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  protocolControlledValueUSD_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  protocolControlledValueUSD_not_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeVolumeUSD?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeVolumeUSD_not?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeVolumeUSD_gt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeVolumeUSD_lt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeVolumeUSD_gte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeVolumeUSD_lte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeVolumeUSD_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeVolumeUSD_not_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeSupplySideRevenueUSD?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeSupplySideRevenueUSD_not?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeSupplySideRevenueUSD_gt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeSupplySideRevenueUSD_lt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeSupplySideRevenueUSD_gte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeSupplySideRevenueUSD_lte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeSupplySideRevenueUSD_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeSupplySideRevenueUSD_not_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeProtocolSideRevenueUSD?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeProtocolSideRevenueUSD_not?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeProtocolSideRevenueUSD_gt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeProtocolSideRevenueUSD_lt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeProtocolSideRevenueUSD_gte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeProtocolSideRevenueUSD_lte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeProtocolSideRevenueUSD_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeProtocolSideRevenueUSD_not_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeTotalRevenueUSD?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeTotalRevenueUSD_not?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeTotalRevenueUSD_gt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeTotalRevenueUSD_lt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeTotalRevenueUSD_gte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeTotalRevenueUSD_lte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeTotalRevenueUSD_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeUniqueUsers?: InputMaybe<Scalars['Int']['input']>;
  cumulativeUniqueUsers_not?: InputMaybe<Scalars['Int']['input']>;
  cumulativeUniqueUsers_gt?: InputMaybe<Scalars['Int']['input']>;
  cumulativeUniqueUsers_lt?: InputMaybe<Scalars['Int']['input']>;
  cumulativeUniqueUsers_gte?: InputMaybe<Scalars['Int']['input']>;
  cumulativeUniqueUsers_lte?: InputMaybe<Scalars['Int']['input']>;
  cumulativeUniqueUsers_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  cumulativeUniqueUsers_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  cumulativeUniqueLPs?: InputMaybe<Scalars['Int']['input']>;
  cumulativeUniqueLPs_not?: InputMaybe<Scalars['Int']['input']>;
  cumulativeUniqueLPs_gt?: InputMaybe<Scalars['Int']['input']>;
  cumulativeUniqueLPs_lt?: InputMaybe<Scalars['Int']['input']>;
  cumulativeUniqueLPs_gte?: InputMaybe<Scalars['Int']['input']>;
  cumulativeUniqueLPs_lte?: InputMaybe<Scalars['Int']['input']>;
  cumulativeUniqueLPs_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  cumulativeUniqueLPs_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  cumulativeUniqueTraders?: InputMaybe<Scalars['Int']['input']>;
  cumulativeUniqueTraders_not?: InputMaybe<Scalars['Int']['input']>;
  cumulativeUniqueTraders_gt?: InputMaybe<Scalars['Int']['input']>;
  cumulativeUniqueTraders_lt?: InputMaybe<Scalars['Int']['input']>;
  cumulativeUniqueTraders_gte?: InputMaybe<Scalars['Int']['input']>;
  cumulativeUniqueTraders_lte?: InputMaybe<Scalars['Int']['input']>;
  cumulativeUniqueTraders_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  cumulativeUniqueTraders_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalPoolCount?: InputMaybe<Scalars['Int']['input']>;
  totalPoolCount_not?: InputMaybe<Scalars['Int']['input']>;
  totalPoolCount_gt?: InputMaybe<Scalars['Int']['input']>;
  totalPoolCount_lt?: InputMaybe<Scalars['Int']['input']>;
  totalPoolCount_gte?: InputMaybe<Scalars['Int']['input']>;
  totalPoolCount_lte?: InputMaybe<Scalars['Int']['input']>;
  totalPoolCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalPoolCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  openPositionCount?: InputMaybe<Scalars['Int']['input']>;
  openPositionCount_not?: InputMaybe<Scalars['Int']['input']>;
  openPositionCount_gt?: InputMaybe<Scalars['Int']['input']>;
  openPositionCount_lt?: InputMaybe<Scalars['Int']['input']>;
  openPositionCount_gte?: InputMaybe<Scalars['Int']['input']>;
  openPositionCount_lte?: InputMaybe<Scalars['Int']['input']>;
  openPositionCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  openPositionCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  cumulativePositionCount?: InputMaybe<Scalars['Int']['input']>;
  cumulativePositionCount_not?: InputMaybe<Scalars['Int']['input']>;
  cumulativePositionCount_gt?: InputMaybe<Scalars['Int']['input']>;
  cumulativePositionCount_lt?: InputMaybe<Scalars['Int']['input']>;
  cumulativePositionCount_gte?: InputMaybe<Scalars['Int']['input']>;
  cumulativePositionCount_lte?: InputMaybe<Scalars['Int']['input']>;
  cumulativePositionCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  cumulativePositionCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lastSnapshotDayID?: InputMaybe<Scalars['Int']['input']>;
  lastSnapshotDayID_not?: InputMaybe<Scalars['Int']['input']>;
  lastSnapshotDayID_gt?: InputMaybe<Scalars['Int']['input']>;
  lastSnapshotDayID_lt?: InputMaybe<Scalars['Int']['input']>;
  lastSnapshotDayID_gte?: InputMaybe<Scalars['Int']['input']>;
  lastSnapshotDayID_lte?: InputMaybe<Scalars['Int']['input']>;
  lastSnapshotDayID_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lastSnapshotDayID_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lastUpdateTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdateTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdateTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdateTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdateTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdateTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdateTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastUpdateTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastUpdateBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdateBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdateBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdateBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdateBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdateBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdateBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastUpdateBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  dailyUsageMetrics_?: InputMaybe<Arbitrum_UsageMetricsDailySnapshot_filter>;
  hourlyUsageMetrics_?: InputMaybe<Arbitrum_UsageMetricsHourlySnapshot_filter>;
  financialMetrics_?: InputMaybe<Arbitrum_FinancialsDailySnapshot_filter>;
  pools_?: InputMaybe<Arbitrum_LiquidityPool_filter>;
  _regenesis?: InputMaybe<Scalars['Boolean']['input']>;
  _regenesis_not?: InputMaybe<Scalars['Boolean']['input']>;
  _regenesis_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _regenesis_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Arbitrum_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arbitrum_DexAmmProtocol_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arbitrum_DexAmmProtocol_filter>>>;
};

export type Arbitrum_DexAmmProtocol_orderBy =
  | 'id'
  | 'name'
  | 'slug'
  | 'schemaVersion'
  | 'subgraphVersion'
  | 'methodologyVersion'
  | 'network'
  | 'type'
  | 'totalValueLockedUSD'
  | 'totalLiquidityUSD'
  | 'activeLiquidityUSD'
  | 'uncollectedProtocolSideValueUSD'
  | 'uncollectedSupplySideValueUSD'
  | 'protocolControlledValueUSD'
  | 'cumulativeVolumeUSD'
  | 'cumulativeSupplySideRevenueUSD'
  | 'cumulativeProtocolSideRevenueUSD'
  | 'cumulativeTotalRevenueUSD'
  | 'cumulativeUniqueUsers'
  | 'cumulativeUniqueLPs'
  | 'cumulativeUniqueTraders'
  | 'totalPoolCount'
  | 'openPositionCount'
  | 'cumulativePositionCount'
  | 'lastSnapshotDayID'
  | 'lastUpdateTimestamp'
  | 'lastUpdateBlockNumber'
  | 'dailyUsageMetrics'
  | 'hourlyUsageMetrics'
  | 'financialMetrics'
  | 'pools'
  | '_regenesis';

export type Arbitrum_FinancialsDailySnapshot = {
  /**  ID is # of days since Unix epoch time  */
  id: Scalars['Arbitrum_Bytes']['output'];
  /**  Number of days since Unix epoch time  */
  day: Scalars['Int']['output'];
  /**  Protocol this snapshot is associated with  */
  protocol: Arbitrum_DexAmmProtocol;
  /**  Current TVL (Total Value Locked) of the entire protocol  */
  totalValueLockedUSD: Scalars['Arbitrum_BigDecimal']['output'];
  /**  The sum of all active and non-active liquidity in USD for this pool.  */
  totalLiquidityUSD: Scalars['Arbitrum_BigDecimal']['output'];
  /**  All liquidity in USD that is active. Will be equal to totalLiquidity except for in concentrated liquidity - where activeLiquidity is all liquidity positions that contain the pools current tick.  */
  activeLiquidityUSD: Scalars['Arbitrum_BigDecimal']['output'];
  /**  All protocol-side value locking in USD that remains uncollected and unused in the protocol.  */
  uncollectedProtocolSideValueUSD: Scalars['Arbitrum_BigDecimal']['output'];
  /**  All supply-side value locking in USD that remains uncollected and unused in the protocol.  */
  uncollectedSupplySideValueUSD: Scalars['Arbitrum_BigDecimal']['output'];
  /**  Current PCV (Protocol Controlled Value). Only relevant for protocols with PCV.  */
  protocolControlledValueUSD?: Maybe<Scalars['Arbitrum_BigDecimal']['output']>;
  /**  All trade volume occurred in a given day, in USD  */
  dailyVolumeUSD: Scalars['Arbitrum_BigDecimal']['output'];
  /**  All historical trade volume in USD  */
  cumulativeVolumeUSD: Scalars['Arbitrum_BigDecimal']['output'];
  /**  Revenue claimed by suppliers to the protocol. LPs on DEXs (e.g. 0.25% of the swap fee in Sushiswap). Depositors on Lending Protocols. NFT sellers on OpenSea.  */
  dailySupplySideRevenueUSD: Scalars['Arbitrum_BigDecimal']['output'];
  /**  Revenue claimed by suppliers to the protocol. LPs on DEXs (e.g. 0.25% of the swap fee in Sushiswap). Depositors on Lending Protocols. NFT sellers on OpenSea.  */
  cumulativeSupplySideRevenueUSD: Scalars['Arbitrum_BigDecimal']['output'];
  /**  Gross revenue for the protocol (revenue claimed by protocol). Examples: AMM protocol fee (Sushi’s 0.05%). OpenSea 10% sell fee.  */
  dailyProtocolSideRevenueUSD: Scalars['Arbitrum_BigDecimal']['output'];
  /**  Gross revenue for the protocol (revenue claimed by protocol). Examples: AMM protocol fee (Sushi’s 0.05%). OpenSea 10% sell fee.  */
  cumulativeProtocolSideRevenueUSD: Scalars['Arbitrum_BigDecimal']['output'];
  /**  All revenue generated by the protocol. e.g. 0.30% of swap fee in Sushiswap, all yield generated by Yearn.  */
  dailyTotalRevenueUSD: Scalars['Arbitrum_BigDecimal']['output'];
  /**  All revenue generated by the protocol. e.g. 0.30% of swap fee in Sushiswap, all yield generated by Yearn.  */
  cumulativeTotalRevenueUSD: Scalars['Arbitrum_BigDecimal']['output'];
  /**  Timestamp of when this snapshot was taken/last modified (May be taken after interval has passed)  */
  timestamp: Scalars['BigInt']['output'];
  /**  Block number of when this snapshot was taken/last modified (May be taken after interval has passed)  */
  blockNumber: Scalars['BigInt']['output'];
};

export type Arbitrum_FinancialsDailySnapshot_filter = {
  id?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Arbitrum_Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Arbitrum_Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  day?: InputMaybe<Scalars['Int']['input']>;
  day_not?: InputMaybe<Scalars['Int']['input']>;
  day_gt?: InputMaybe<Scalars['Int']['input']>;
  day_lt?: InputMaybe<Scalars['Int']['input']>;
  day_gte?: InputMaybe<Scalars['Int']['input']>;
  day_lte?: InputMaybe<Scalars['Int']['input']>;
  day_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  day_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  protocol?: InputMaybe<Scalars['String']['input']>;
  protocol_not?: InputMaybe<Scalars['String']['input']>;
  protocol_gt?: InputMaybe<Scalars['String']['input']>;
  protocol_lt?: InputMaybe<Scalars['String']['input']>;
  protocol_gte?: InputMaybe<Scalars['String']['input']>;
  protocol_lte?: InputMaybe<Scalars['String']['input']>;
  protocol_in?: InputMaybe<Array<Scalars['String']['input']>>;
  protocol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  protocol_contains?: InputMaybe<Scalars['String']['input']>;
  protocol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  protocol_not_contains?: InputMaybe<Scalars['String']['input']>;
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  protocol_starts_with?: InputMaybe<Scalars['String']['input']>;
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  protocol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  protocol_ends_with?: InputMaybe<Scalars['String']['input']>;
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  protocol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  protocol_?: InputMaybe<Arbitrum_DexAmmProtocol_filter>;
  totalValueLockedUSD?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  totalValueLockedUSD_not?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  totalLiquidityUSD?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  totalLiquidityUSD_not?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  totalLiquidityUSD_gt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  totalLiquidityUSD_lt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  totalLiquidityUSD_gte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  totalLiquidityUSD_lte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  totalLiquidityUSD_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  totalLiquidityUSD_not_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  activeLiquidityUSD?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  activeLiquidityUSD_not?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  activeLiquidityUSD_gt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  activeLiquidityUSD_lt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  activeLiquidityUSD_gte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  activeLiquidityUSD_lte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  activeLiquidityUSD_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  activeLiquidityUSD_not_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  uncollectedProtocolSideValueUSD?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  uncollectedProtocolSideValueUSD_not?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  uncollectedProtocolSideValueUSD_gt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  uncollectedProtocolSideValueUSD_lt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  uncollectedProtocolSideValueUSD_gte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  uncollectedProtocolSideValueUSD_lte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  uncollectedProtocolSideValueUSD_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  uncollectedProtocolSideValueUSD_not_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  uncollectedSupplySideValueUSD?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  uncollectedSupplySideValueUSD_not?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  uncollectedSupplySideValueUSD_gt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  uncollectedSupplySideValueUSD_lt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  uncollectedSupplySideValueUSD_gte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  uncollectedSupplySideValueUSD_lte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  uncollectedSupplySideValueUSD_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  uncollectedSupplySideValueUSD_not_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  protocolControlledValueUSD?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  protocolControlledValueUSD_not?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  protocolControlledValueUSD_gt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  protocolControlledValueUSD_lt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  protocolControlledValueUSD_gte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  protocolControlledValueUSD_lte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  protocolControlledValueUSD_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  protocolControlledValueUSD_not_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  dailyVolumeUSD?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  dailyVolumeUSD_not?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  dailyVolumeUSD_gt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  dailyVolumeUSD_lt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  dailyVolumeUSD_gte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  dailyVolumeUSD_lte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  dailyVolumeUSD_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  dailyVolumeUSD_not_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeVolumeUSD?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeVolumeUSD_not?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeVolumeUSD_gt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeVolumeUSD_lt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeVolumeUSD_gte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeVolumeUSD_lte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeVolumeUSD_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeVolumeUSD_not_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  dailySupplySideRevenueUSD?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  dailySupplySideRevenueUSD_not?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  dailySupplySideRevenueUSD_gt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  dailySupplySideRevenueUSD_lt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  dailySupplySideRevenueUSD_gte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  dailySupplySideRevenueUSD_lte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  dailySupplySideRevenueUSD_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  dailySupplySideRevenueUSD_not_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeSupplySideRevenueUSD?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeSupplySideRevenueUSD_not?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeSupplySideRevenueUSD_gt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeSupplySideRevenueUSD_lt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeSupplySideRevenueUSD_gte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeSupplySideRevenueUSD_lte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeSupplySideRevenueUSD_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeSupplySideRevenueUSD_not_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  dailyProtocolSideRevenueUSD?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  dailyProtocolSideRevenueUSD_not?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  dailyProtocolSideRevenueUSD_gt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  dailyProtocolSideRevenueUSD_lt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  dailyProtocolSideRevenueUSD_gte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  dailyProtocolSideRevenueUSD_lte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  dailyProtocolSideRevenueUSD_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  dailyProtocolSideRevenueUSD_not_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeProtocolSideRevenueUSD?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeProtocolSideRevenueUSD_not?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeProtocolSideRevenueUSD_gt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeProtocolSideRevenueUSD_lt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeProtocolSideRevenueUSD_gte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeProtocolSideRevenueUSD_lte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeProtocolSideRevenueUSD_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeProtocolSideRevenueUSD_not_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  dailyTotalRevenueUSD?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  dailyTotalRevenueUSD_not?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  dailyTotalRevenueUSD_gt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  dailyTotalRevenueUSD_lt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  dailyTotalRevenueUSD_gte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  dailyTotalRevenueUSD_lte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  dailyTotalRevenueUSD_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  dailyTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeTotalRevenueUSD?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeTotalRevenueUSD_not?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeTotalRevenueUSD_gt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeTotalRevenueUSD_lt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeTotalRevenueUSD_gte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeTotalRevenueUSD_lte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeTotalRevenueUSD_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Arbitrum_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arbitrum_FinancialsDailySnapshot_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arbitrum_FinancialsDailySnapshot_filter>>>;
};

export type Arbitrum_FinancialsDailySnapshot_orderBy =
  | 'id'
  | 'day'
  | 'protocol'
  | 'protocol__id'
  | 'protocol__name'
  | 'protocol__slug'
  | 'protocol__schemaVersion'
  | 'protocol__subgraphVersion'
  | 'protocol__methodologyVersion'
  | 'protocol__network'
  | 'protocol__type'
  | 'protocol__totalValueLockedUSD'
  | 'protocol__totalLiquidityUSD'
  | 'protocol__activeLiquidityUSD'
  | 'protocol__uncollectedProtocolSideValueUSD'
  | 'protocol__uncollectedSupplySideValueUSD'
  | 'protocol__protocolControlledValueUSD'
  | 'protocol__cumulativeVolumeUSD'
  | 'protocol__cumulativeSupplySideRevenueUSD'
  | 'protocol__cumulativeProtocolSideRevenueUSD'
  | 'protocol__cumulativeTotalRevenueUSD'
  | 'protocol__cumulativeUniqueUsers'
  | 'protocol__cumulativeUniqueLPs'
  | 'protocol__cumulativeUniqueTraders'
  | 'protocol__totalPoolCount'
  | 'protocol__openPositionCount'
  | 'protocol__cumulativePositionCount'
  | 'protocol__lastSnapshotDayID'
  | 'protocol__lastUpdateTimestamp'
  | 'protocol__lastUpdateBlockNumber'
  | 'protocol___regenesis'
  | 'totalValueLockedUSD'
  | 'totalLiquidityUSD'
  | 'activeLiquidityUSD'
  | 'uncollectedProtocolSideValueUSD'
  | 'uncollectedSupplySideValueUSD'
  | 'protocolControlledValueUSD'
  | 'dailyVolumeUSD'
  | 'cumulativeVolumeUSD'
  | 'dailySupplySideRevenueUSD'
  | 'cumulativeSupplySideRevenueUSD'
  | 'dailyProtocolSideRevenueUSD'
  | 'cumulativeProtocolSideRevenueUSD'
  | 'dailyTotalRevenueUSD'
  | 'cumulativeTotalRevenueUSD'
  | 'timestamp'
  | 'blockNumber';

export type Arbitrum_LiquidityPool = {
  /**  Smart contract address of the pool  */
  id: Scalars['Arbitrum_Bytes']['output'];
  /**  The protocol this pool belongs to  */
  protocol: Arbitrum_DexAmmProtocol;
  /**  Name of liquidity pool (e.g. Curve.fi DAI/USDC/USDT)  */
  name?: Maybe<Scalars['String']['output']>;
  /**  Symbol of liquidity pool (e.g. 3CRV)  */
  symbol?: Maybe<Scalars['String']['output']>;
  /**  Token that is to represent ownership of liquidity  */
  liquidityToken?: Maybe<Arbitrum_Token>;
  /**  Type of token used to track liquidity  */
  liquidityTokenType?: Maybe<Arbitrum_TokenType>;
  /**  Tokens that need to be deposited to take a position in protocol. e.g. WETH and USDC to deposit into the WETH-USDC pool. Array to account for multi-asset pools like Curve and Balancer  */
  inputTokens: Array<Arbitrum_Token>;
  /**  Additional tokens that are given as reward for position in a protocol, usually in liquidity mining programs. e.g. SUSHI in the Onsen program, MATIC for Aave Polygon, usually in liquidity mining programs. e.g. SUSHI in the Onsen program, MATIC for Aave Polygon  */
  rewardTokens?: Maybe<Array<Arbitrum_RewardToken>>;
  /**  Fees per trade incurred to the user. Should include all fees that apply to a pool (e.g. Curve has a trading fee AND an admin fee, which is a portion of the trading fee. Uniswap only has a trading fee and no protocol fee. )  */
  fees: Array<Arbitrum_LiquidityPoolFee>;
  /**  Whether this pool is single-sided (e.g. Bancor, Platypus's Alternative Pool). The specifics of the implementation depends on the protocol.  */
  isSingleSided: Scalars['Boolean']['output'];
  /**  Creation timestamp  */
  createdTimestamp: Scalars['BigInt']['output'];
  /**  Creation block number  */
  createdBlockNumber: Scalars['BigInt']['output'];
  /**  Current tick representing the price of token0/token1  */
  tick?: Maybe<Scalars['BigInt']['output']>;
  /**  Current TVL (Total Value Locked) of this pool in USD  */
  totalValueLockedUSD: Scalars['Arbitrum_BigDecimal']['output'];
  /**  The sum of all active and non-active liquidity for this pool.  */
  totalLiquidity: Scalars['BigInt']['output'];
  /**  The sum of all active and non-active liquidity in USD for this pool.  */
  totalLiquidityUSD: Scalars['Arbitrum_BigDecimal']['output'];
  /**  All liquidity `k` that is active. Will be equal to totalLiquidity except for in concentrated liquidity - where activeLiquidity is all liquidity positions that contain the pools current tick.  */
  activeLiquidity: Scalars['BigInt']['output'];
  /**  All liquidity in USD that is active. Will be equal to totalLiquidity except for in concentrated liquidity - where activeLiquidity is all liquidity positions that contain the pools current tick.  */
  activeLiquidityUSD: Scalars['Arbitrum_BigDecimal']['output'];
  /**  All protocol-side value locked in token amounts that remains uncollected and unused in the pool.  */
  uncollectedProtocolSideTokenAmounts: Array<Scalars['BigInt']['output']>;
  /**  All protocol-side value locking in USD that remains uncollected and unused in the pool.  */
  uncollectedProtocolSideValuesUSD: Array<Scalars['Arbitrum_BigDecimal']['output']>;
  /**  All supply-side value locked in token amounts that remains uncollected and unused in the pool.  */
  uncollectedSupplySideTokenAmounts: Array<Scalars['BigInt']['output']>;
  /**  All supply-side value locked in USD that remains uncollected and unused in the pool.  */
  uncollectedSupplySideValuesUSD: Array<Scalars['Arbitrum_BigDecimal']['output']>;
  /**  All revenue generated by the liquidity pool, accrued to the supply side.  */
  cumulativeSupplySideRevenueUSD: Scalars['Arbitrum_BigDecimal']['output'];
  /**  All revenue generated by the liquidity pool, accrued to the protocol.  */
  cumulativeProtocolSideRevenueUSD: Scalars['Arbitrum_BigDecimal']['output'];
  /**  All revenue generated by the liquidity pool.  */
  cumulativeTotalRevenueUSD: Scalars['Arbitrum_BigDecimal']['output'];
  /**  All trade volume occurred for a specific input token, in native amount. The ordering should be the same as the pool's `inputTokens` field.  */
  cumulativeVolumeByTokenAmount: Array<Scalars['BigInt']['output']>;
  /**  All trade volume occurred for a specific input token, in USD. The ordering should be the same as the pool's `inputTokens` field.  */
  cumulativeVolumeByTokenUSD: Array<Scalars['Arbitrum_BigDecimal']['output']>;
  /**  All historical trade volume occurred in this pool, in USD  */
  cumulativeVolumeUSD: Scalars['Arbitrum_BigDecimal']['output'];
  /**  Amount of input tokens in the pool. The ordering should be the same as the pool's `inputTokens` field.  */
  inputTokenBalances: Array<Scalars['BigInt']['output']>;
  /**  Amount of input tokens in USD in the pool. The ordering should be the same as the pool's `inputTokens` field.  */
  inputTokenBalancesUSD: Array<Scalars['Arbitrum_BigDecimal']['output']>;
  /**  Weights of input tokens in the liquidity pool in percentage values. For example, 50/50 for Uniswap pools, 48.2/51.8 for a Curve pool, 10/10/80 for a Balancer pool  */
  inputTokenWeights: Array<Scalars['Arbitrum_BigDecimal']['output']>;
  /**  Total supply of output tokens that are staked (usually in the MasterChef contract). Used to calculate reward APY.  */
  stakedOutputTokenAmount?: Maybe<Scalars['BigInt']['output']>;
  /**  Per-block reward token emission as of the current block normalized to a day, in token's native amount. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
  rewardTokenEmissionsAmount?: Maybe<Array<Scalars['BigInt']['output']>>;
  /**  Per-block reward token emission as of the current block normalized to a day, in USD value. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
  rewardTokenEmissionsUSD?: Maybe<Array<Scalars['Arbitrum_BigDecimal']['output']>>;
  /**  Total number of deposits (add liquidity)  */
  cumulativeDepositCount: Scalars['Int']['output'];
  /**  Total number of withdrawals (remove liquidity)  */
  cumulativeWithdrawCount: Scalars['Int']['output'];
  /**  Total number of trades (swaps)  */
  cumulativeSwapCount: Scalars['Int']['output'];
  /**  All positions in this market  */
  positions: Array<Arbitrum_Position>;
  /**  Number of positions in this market  */
  positionCount: Scalars['Int']['output'];
  /**  Number of open positions in this market  */
  openPositionCount: Scalars['Int']['output'];
  /**  Number of closed positions in this market  */
  closedPositionCount: Scalars['Int']['output'];
  /**  Day ID of the most recent daily snapshot  */
  lastSnapshotDayID: Scalars['Int']['output'];
  /**  Hour ID of the most recent hourly snapshot  */
  lastSnapshotHourID: Scalars['Int']['output'];
  /**  Timestamp of the last time this entity was updated  */
  lastUpdateTimestamp: Scalars['BigInt']['output'];
  /**  Block number of the last time this entity was updated  */
  lastUpdateBlockNumber: Scalars['BigInt']['output'];
  /**  Liquidity pool daily snapshots  */
  dailySnapshots: Array<Arbitrum_LiquidityPoolDailySnapshot>;
  /**  Liquidity pool hourly snapshots  */
  hourlySnapshots: Array<Arbitrum_LiquidityPoolHourlySnapshot>;
  /**  All deposit (add liquidity) events occurred in this pool  */
  deposits: Array<Arbitrum_Deposit>;
  /**  All withdraw (remove liquidity) events occurred in this pool  */
  withdraws: Array<Arbitrum_Withdraw>;
  /**  All trade (swap) events occurred in this pool  */
  swaps: Array<Arbitrum_Swap>;
};


export type Arbitrum_LiquidityPoolinputTokensArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrum_Token_orderBy>;
  orderDirection?: InputMaybe<Arbitrum_OrderDirection>;
  where?: InputMaybe<Arbitrum_Token_filter>;
};


export type Arbitrum_LiquidityPoolrewardTokensArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrum_RewardToken_orderBy>;
  orderDirection?: InputMaybe<Arbitrum_OrderDirection>;
  where?: InputMaybe<Arbitrum_RewardToken_filter>;
};


export type Arbitrum_LiquidityPoolfeesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrum_LiquidityPoolFee_orderBy>;
  orderDirection?: InputMaybe<Arbitrum_OrderDirection>;
  where?: InputMaybe<Arbitrum_LiquidityPoolFee_filter>;
};


export type Arbitrum_LiquidityPoolpositionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrum_Position_orderBy>;
  orderDirection?: InputMaybe<Arbitrum_OrderDirection>;
  where?: InputMaybe<Arbitrum_Position_filter>;
};


export type Arbitrum_LiquidityPooldailySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrum_LiquidityPoolDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<Arbitrum_OrderDirection>;
  where?: InputMaybe<Arbitrum_LiquidityPoolDailySnapshot_filter>;
};


export type Arbitrum_LiquidityPoolhourlySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrum_LiquidityPoolHourlySnapshot_orderBy>;
  orderDirection?: InputMaybe<Arbitrum_OrderDirection>;
  where?: InputMaybe<Arbitrum_LiquidityPoolHourlySnapshot_filter>;
};


export type Arbitrum_LiquidityPooldepositsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrum_Deposit_orderBy>;
  orderDirection?: InputMaybe<Arbitrum_OrderDirection>;
  where?: InputMaybe<Arbitrum_Deposit_filter>;
};


export type Arbitrum_LiquidityPoolwithdrawsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrum_Withdraw_orderBy>;
  orderDirection?: InputMaybe<Arbitrum_OrderDirection>;
  where?: InputMaybe<Arbitrum_Withdraw_filter>;
};


export type Arbitrum_LiquidityPoolswapsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrum_Swap_orderBy>;
  orderDirection?: InputMaybe<Arbitrum_OrderDirection>;
  where?: InputMaybe<Arbitrum_Swap_filter>;
};

export type Arbitrum_LiquidityPoolDailySnapshot = {
  /**  { Smart contract address of the pool }-{ # of days since Unix epoch time }  */
  id: Scalars['Arbitrum_Bytes']['output'];
  /**  Number of days since Unix epoch time  */
  day: Scalars['Int']['output'];
  /**  The protocol this snapshot belongs to  */
  protocol: Arbitrum_DexAmmProtocol;
  /**  The pool this snapshot belongs to  */
  pool: Arbitrum_LiquidityPool;
  /**  Current tick representing the price of token0/token1  */
  tick?: Maybe<Scalars['BigInt']['output']>;
  /**  Current TVL (Total Value Locked) of this pool  */
  totalValueLockedUSD: Scalars['Arbitrum_BigDecimal']['output'];
  /**  The sum of all active and non-active liquidity for this pool.  */
  totalLiquidity: Scalars['BigInt']['output'];
  /**  The sum of all active and non-active liquidity in USD for this pool.  */
  totalLiquidityUSD: Scalars['Arbitrum_BigDecimal']['output'];
  /**  All liquidity `k` that is active. Will be equal to totalLiquidity except for in concentrated liquidity - where activeLiquidity is all liquidity positions that contain the pools current tick.  */
  activeLiquidity: Scalars['BigInt']['output'];
  /**  All liquidity in USD that is active. Will be equal to totalLiquidity except for in concentrated liquidity - where activeLiquidity is all liquidity positions that contain the pools current tick.  */
  activeLiquidityUSD: Scalars['Arbitrum_BigDecimal']['output'];
  /**  All protocol-side value locked in token amounts that remains uncollected and unused in the pool.  */
  uncollectedProtocolSideTokenAmounts: Array<Scalars['BigInt']['output']>;
  /**  All protocol-side value locking in USD that remains uncollected and unused in the pool.  */
  uncollectedProtocolSideValuesUSD: Array<Scalars['Arbitrum_BigDecimal']['output']>;
  /**  All supply-side value locked in token amounts that remains uncollected and unused in the pool.  */
  uncollectedSupplySideTokenAmounts: Array<Scalars['BigInt']['output']>;
  /**  All supply-side value locked in USD that remains uncollected and unused in the pool.  */
  uncollectedSupplySideValuesUSD: Array<Scalars['Arbitrum_BigDecimal']['output']>;
  /**  All revenue generated by the liquidity pool, accrued to the supply side.  */
  cumulativeSupplySideRevenueUSD: Scalars['Arbitrum_BigDecimal']['output'];
  /**  Daily revenue generated by the liquidity pool, accrued to the supply side.  */
  dailySupplySideRevenueUSD: Scalars['Arbitrum_BigDecimal']['output'];
  /**  All revenue generated by the liquidity pool, accrued to the protocol.  */
  cumulativeProtocolSideRevenueUSD: Scalars['Arbitrum_BigDecimal']['output'];
  /**  Daily revenue generated by the liquidity pool, accrued to the protocol.  */
  dailyProtocolSideRevenueUSD: Scalars['Arbitrum_BigDecimal']['output'];
  /**  All revenue generated by the liquidity pool.  */
  cumulativeTotalRevenueUSD: Scalars['Arbitrum_BigDecimal']['output'];
  /**  Daily revenue generated by the liquidity pool.  */
  dailyTotalRevenueUSD: Scalars['Arbitrum_BigDecimal']['output'];
  /**  All historical trade volume occurred in this pool, in USD  */
  cumulativeVolumeUSD: Scalars['Arbitrum_BigDecimal']['output'];
  /**  All trade volume occurred in a given day, in USD  */
  dailyVolumeUSD: Scalars['Arbitrum_BigDecimal']['output'];
  /**  All trade volume , in native amount. The ordering should be the same as the pool's `inputTokens` field.  */
  cumulativeVolumeByTokenAmount: Array<Scalars['BigInt']['output']>;
  /**  All trade volume occurred in a given day for a specific input token, in native amount. The ordering should be the same as the pool's `inputTokens` field.  */
  dailyVolumeByTokenAmount: Array<Scalars['BigInt']['output']>;
  /**  All trade volume, in USD. The ordering should be the same as the pool's `inputTokens` field.  */
  cumulativeVolumeByTokenUSD: Array<Scalars['Arbitrum_BigDecimal']['output']>;
  /**  All trade volume occurred in a given day for a specific input token, in USD. The ordering should be the same as the pool's `inputTokens` field.  */
  dailyVolumeByTokenUSD: Array<Scalars['Arbitrum_BigDecimal']['output']>;
  /**  Amount of input tokens in the pool. The ordering should be the same as the pool's `inputTokens` field.  */
  inputTokenBalances: Array<Scalars['BigInt']['output']>;
  /**  Amount of input tokens in USD in the pool. The ordering should be the same as the pool's `inputTokens` field.  */
  inputTokenBalancesUSD: Array<Scalars['Arbitrum_BigDecimal']['output']>;
  /**  Weights of input tokens in the liquidity pool in percentage values. For example, 50/50 for Uniswap pools, 48.2/51.8 for a Curve pool, 10/10/80 for a Balancer pool  */
  inputTokenWeights: Array<Scalars['Arbitrum_BigDecimal']['output']>;
  /**  Total supply of output tokens that are staked (usually in the MasterChef contract). Used to calculate reward APY.  */
  stakedOutputTokenAmount?: Maybe<Scalars['BigInt']['output']>;
  /**  Per-block reward token emission as of the current block normalized to a day, in token's native amount. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
  rewardTokenEmissionsAmount?: Maybe<Array<Scalars['BigInt']['output']>>;
  /**  Per-block reward token emission as of the current block normalized to a day, in USD value. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
  rewardTokenEmissionsUSD?: Maybe<Array<Scalars['Arbitrum_BigDecimal']['output']>>;
  /**  Total number of deposits (add liquidity)  */
  cumulativeDepositCount: Scalars['Int']['output'];
  /**  Total number of deposits (add liquidity) in a day  */
  dailyDepositCount: Scalars['Int']['output'];
  /**  Total number of withdrawals (remove liquidity)  */
  cumulativeWithdrawCount: Scalars['Int']['output'];
  /**  Total number of withdrawals (remove liquidity) in a day  */
  dailyWithdrawCount: Scalars['Int']['output'];
  /**  Total number of trades (swaps)  */
  cumulativeSwapCount: Scalars['Int']['output'];
  /**  Total number of trades (swaps) in a day  */
  dailySwapCount: Scalars['Int']['output'];
  /**  Number of positions in this market  */
  positionCount: Scalars['Int']['output'];
  /**  Number of open positions in this market  */
  openPositionCount: Scalars['Int']['output'];
  /**  Number of closed positions in this market  */
  closedPositionCount: Scalars['Int']['output'];
  /**  Timestamp of when this snapshot was taken/last modified (May be taken after interval has passed)  */
  timestamp: Scalars['BigInt']['output'];
  /**  Block number of when this snapshot was taken/last modified (May be taken after interval has passed)  */
  blockNumber: Scalars['BigInt']['output'];
};

export type Arbitrum_LiquidityPoolDailySnapshot_filter = {
  id?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Arbitrum_Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Arbitrum_Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  day?: InputMaybe<Scalars['Int']['input']>;
  day_not?: InputMaybe<Scalars['Int']['input']>;
  day_gt?: InputMaybe<Scalars['Int']['input']>;
  day_lt?: InputMaybe<Scalars['Int']['input']>;
  day_gte?: InputMaybe<Scalars['Int']['input']>;
  day_lte?: InputMaybe<Scalars['Int']['input']>;
  day_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  day_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  protocol?: InputMaybe<Scalars['String']['input']>;
  protocol_not?: InputMaybe<Scalars['String']['input']>;
  protocol_gt?: InputMaybe<Scalars['String']['input']>;
  protocol_lt?: InputMaybe<Scalars['String']['input']>;
  protocol_gte?: InputMaybe<Scalars['String']['input']>;
  protocol_lte?: InputMaybe<Scalars['String']['input']>;
  protocol_in?: InputMaybe<Array<Scalars['String']['input']>>;
  protocol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  protocol_contains?: InputMaybe<Scalars['String']['input']>;
  protocol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  protocol_not_contains?: InputMaybe<Scalars['String']['input']>;
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  protocol_starts_with?: InputMaybe<Scalars['String']['input']>;
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  protocol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  protocol_ends_with?: InputMaybe<Scalars['String']['input']>;
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  protocol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  protocol_?: InputMaybe<Arbitrum_DexAmmProtocol_filter>;
  pool?: InputMaybe<Scalars['String']['input']>;
  pool_not?: InputMaybe<Scalars['String']['input']>;
  pool_gt?: InputMaybe<Scalars['String']['input']>;
  pool_lt?: InputMaybe<Scalars['String']['input']>;
  pool_gte?: InputMaybe<Scalars['String']['input']>;
  pool_lte?: InputMaybe<Scalars['String']['input']>;
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_contains?: InputMaybe<Scalars['String']['input']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_?: InputMaybe<Arbitrum_LiquidityPool_filter>;
  tick?: InputMaybe<Scalars['BigInt']['input']>;
  tick_not?: InputMaybe<Scalars['BigInt']['input']>;
  tick_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tick_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tick_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tick_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tick_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tick_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalValueLockedUSD?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  totalValueLockedUSD_not?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  totalLiquidity?: InputMaybe<Scalars['BigInt']['input']>;
  totalLiquidity_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalLiquidity_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalLiquidity_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalLiquidity_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalLiquidity_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalLiquidity_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalLiquidity_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalLiquidityUSD?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  totalLiquidityUSD_not?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  totalLiquidityUSD_gt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  totalLiquidityUSD_lt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  totalLiquidityUSD_gte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  totalLiquidityUSD_lte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  totalLiquidityUSD_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  totalLiquidityUSD_not_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  activeLiquidity?: InputMaybe<Scalars['BigInt']['input']>;
  activeLiquidity_not?: InputMaybe<Scalars['BigInt']['input']>;
  activeLiquidity_gt?: InputMaybe<Scalars['BigInt']['input']>;
  activeLiquidity_lt?: InputMaybe<Scalars['BigInt']['input']>;
  activeLiquidity_gte?: InputMaybe<Scalars['BigInt']['input']>;
  activeLiquidity_lte?: InputMaybe<Scalars['BigInt']['input']>;
  activeLiquidity_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  activeLiquidity_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  activeLiquidityUSD?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  activeLiquidityUSD_not?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  activeLiquidityUSD_gt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  activeLiquidityUSD_lt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  activeLiquidityUSD_gte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  activeLiquidityUSD_lte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  activeLiquidityUSD_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  activeLiquidityUSD_not_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  uncollectedProtocolSideTokenAmounts?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  uncollectedProtocolSideTokenAmounts_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  uncollectedProtocolSideTokenAmounts_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  uncollectedProtocolSideTokenAmounts_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  uncollectedProtocolSideTokenAmounts_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  uncollectedProtocolSideTokenAmounts_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  uncollectedProtocolSideValuesUSD?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  uncollectedProtocolSideValuesUSD_not?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  uncollectedProtocolSideValuesUSD_contains?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  uncollectedProtocolSideValuesUSD_contains_nocase?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  uncollectedProtocolSideValuesUSD_not_contains?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  uncollectedProtocolSideValuesUSD_not_contains_nocase?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  uncollectedSupplySideTokenAmounts?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  uncollectedSupplySideTokenAmounts_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  uncollectedSupplySideTokenAmounts_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  uncollectedSupplySideTokenAmounts_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  uncollectedSupplySideTokenAmounts_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  uncollectedSupplySideTokenAmounts_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  uncollectedSupplySideValuesUSD?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  uncollectedSupplySideValuesUSD_not?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  uncollectedSupplySideValuesUSD_contains?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  uncollectedSupplySideValuesUSD_contains_nocase?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  uncollectedSupplySideValuesUSD_not_contains?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  uncollectedSupplySideValuesUSD_not_contains_nocase?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeSupplySideRevenueUSD?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeSupplySideRevenueUSD_not?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeSupplySideRevenueUSD_gt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeSupplySideRevenueUSD_lt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeSupplySideRevenueUSD_gte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeSupplySideRevenueUSD_lte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeSupplySideRevenueUSD_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeSupplySideRevenueUSD_not_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  dailySupplySideRevenueUSD?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  dailySupplySideRevenueUSD_not?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  dailySupplySideRevenueUSD_gt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  dailySupplySideRevenueUSD_lt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  dailySupplySideRevenueUSD_gte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  dailySupplySideRevenueUSD_lte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  dailySupplySideRevenueUSD_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  dailySupplySideRevenueUSD_not_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeProtocolSideRevenueUSD?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeProtocolSideRevenueUSD_not?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeProtocolSideRevenueUSD_gt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeProtocolSideRevenueUSD_lt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeProtocolSideRevenueUSD_gte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeProtocolSideRevenueUSD_lte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeProtocolSideRevenueUSD_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeProtocolSideRevenueUSD_not_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  dailyProtocolSideRevenueUSD?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  dailyProtocolSideRevenueUSD_not?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  dailyProtocolSideRevenueUSD_gt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  dailyProtocolSideRevenueUSD_lt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  dailyProtocolSideRevenueUSD_gte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  dailyProtocolSideRevenueUSD_lte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  dailyProtocolSideRevenueUSD_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  dailyProtocolSideRevenueUSD_not_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeTotalRevenueUSD?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeTotalRevenueUSD_not?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeTotalRevenueUSD_gt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeTotalRevenueUSD_lt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeTotalRevenueUSD_gte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeTotalRevenueUSD_lte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeTotalRevenueUSD_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  dailyTotalRevenueUSD?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  dailyTotalRevenueUSD_not?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  dailyTotalRevenueUSD_gt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  dailyTotalRevenueUSD_lt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  dailyTotalRevenueUSD_gte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  dailyTotalRevenueUSD_lte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  dailyTotalRevenueUSD_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  dailyTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeVolumeUSD?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeVolumeUSD_not?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeVolumeUSD_gt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeVolumeUSD_lt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeVolumeUSD_gte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeVolumeUSD_lte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeVolumeUSD_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeVolumeUSD_not_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  dailyVolumeUSD?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  dailyVolumeUSD_not?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  dailyVolumeUSD_gt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  dailyVolumeUSD_lt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  dailyVolumeUSD_gte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  dailyVolumeUSD_lte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  dailyVolumeUSD_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  dailyVolumeUSD_not_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeVolumeByTokenAmount?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeVolumeByTokenAmount_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeVolumeByTokenAmount_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeVolumeByTokenAmount_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeVolumeByTokenAmount_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeVolumeByTokenAmount_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  dailyVolumeByTokenAmount?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  dailyVolumeByTokenAmount_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  dailyVolumeByTokenAmount_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  dailyVolumeByTokenAmount_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  dailyVolumeByTokenAmount_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  dailyVolumeByTokenAmount_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeVolumeByTokenUSD?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeVolumeByTokenUSD_not?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeVolumeByTokenUSD_contains?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeVolumeByTokenUSD_contains_nocase?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeVolumeByTokenUSD_not_contains?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeVolumeByTokenUSD_not_contains_nocase?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  dailyVolumeByTokenUSD?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  dailyVolumeByTokenUSD_not?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  dailyVolumeByTokenUSD_contains?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  dailyVolumeByTokenUSD_contains_nocase?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  dailyVolumeByTokenUSD_not_contains?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  dailyVolumeByTokenUSD_not_contains_nocase?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  inputTokenBalances?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  inputTokenBalances_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  inputTokenBalances_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  inputTokenBalances_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  inputTokenBalances_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  inputTokenBalances_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  inputTokenBalancesUSD?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  inputTokenBalancesUSD_not?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  inputTokenBalancesUSD_contains?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  inputTokenBalancesUSD_contains_nocase?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  inputTokenBalancesUSD_not_contains?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  inputTokenBalancesUSD_not_contains_nocase?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  inputTokenWeights?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  inputTokenWeights_not?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  inputTokenWeights_contains?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  inputTokenWeights_contains_nocase?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  inputTokenWeights_not_contains?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  inputTokenWeights_not_contains_nocase?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  stakedOutputTokenAmount?: InputMaybe<Scalars['BigInt']['input']>;
  stakedOutputTokenAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  stakedOutputTokenAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  stakedOutputTokenAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  stakedOutputTokenAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  stakedOutputTokenAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  stakedOutputTokenAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  stakedOutputTokenAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  rewardTokenEmissionsAmount?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  rewardTokenEmissionsAmount_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  rewardTokenEmissionsAmount_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  rewardTokenEmissionsAmount_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  rewardTokenEmissionsAmount_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  rewardTokenEmissionsAmount_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  rewardTokenEmissionsUSD?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  rewardTokenEmissionsUSD_not?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  rewardTokenEmissionsUSD_contains?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  rewardTokenEmissionsUSD_contains_nocase?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  rewardTokenEmissionsUSD_not_contains?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  rewardTokenEmissionsUSD_not_contains_nocase?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeDepositCount?: InputMaybe<Scalars['Int']['input']>;
  cumulativeDepositCount_not?: InputMaybe<Scalars['Int']['input']>;
  cumulativeDepositCount_gt?: InputMaybe<Scalars['Int']['input']>;
  cumulativeDepositCount_lt?: InputMaybe<Scalars['Int']['input']>;
  cumulativeDepositCount_gte?: InputMaybe<Scalars['Int']['input']>;
  cumulativeDepositCount_lte?: InputMaybe<Scalars['Int']['input']>;
  cumulativeDepositCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  cumulativeDepositCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  dailyDepositCount?: InputMaybe<Scalars['Int']['input']>;
  dailyDepositCount_not?: InputMaybe<Scalars['Int']['input']>;
  dailyDepositCount_gt?: InputMaybe<Scalars['Int']['input']>;
  dailyDepositCount_lt?: InputMaybe<Scalars['Int']['input']>;
  dailyDepositCount_gte?: InputMaybe<Scalars['Int']['input']>;
  dailyDepositCount_lte?: InputMaybe<Scalars['Int']['input']>;
  dailyDepositCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  dailyDepositCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  cumulativeWithdrawCount?: InputMaybe<Scalars['Int']['input']>;
  cumulativeWithdrawCount_not?: InputMaybe<Scalars['Int']['input']>;
  cumulativeWithdrawCount_gt?: InputMaybe<Scalars['Int']['input']>;
  cumulativeWithdrawCount_lt?: InputMaybe<Scalars['Int']['input']>;
  cumulativeWithdrawCount_gte?: InputMaybe<Scalars['Int']['input']>;
  cumulativeWithdrawCount_lte?: InputMaybe<Scalars['Int']['input']>;
  cumulativeWithdrawCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  cumulativeWithdrawCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  dailyWithdrawCount?: InputMaybe<Scalars['Int']['input']>;
  dailyWithdrawCount_not?: InputMaybe<Scalars['Int']['input']>;
  dailyWithdrawCount_gt?: InputMaybe<Scalars['Int']['input']>;
  dailyWithdrawCount_lt?: InputMaybe<Scalars['Int']['input']>;
  dailyWithdrawCount_gte?: InputMaybe<Scalars['Int']['input']>;
  dailyWithdrawCount_lte?: InputMaybe<Scalars['Int']['input']>;
  dailyWithdrawCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  dailyWithdrawCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  cumulativeSwapCount?: InputMaybe<Scalars['Int']['input']>;
  cumulativeSwapCount_not?: InputMaybe<Scalars['Int']['input']>;
  cumulativeSwapCount_gt?: InputMaybe<Scalars['Int']['input']>;
  cumulativeSwapCount_lt?: InputMaybe<Scalars['Int']['input']>;
  cumulativeSwapCount_gte?: InputMaybe<Scalars['Int']['input']>;
  cumulativeSwapCount_lte?: InputMaybe<Scalars['Int']['input']>;
  cumulativeSwapCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  cumulativeSwapCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  dailySwapCount?: InputMaybe<Scalars['Int']['input']>;
  dailySwapCount_not?: InputMaybe<Scalars['Int']['input']>;
  dailySwapCount_gt?: InputMaybe<Scalars['Int']['input']>;
  dailySwapCount_lt?: InputMaybe<Scalars['Int']['input']>;
  dailySwapCount_gte?: InputMaybe<Scalars['Int']['input']>;
  dailySwapCount_lte?: InputMaybe<Scalars['Int']['input']>;
  dailySwapCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  dailySwapCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  positionCount?: InputMaybe<Scalars['Int']['input']>;
  positionCount_not?: InputMaybe<Scalars['Int']['input']>;
  positionCount_gt?: InputMaybe<Scalars['Int']['input']>;
  positionCount_lt?: InputMaybe<Scalars['Int']['input']>;
  positionCount_gte?: InputMaybe<Scalars['Int']['input']>;
  positionCount_lte?: InputMaybe<Scalars['Int']['input']>;
  positionCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  positionCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  openPositionCount?: InputMaybe<Scalars['Int']['input']>;
  openPositionCount_not?: InputMaybe<Scalars['Int']['input']>;
  openPositionCount_gt?: InputMaybe<Scalars['Int']['input']>;
  openPositionCount_lt?: InputMaybe<Scalars['Int']['input']>;
  openPositionCount_gte?: InputMaybe<Scalars['Int']['input']>;
  openPositionCount_lte?: InputMaybe<Scalars['Int']['input']>;
  openPositionCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  openPositionCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  closedPositionCount?: InputMaybe<Scalars['Int']['input']>;
  closedPositionCount_not?: InputMaybe<Scalars['Int']['input']>;
  closedPositionCount_gt?: InputMaybe<Scalars['Int']['input']>;
  closedPositionCount_lt?: InputMaybe<Scalars['Int']['input']>;
  closedPositionCount_gte?: InputMaybe<Scalars['Int']['input']>;
  closedPositionCount_lte?: InputMaybe<Scalars['Int']['input']>;
  closedPositionCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  closedPositionCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Arbitrum_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arbitrum_LiquidityPoolDailySnapshot_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arbitrum_LiquidityPoolDailySnapshot_filter>>>;
};

export type Arbitrum_LiquidityPoolDailySnapshot_orderBy =
  | 'id'
  | 'day'
  | 'protocol'
  | 'protocol__id'
  | 'protocol__name'
  | 'protocol__slug'
  | 'protocol__schemaVersion'
  | 'protocol__subgraphVersion'
  | 'protocol__methodologyVersion'
  | 'protocol__network'
  | 'protocol__type'
  | 'protocol__totalValueLockedUSD'
  | 'protocol__totalLiquidityUSD'
  | 'protocol__activeLiquidityUSD'
  | 'protocol__uncollectedProtocolSideValueUSD'
  | 'protocol__uncollectedSupplySideValueUSD'
  | 'protocol__protocolControlledValueUSD'
  | 'protocol__cumulativeVolumeUSD'
  | 'protocol__cumulativeSupplySideRevenueUSD'
  | 'protocol__cumulativeProtocolSideRevenueUSD'
  | 'protocol__cumulativeTotalRevenueUSD'
  | 'protocol__cumulativeUniqueUsers'
  | 'protocol__cumulativeUniqueLPs'
  | 'protocol__cumulativeUniqueTraders'
  | 'protocol__totalPoolCount'
  | 'protocol__openPositionCount'
  | 'protocol__cumulativePositionCount'
  | 'protocol__lastSnapshotDayID'
  | 'protocol__lastUpdateTimestamp'
  | 'protocol__lastUpdateBlockNumber'
  | 'protocol___regenesis'
  | 'pool'
  | 'pool__id'
  | 'pool__name'
  | 'pool__symbol'
  | 'pool__liquidityTokenType'
  | 'pool__isSingleSided'
  | 'pool__createdTimestamp'
  | 'pool__createdBlockNumber'
  | 'pool__tick'
  | 'pool__totalValueLockedUSD'
  | 'pool__totalLiquidity'
  | 'pool__totalLiquidityUSD'
  | 'pool__activeLiquidity'
  | 'pool__activeLiquidityUSD'
  | 'pool__cumulativeSupplySideRevenueUSD'
  | 'pool__cumulativeProtocolSideRevenueUSD'
  | 'pool__cumulativeTotalRevenueUSD'
  | 'pool__cumulativeVolumeUSD'
  | 'pool__stakedOutputTokenAmount'
  | 'pool__cumulativeDepositCount'
  | 'pool__cumulativeWithdrawCount'
  | 'pool__cumulativeSwapCount'
  | 'pool__positionCount'
  | 'pool__openPositionCount'
  | 'pool__closedPositionCount'
  | 'pool__lastSnapshotDayID'
  | 'pool__lastSnapshotHourID'
  | 'pool__lastUpdateTimestamp'
  | 'pool__lastUpdateBlockNumber'
  | 'tick'
  | 'totalValueLockedUSD'
  | 'totalLiquidity'
  | 'totalLiquidityUSD'
  | 'activeLiquidity'
  | 'activeLiquidityUSD'
  | 'uncollectedProtocolSideTokenAmounts'
  | 'uncollectedProtocolSideValuesUSD'
  | 'uncollectedSupplySideTokenAmounts'
  | 'uncollectedSupplySideValuesUSD'
  | 'cumulativeSupplySideRevenueUSD'
  | 'dailySupplySideRevenueUSD'
  | 'cumulativeProtocolSideRevenueUSD'
  | 'dailyProtocolSideRevenueUSD'
  | 'cumulativeTotalRevenueUSD'
  | 'dailyTotalRevenueUSD'
  | 'cumulativeVolumeUSD'
  | 'dailyVolumeUSD'
  | 'cumulativeVolumeByTokenAmount'
  | 'dailyVolumeByTokenAmount'
  | 'cumulativeVolumeByTokenUSD'
  | 'dailyVolumeByTokenUSD'
  | 'inputTokenBalances'
  | 'inputTokenBalancesUSD'
  | 'inputTokenWeights'
  | 'stakedOutputTokenAmount'
  | 'rewardTokenEmissionsAmount'
  | 'rewardTokenEmissionsUSD'
  | 'cumulativeDepositCount'
  | 'dailyDepositCount'
  | 'cumulativeWithdrawCount'
  | 'dailyWithdrawCount'
  | 'cumulativeSwapCount'
  | 'dailySwapCount'
  | 'positionCount'
  | 'openPositionCount'
  | 'closedPositionCount'
  | 'timestamp'
  | 'blockNumber';

export type Arbitrum_LiquidityPoolFee = {
  /**  { Fee type }-{ Pool address }  */
  id: Scalars['Arbitrum_Bytes']['output'];
  /**  Fee as a percentage of the trade (swap) amount. Does not always apply  */
  feePercentage?: Maybe<Scalars['Arbitrum_BigDecimal']['output']>;
  /**  Type of fee this pool uses  */
  feeType: Arbitrum_LiquidityPoolFeeType;
};

export type Arbitrum_LiquidityPoolFeeType =
  /**  Total fixed fee paid by the user per trade, as a percentage of the traded amount. e.g. 0.3% for Uniswap v2, 0.3% for Sushiswap, 0.04% for Curve v1.  */
  | 'FIXED_TRADING_FEE'
  /**  Some protocols use tiered fees instead of fixed fee (e.g. DYDX, DODO). Set `feePercentage` as 0 but handle the tiered fees in the mapping code.  */
  | 'TIERED_TRADING_FEE'
  /**  Some protocols use dynamic fees instead of fixed fee (e.g. Balancer v2). Set `feePercentage` as 0 but handle the dynamic fees in the mapping code.  */
  | 'DYNAMIC_TRADING_FEE'
  /**  Fixed fee that's paid to the LP, as a percentage of the traded amount. e.g. 0.25% for Sushiswap, 0.02% for Curve v1.  */
  | 'FIXED_LP_FEE'
  /**  Some protocols use dynamic LP fees (e.g., Bancor v2). Set `feePercentage` as 0 but handle the dynamic fees in the mapping code.  */
  | 'DYNAMIC_LP_FEE'
  /**  Fixed fee that's paid to the protocol, as a percentage of the traded amount. e.g. 0.05% for Sushiswap, 0.02% for Curve v1.  */
  | 'FIXED_PROTOCOL_FEE'
  /**  Some protocols use dynamic protocol fees (e.g., Bancor v2). Set `feePercentage` as 0 but handle the dynamic fees in the mapping code.  */
  | 'DYNAMIC_PROTOCOL_FEE'
  /**  One-time fee charged by the protocol during deposit, in percentages of the deposit token  */
  | 'DEPOSIT_FEE'
  /**  One-time fee charged by the protocol (e.g. Bancor v3) during withdrawal, in percentages of the withdrawal token  */
  | 'WITHDRAWAL_FEE';

export type Arbitrum_LiquidityPoolFee_filter = {
  id?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Arbitrum_Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Arbitrum_Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  feePercentage?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  feePercentage_not?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  feePercentage_gt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  feePercentage_lt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  feePercentage_gte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  feePercentage_lte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  feePercentage_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  feePercentage_not_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  feeType?: InputMaybe<Arbitrum_LiquidityPoolFeeType>;
  feeType_not?: InputMaybe<Arbitrum_LiquidityPoolFeeType>;
  feeType_in?: InputMaybe<Array<Arbitrum_LiquidityPoolFeeType>>;
  feeType_not_in?: InputMaybe<Array<Arbitrum_LiquidityPoolFeeType>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Arbitrum_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arbitrum_LiquidityPoolFee_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arbitrum_LiquidityPoolFee_filter>>>;
};

export type Arbitrum_LiquidityPoolFee_orderBy =
  | 'id'
  | 'feePercentage'
  | 'feeType';

export type Arbitrum_LiquidityPoolHourlySnapshot = {
  /**  { Smart contract address of the pool }-{ # of hours since Unix epoch time }  */
  id: Scalars['Arbitrum_Bytes']['output'];
  /**  Number of hours since Unix epoch time  */
  hour: Scalars['Int']['output'];
  /**  The protocol this snapshot belongs to  */
  protocol: Arbitrum_DexAmmProtocol;
  /**  The pool this snapshot belongs to  */
  pool: Arbitrum_LiquidityPool;
  /**  Current tick representing the price of token0/token1  */
  tick?: Maybe<Scalars['BigInt']['output']>;
  /**  Current TVL (Total Value Locked) of this pool  */
  totalValueLockedUSD: Scalars['Arbitrum_BigDecimal']['output'];
  /**  The sum of all active and non-active liquidity for this pool.  */
  totalLiquidity: Scalars['BigInt']['output'];
  /**  The sum of all active and non-active liquidity in USD for this pool.  */
  totalLiquidityUSD: Scalars['Arbitrum_BigDecimal']['output'];
  /**  All liquidity `k` that is active. Will be equal to totalLiquidity except for in concentrated liquidity - where activeLiquidity is all liquidity positions that contain the pools current tick.  */
  activeLiquidity: Scalars['BigInt']['output'];
  /**  All liquidity in USD that is active. Will be equal to totalLiquidity except for in concentrated liquidity - where activeLiquidity is all liquidity positions that contain the pools current tick.  */
  activeLiquidityUSD: Scalars['Arbitrum_BigDecimal']['output'];
  /**  All protocol-side value locked in token amounts that remains uncollected and unused in the pool.  */
  uncollectedProtocolSideTokenAmounts: Array<Scalars['BigInt']['output']>;
  /**  All protocol-side value locking in USD that remains uncollected and unused in the pool.  */
  uncollectedProtocolSideValuesUSD: Array<Scalars['Arbitrum_BigDecimal']['output']>;
  /**  All supply-side value locked in token amounts that remains uncollected and unused in the pool.  */
  uncollectedSupplySideTokenAmounts: Array<Scalars['BigInt']['output']>;
  /**  All supply-side value locked in USD that remains uncollected and unused in the pool.  */
  uncollectedSupplySideValuesUSD: Array<Scalars['Arbitrum_BigDecimal']['output']>;
  /**  All revenue generated by the liquidity pool, accrued to the supply side.  */
  cumulativeSupplySideRevenueUSD: Scalars['Arbitrum_BigDecimal']['output'];
  /**  Hourly revenue generated by the liquidity pool, accrued to the supply side.  */
  hourlySupplySideRevenueUSD: Scalars['Arbitrum_BigDecimal']['output'];
  /**  All revenue generated by the liquidity pool, accrued to the protocol.  */
  cumulativeProtocolSideRevenueUSD: Scalars['Arbitrum_BigDecimal']['output'];
  /**  Hourly revenue generated by the liquidity pool, accrued to the protocol.  */
  hourlyProtocolSideRevenueUSD: Scalars['Arbitrum_BigDecimal']['output'];
  /**  All revenue generated by the liquidity pool.  */
  cumulativeTotalRevenueUSD: Scalars['Arbitrum_BigDecimal']['output'];
  /**  Hourly revenue generated by the liquidity pool.  */
  hourlyTotalRevenueUSD: Scalars['Arbitrum_BigDecimal']['output'];
  /**  All historical trade volume occurred in this pool, in USD  */
  cumulativeVolumeUSD: Scalars['Arbitrum_BigDecimal']['output'];
  /**  All trade volume occurred in a given hour, in USD  */
  hourlyVolumeUSD: Scalars['Arbitrum_BigDecimal']['output'];
  /**  All trade volume, in native amount. The ordering should be the same as the pool's `inputTokens` field.  */
  cumulativeVolumeByTokenAmount: Array<Scalars['BigInt']['output']>;
  /**  All trade volume occurred in a given hour for a specific input token, in native amount. The ordering should be the same as the pool's `inputTokens` field.  */
  hourlyVolumeByTokenAmount: Array<Scalars['BigInt']['output']>;
  /**  All trade volume, in USD. The ordering should be the same as the pool's `inputTokens` field.  */
  cumulativeVolumeByTokenUSD: Array<Scalars['Arbitrum_BigDecimal']['output']>;
  /**  All trade volume occurred in a given hour for a specific input token, in USD. The ordering should be the same as the pool's `inputTokens` field.  */
  hourlyVolumeByTokenUSD: Array<Scalars['Arbitrum_BigDecimal']['output']>;
  /**  Amount of input tokens in the pool. The ordering should be the same as the pool's `inputTokens` field.  */
  inputTokenBalances: Array<Scalars['BigInt']['output']>;
  /**  Amount of input tokens in USD in the pool. The ordering should be the same as the pool's `inputTokens` field.  */
  inputTokenBalancesUSD: Array<Scalars['Arbitrum_BigDecimal']['output']>;
  /**  Weights of input tokens in the liquidity pool in percentage values. For example, 50/50 for Uniswap pools, 48.2/51.8 for a Curve pool, 10/10/80 for a Balancer pool  */
  inputTokenWeights: Array<Scalars['Arbitrum_BigDecimal']['output']>;
  /**  Total supply of output tokens that are staked (usually in the MasterChef contract). Used to calculate reward APY.  */
  stakedOutputTokenAmount?: Maybe<Scalars['BigInt']['output']>;
  /**  Per-block reward token emission as of the current block normalized to a day (not hour), in token's native amount. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
  rewardTokenEmissionsAmount?: Maybe<Array<Scalars['BigInt']['output']>>;
  /**  Per-block reward token emission as of the current block normalized to a day (not hour), in USD value. This should be ideally calculated as the theoretical rate instead of the realized amount.  */
  rewardTokenEmissionsUSD?: Maybe<Array<Scalars['Arbitrum_BigDecimal']['output']>>;
  /**  Total number of deposits (add liquidity)  */
  cumulativeDepositCount: Scalars['Int']['output'];
  /**  Total number of deposits (add liquidity) in an hour  */
  hourlyDepositCount: Scalars['Int']['output'];
  /**  Total number of withdrawals (remove liquidity)  */
  cumulativeWithdrawCount: Scalars['Int']['output'];
  /**  Total number of withdrawals (remove liquidity) in an hour  */
  hourlyWithdrawCount: Scalars['Int']['output'];
  /**  Total number of trades (swaps)  */
  cumulativeSwapCount: Scalars['Int']['output'];
  /**  Total number of trades (swaps) in an hour  */
  hourlySwapCount: Scalars['Int']['output'];
  /**  Number of positions in this market  */
  positionCount: Scalars['Int']['output'];
  /**  Number of open positions in this market  */
  openPositionCount: Scalars['Int']['output'];
  /**  Number of closed positions in this market  */
  closedPositionCount: Scalars['Int']['output'];
  /**  Timestamp of when this snapshot was taken/last modified (May be taken after interval has passed)  */
  timestamp: Scalars['BigInt']['output'];
  /**  Block number of when this snapshot was taken/last modified (May be taken after interval has passed)  */
  blockNumber: Scalars['BigInt']['output'];
};

export type Arbitrum_LiquidityPoolHourlySnapshot_filter = {
  id?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Arbitrum_Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Arbitrum_Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  hour?: InputMaybe<Scalars['Int']['input']>;
  hour_not?: InputMaybe<Scalars['Int']['input']>;
  hour_gt?: InputMaybe<Scalars['Int']['input']>;
  hour_lt?: InputMaybe<Scalars['Int']['input']>;
  hour_gte?: InputMaybe<Scalars['Int']['input']>;
  hour_lte?: InputMaybe<Scalars['Int']['input']>;
  hour_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  hour_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  protocol?: InputMaybe<Scalars['String']['input']>;
  protocol_not?: InputMaybe<Scalars['String']['input']>;
  protocol_gt?: InputMaybe<Scalars['String']['input']>;
  protocol_lt?: InputMaybe<Scalars['String']['input']>;
  protocol_gte?: InputMaybe<Scalars['String']['input']>;
  protocol_lte?: InputMaybe<Scalars['String']['input']>;
  protocol_in?: InputMaybe<Array<Scalars['String']['input']>>;
  protocol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  protocol_contains?: InputMaybe<Scalars['String']['input']>;
  protocol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  protocol_not_contains?: InputMaybe<Scalars['String']['input']>;
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  protocol_starts_with?: InputMaybe<Scalars['String']['input']>;
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  protocol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  protocol_ends_with?: InputMaybe<Scalars['String']['input']>;
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  protocol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  protocol_?: InputMaybe<Arbitrum_DexAmmProtocol_filter>;
  pool?: InputMaybe<Scalars['String']['input']>;
  pool_not?: InputMaybe<Scalars['String']['input']>;
  pool_gt?: InputMaybe<Scalars['String']['input']>;
  pool_lt?: InputMaybe<Scalars['String']['input']>;
  pool_gte?: InputMaybe<Scalars['String']['input']>;
  pool_lte?: InputMaybe<Scalars['String']['input']>;
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_contains?: InputMaybe<Scalars['String']['input']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_?: InputMaybe<Arbitrum_LiquidityPool_filter>;
  tick?: InputMaybe<Scalars['BigInt']['input']>;
  tick_not?: InputMaybe<Scalars['BigInt']['input']>;
  tick_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tick_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tick_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tick_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tick_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tick_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalValueLockedUSD?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  totalValueLockedUSD_not?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  totalLiquidity?: InputMaybe<Scalars['BigInt']['input']>;
  totalLiquidity_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalLiquidity_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalLiquidity_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalLiquidity_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalLiquidity_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalLiquidity_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalLiquidity_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalLiquidityUSD?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  totalLiquidityUSD_not?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  totalLiquidityUSD_gt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  totalLiquidityUSD_lt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  totalLiquidityUSD_gte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  totalLiquidityUSD_lte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  totalLiquidityUSD_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  totalLiquidityUSD_not_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  activeLiquidity?: InputMaybe<Scalars['BigInt']['input']>;
  activeLiquidity_not?: InputMaybe<Scalars['BigInt']['input']>;
  activeLiquidity_gt?: InputMaybe<Scalars['BigInt']['input']>;
  activeLiquidity_lt?: InputMaybe<Scalars['BigInt']['input']>;
  activeLiquidity_gte?: InputMaybe<Scalars['BigInt']['input']>;
  activeLiquidity_lte?: InputMaybe<Scalars['BigInt']['input']>;
  activeLiquidity_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  activeLiquidity_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  activeLiquidityUSD?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  activeLiquidityUSD_not?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  activeLiquidityUSD_gt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  activeLiquidityUSD_lt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  activeLiquidityUSD_gte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  activeLiquidityUSD_lte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  activeLiquidityUSD_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  activeLiquidityUSD_not_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  uncollectedProtocolSideTokenAmounts?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  uncollectedProtocolSideTokenAmounts_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  uncollectedProtocolSideTokenAmounts_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  uncollectedProtocolSideTokenAmounts_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  uncollectedProtocolSideTokenAmounts_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  uncollectedProtocolSideTokenAmounts_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  uncollectedProtocolSideValuesUSD?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  uncollectedProtocolSideValuesUSD_not?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  uncollectedProtocolSideValuesUSD_contains?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  uncollectedProtocolSideValuesUSD_contains_nocase?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  uncollectedProtocolSideValuesUSD_not_contains?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  uncollectedProtocolSideValuesUSD_not_contains_nocase?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  uncollectedSupplySideTokenAmounts?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  uncollectedSupplySideTokenAmounts_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  uncollectedSupplySideTokenAmounts_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  uncollectedSupplySideTokenAmounts_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  uncollectedSupplySideTokenAmounts_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  uncollectedSupplySideTokenAmounts_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  uncollectedSupplySideValuesUSD?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  uncollectedSupplySideValuesUSD_not?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  uncollectedSupplySideValuesUSD_contains?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  uncollectedSupplySideValuesUSD_contains_nocase?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  uncollectedSupplySideValuesUSD_not_contains?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  uncollectedSupplySideValuesUSD_not_contains_nocase?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeSupplySideRevenueUSD?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeSupplySideRevenueUSD_not?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeSupplySideRevenueUSD_gt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeSupplySideRevenueUSD_lt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeSupplySideRevenueUSD_gte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeSupplySideRevenueUSD_lte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeSupplySideRevenueUSD_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeSupplySideRevenueUSD_not_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  hourlySupplySideRevenueUSD?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  hourlySupplySideRevenueUSD_not?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  hourlySupplySideRevenueUSD_gt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  hourlySupplySideRevenueUSD_lt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  hourlySupplySideRevenueUSD_gte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  hourlySupplySideRevenueUSD_lte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  hourlySupplySideRevenueUSD_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  hourlySupplySideRevenueUSD_not_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeProtocolSideRevenueUSD?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeProtocolSideRevenueUSD_not?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeProtocolSideRevenueUSD_gt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeProtocolSideRevenueUSD_lt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeProtocolSideRevenueUSD_gte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeProtocolSideRevenueUSD_lte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeProtocolSideRevenueUSD_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeProtocolSideRevenueUSD_not_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  hourlyProtocolSideRevenueUSD?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  hourlyProtocolSideRevenueUSD_not?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  hourlyProtocolSideRevenueUSD_gt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  hourlyProtocolSideRevenueUSD_lt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  hourlyProtocolSideRevenueUSD_gte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  hourlyProtocolSideRevenueUSD_lte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  hourlyProtocolSideRevenueUSD_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  hourlyProtocolSideRevenueUSD_not_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeTotalRevenueUSD?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeTotalRevenueUSD_not?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeTotalRevenueUSD_gt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeTotalRevenueUSD_lt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeTotalRevenueUSD_gte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeTotalRevenueUSD_lte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeTotalRevenueUSD_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  hourlyTotalRevenueUSD?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  hourlyTotalRevenueUSD_not?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  hourlyTotalRevenueUSD_gt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  hourlyTotalRevenueUSD_lt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  hourlyTotalRevenueUSD_gte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  hourlyTotalRevenueUSD_lte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  hourlyTotalRevenueUSD_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  hourlyTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeVolumeUSD?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeVolumeUSD_not?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeVolumeUSD_gt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeVolumeUSD_lt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeVolumeUSD_gte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeVolumeUSD_lte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeVolumeUSD_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeVolumeUSD_not_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  hourlyVolumeUSD?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  hourlyVolumeUSD_not?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  hourlyVolumeUSD_gt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  hourlyVolumeUSD_lt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  hourlyVolumeUSD_gte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  hourlyVolumeUSD_lte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  hourlyVolumeUSD_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  hourlyVolumeUSD_not_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeVolumeByTokenAmount?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeVolumeByTokenAmount_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeVolumeByTokenAmount_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeVolumeByTokenAmount_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeVolumeByTokenAmount_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeVolumeByTokenAmount_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  hourlyVolumeByTokenAmount?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  hourlyVolumeByTokenAmount_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  hourlyVolumeByTokenAmount_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  hourlyVolumeByTokenAmount_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  hourlyVolumeByTokenAmount_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  hourlyVolumeByTokenAmount_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeVolumeByTokenUSD?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeVolumeByTokenUSD_not?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeVolumeByTokenUSD_contains?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeVolumeByTokenUSD_contains_nocase?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeVolumeByTokenUSD_not_contains?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeVolumeByTokenUSD_not_contains_nocase?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  hourlyVolumeByTokenUSD?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  hourlyVolumeByTokenUSD_not?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  hourlyVolumeByTokenUSD_contains?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  hourlyVolumeByTokenUSD_contains_nocase?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  hourlyVolumeByTokenUSD_not_contains?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  hourlyVolumeByTokenUSD_not_contains_nocase?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  inputTokenBalances?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  inputTokenBalances_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  inputTokenBalances_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  inputTokenBalances_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  inputTokenBalances_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  inputTokenBalances_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  inputTokenBalancesUSD?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  inputTokenBalancesUSD_not?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  inputTokenBalancesUSD_contains?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  inputTokenBalancesUSD_contains_nocase?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  inputTokenBalancesUSD_not_contains?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  inputTokenBalancesUSD_not_contains_nocase?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  inputTokenWeights?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  inputTokenWeights_not?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  inputTokenWeights_contains?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  inputTokenWeights_contains_nocase?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  inputTokenWeights_not_contains?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  inputTokenWeights_not_contains_nocase?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  stakedOutputTokenAmount?: InputMaybe<Scalars['BigInt']['input']>;
  stakedOutputTokenAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  stakedOutputTokenAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  stakedOutputTokenAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  stakedOutputTokenAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  stakedOutputTokenAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  stakedOutputTokenAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  stakedOutputTokenAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  rewardTokenEmissionsAmount?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  rewardTokenEmissionsAmount_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  rewardTokenEmissionsAmount_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  rewardTokenEmissionsAmount_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  rewardTokenEmissionsAmount_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  rewardTokenEmissionsAmount_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  rewardTokenEmissionsUSD?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  rewardTokenEmissionsUSD_not?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  rewardTokenEmissionsUSD_contains?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  rewardTokenEmissionsUSD_contains_nocase?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  rewardTokenEmissionsUSD_not_contains?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  rewardTokenEmissionsUSD_not_contains_nocase?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeDepositCount?: InputMaybe<Scalars['Int']['input']>;
  cumulativeDepositCount_not?: InputMaybe<Scalars['Int']['input']>;
  cumulativeDepositCount_gt?: InputMaybe<Scalars['Int']['input']>;
  cumulativeDepositCount_lt?: InputMaybe<Scalars['Int']['input']>;
  cumulativeDepositCount_gte?: InputMaybe<Scalars['Int']['input']>;
  cumulativeDepositCount_lte?: InputMaybe<Scalars['Int']['input']>;
  cumulativeDepositCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  cumulativeDepositCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  hourlyDepositCount?: InputMaybe<Scalars['Int']['input']>;
  hourlyDepositCount_not?: InputMaybe<Scalars['Int']['input']>;
  hourlyDepositCount_gt?: InputMaybe<Scalars['Int']['input']>;
  hourlyDepositCount_lt?: InputMaybe<Scalars['Int']['input']>;
  hourlyDepositCount_gte?: InputMaybe<Scalars['Int']['input']>;
  hourlyDepositCount_lte?: InputMaybe<Scalars['Int']['input']>;
  hourlyDepositCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  hourlyDepositCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  cumulativeWithdrawCount?: InputMaybe<Scalars['Int']['input']>;
  cumulativeWithdrawCount_not?: InputMaybe<Scalars['Int']['input']>;
  cumulativeWithdrawCount_gt?: InputMaybe<Scalars['Int']['input']>;
  cumulativeWithdrawCount_lt?: InputMaybe<Scalars['Int']['input']>;
  cumulativeWithdrawCount_gte?: InputMaybe<Scalars['Int']['input']>;
  cumulativeWithdrawCount_lte?: InputMaybe<Scalars['Int']['input']>;
  cumulativeWithdrawCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  cumulativeWithdrawCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  hourlyWithdrawCount?: InputMaybe<Scalars['Int']['input']>;
  hourlyWithdrawCount_not?: InputMaybe<Scalars['Int']['input']>;
  hourlyWithdrawCount_gt?: InputMaybe<Scalars['Int']['input']>;
  hourlyWithdrawCount_lt?: InputMaybe<Scalars['Int']['input']>;
  hourlyWithdrawCount_gte?: InputMaybe<Scalars['Int']['input']>;
  hourlyWithdrawCount_lte?: InputMaybe<Scalars['Int']['input']>;
  hourlyWithdrawCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  hourlyWithdrawCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  cumulativeSwapCount?: InputMaybe<Scalars['Int']['input']>;
  cumulativeSwapCount_not?: InputMaybe<Scalars['Int']['input']>;
  cumulativeSwapCount_gt?: InputMaybe<Scalars['Int']['input']>;
  cumulativeSwapCount_lt?: InputMaybe<Scalars['Int']['input']>;
  cumulativeSwapCount_gte?: InputMaybe<Scalars['Int']['input']>;
  cumulativeSwapCount_lte?: InputMaybe<Scalars['Int']['input']>;
  cumulativeSwapCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  cumulativeSwapCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  hourlySwapCount?: InputMaybe<Scalars['Int']['input']>;
  hourlySwapCount_not?: InputMaybe<Scalars['Int']['input']>;
  hourlySwapCount_gt?: InputMaybe<Scalars['Int']['input']>;
  hourlySwapCount_lt?: InputMaybe<Scalars['Int']['input']>;
  hourlySwapCount_gte?: InputMaybe<Scalars['Int']['input']>;
  hourlySwapCount_lte?: InputMaybe<Scalars['Int']['input']>;
  hourlySwapCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  hourlySwapCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  positionCount?: InputMaybe<Scalars['Int']['input']>;
  positionCount_not?: InputMaybe<Scalars['Int']['input']>;
  positionCount_gt?: InputMaybe<Scalars['Int']['input']>;
  positionCount_lt?: InputMaybe<Scalars['Int']['input']>;
  positionCount_gte?: InputMaybe<Scalars['Int']['input']>;
  positionCount_lte?: InputMaybe<Scalars['Int']['input']>;
  positionCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  positionCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  openPositionCount?: InputMaybe<Scalars['Int']['input']>;
  openPositionCount_not?: InputMaybe<Scalars['Int']['input']>;
  openPositionCount_gt?: InputMaybe<Scalars['Int']['input']>;
  openPositionCount_lt?: InputMaybe<Scalars['Int']['input']>;
  openPositionCount_gte?: InputMaybe<Scalars['Int']['input']>;
  openPositionCount_lte?: InputMaybe<Scalars['Int']['input']>;
  openPositionCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  openPositionCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  closedPositionCount?: InputMaybe<Scalars['Int']['input']>;
  closedPositionCount_not?: InputMaybe<Scalars['Int']['input']>;
  closedPositionCount_gt?: InputMaybe<Scalars['Int']['input']>;
  closedPositionCount_lt?: InputMaybe<Scalars['Int']['input']>;
  closedPositionCount_gte?: InputMaybe<Scalars['Int']['input']>;
  closedPositionCount_lte?: InputMaybe<Scalars['Int']['input']>;
  closedPositionCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  closedPositionCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Arbitrum_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arbitrum_LiquidityPoolHourlySnapshot_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arbitrum_LiquidityPoolHourlySnapshot_filter>>>;
};

export type Arbitrum_LiquidityPoolHourlySnapshot_orderBy =
  | 'id'
  | 'hour'
  | 'protocol'
  | 'protocol__id'
  | 'protocol__name'
  | 'protocol__slug'
  | 'protocol__schemaVersion'
  | 'protocol__subgraphVersion'
  | 'protocol__methodologyVersion'
  | 'protocol__network'
  | 'protocol__type'
  | 'protocol__totalValueLockedUSD'
  | 'protocol__totalLiquidityUSD'
  | 'protocol__activeLiquidityUSD'
  | 'protocol__uncollectedProtocolSideValueUSD'
  | 'protocol__uncollectedSupplySideValueUSD'
  | 'protocol__protocolControlledValueUSD'
  | 'protocol__cumulativeVolumeUSD'
  | 'protocol__cumulativeSupplySideRevenueUSD'
  | 'protocol__cumulativeProtocolSideRevenueUSD'
  | 'protocol__cumulativeTotalRevenueUSD'
  | 'protocol__cumulativeUniqueUsers'
  | 'protocol__cumulativeUniqueLPs'
  | 'protocol__cumulativeUniqueTraders'
  | 'protocol__totalPoolCount'
  | 'protocol__openPositionCount'
  | 'protocol__cumulativePositionCount'
  | 'protocol__lastSnapshotDayID'
  | 'protocol__lastUpdateTimestamp'
  | 'protocol__lastUpdateBlockNumber'
  | 'protocol___regenesis'
  | 'pool'
  | 'pool__id'
  | 'pool__name'
  | 'pool__symbol'
  | 'pool__liquidityTokenType'
  | 'pool__isSingleSided'
  | 'pool__createdTimestamp'
  | 'pool__createdBlockNumber'
  | 'pool__tick'
  | 'pool__totalValueLockedUSD'
  | 'pool__totalLiquidity'
  | 'pool__totalLiquidityUSD'
  | 'pool__activeLiquidity'
  | 'pool__activeLiquidityUSD'
  | 'pool__cumulativeSupplySideRevenueUSD'
  | 'pool__cumulativeProtocolSideRevenueUSD'
  | 'pool__cumulativeTotalRevenueUSD'
  | 'pool__cumulativeVolumeUSD'
  | 'pool__stakedOutputTokenAmount'
  | 'pool__cumulativeDepositCount'
  | 'pool__cumulativeWithdrawCount'
  | 'pool__cumulativeSwapCount'
  | 'pool__positionCount'
  | 'pool__openPositionCount'
  | 'pool__closedPositionCount'
  | 'pool__lastSnapshotDayID'
  | 'pool__lastSnapshotHourID'
  | 'pool__lastUpdateTimestamp'
  | 'pool__lastUpdateBlockNumber'
  | 'tick'
  | 'totalValueLockedUSD'
  | 'totalLiquidity'
  | 'totalLiquidityUSD'
  | 'activeLiquidity'
  | 'activeLiquidityUSD'
  | 'uncollectedProtocolSideTokenAmounts'
  | 'uncollectedProtocolSideValuesUSD'
  | 'uncollectedSupplySideTokenAmounts'
  | 'uncollectedSupplySideValuesUSD'
  | 'cumulativeSupplySideRevenueUSD'
  | 'hourlySupplySideRevenueUSD'
  | 'cumulativeProtocolSideRevenueUSD'
  | 'hourlyProtocolSideRevenueUSD'
  | 'cumulativeTotalRevenueUSD'
  | 'hourlyTotalRevenueUSD'
  | 'cumulativeVolumeUSD'
  | 'hourlyVolumeUSD'
  | 'cumulativeVolumeByTokenAmount'
  | 'hourlyVolumeByTokenAmount'
  | 'cumulativeVolumeByTokenUSD'
  | 'hourlyVolumeByTokenUSD'
  | 'inputTokenBalances'
  | 'inputTokenBalancesUSD'
  | 'inputTokenWeights'
  | 'stakedOutputTokenAmount'
  | 'rewardTokenEmissionsAmount'
  | 'rewardTokenEmissionsUSD'
  | 'cumulativeDepositCount'
  | 'hourlyDepositCount'
  | 'cumulativeWithdrawCount'
  | 'hourlyWithdrawCount'
  | 'cumulativeSwapCount'
  | 'hourlySwapCount'
  | 'positionCount'
  | 'openPositionCount'
  | 'closedPositionCount'
  | 'timestamp'
  | 'blockNumber';

export type Arbitrum_LiquidityPool_filter = {
  id?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Arbitrum_Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Arbitrum_Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  protocol?: InputMaybe<Scalars['String']['input']>;
  protocol_not?: InputMaybe<Scalars['String']['input']>;
  protocol_gt?: InputMaybe<Scalars['String']['input']>;
  protocol_lt?: InputMaybe<Scalars['String']['input']>;
  protocol_gte?: InputMaybe<Scalars['String']['input']>;
  protocol_lte?: InputMaybe<Scalars['String']['input']>;
  protocol_in?: InputMaybe<Array<Scalars['String']['input']>>;
  protocol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  protocol_contains?: InputMaybe<Scalars['String']['input']>;
  protocol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  protocol_not_contains?: InputMaybe<Scalars['String']['input']>;
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  protocol_starts_with?: InputMaybe<Scalars['String']['input']>;
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  protocol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  protocol_ends_with?: InputMaybe<Scalars['String']['input']>;
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  protocol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  protocol_?: InputMaybe<Arbitrum_DexAmmProtocol_filter>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  symbol_not?: InputMaybe<Scalars['String']['input']>;
  symbol_gt?: InputMaybe<Scalars['String']['input']>;
  symbol_lt?: InputMaybe<Scalars['String']['input']>;
  symbol_gte?: InputMaybe<Scalars['String']['input']>;
  symbol_lte?: InputMaybe<Scalars['String']['input']>;
  symbol_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  liquidityToken?: InputMaybe<Scalars['String']['input']>;
  liquidityToken_not?: InputMaybe<Scalars['String']['input']>;
  liquidityToken_gt?: InputMaybe<Scalars['String']['input']>;
  liquidityToken_lt?: InputMaybe<Scalars['String']['input']>;
  liquidityToken_gte?: InputMaybe<Scalars['String']['input']>;
  liquidityToken_lte?: InputMaybe<Scalars['String']['input']>;
  liquidityToken_in?: InputMaybe<Array<Scalars['String']['input']>>;
  liquidityToken_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  liquidityToken_contains?: InputMaybe<Scalars['String']['input']>;
  liquidityToken_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  liquidityToken_not_contains?: InputMaybe<Scalars['String']['input']>;
  liquidityToken_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  liquidityToken_starts_with?: InputMaybe<Scalars['String']['input']>;
  liquidityToken_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  liquidityToken_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  liquidityToken_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  liquidityToken_ends_with?: InputMaybe<Scalars['String']['input']>;
  liquidityToken_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  liquidityToken_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  liquidityToken_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  liquidityToken_?: InputMaybe<Arbitrum_Token_filter>;
  liquidityTokenType?: InputMaybe<Arbitrum_TokenType>;
  liquidityTokenType_not?: InputMaybe<Arbitrum_TokenType>;
  liquidityTokenType_in?: InputMaybe<Array<Arbitrum_TokenType>>;
  liquidityTokenType_not_in?: InputMaybe<Array<Arbitrum_TokenType>>;
  inputTokens?: InputMaybe<Array<Scalars['String']['input']>>;
  inputTokens_not?: InputMaybe<Array<Scalars['String']['input']>>;
  inputTokens_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  inputTokens_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  inputTokens_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  inputTokens_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  inputTokens_?: InputMaybe<Arbitrum_Token_filter>;
  rewardTokens?: InputMaybe<Array<Scalars['String']['input']>>;
  rewardTokens_not?: InputMaybe<Array<Scalars['String']['input']>>;
  rewardTokens_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  rewardTokens_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  rewardTokens_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  rewardTokens_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  rewardTokens_?: InputMaybe<Arbitrum_RewardToken_filter>;
  fees?: InputMaybe<Array<Scalars['String']['input']>>;
  fees_not?: InputMaybe<Array<Scalars['String']['input']>>;
  fees_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  fees_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  fees_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  fees_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  fees_?: InputMaybe<Arbitrum_LiquidityPoolFee_filter>;
  isSingleSided?: InputMaybe<Scalars['Boolean']['input']>;
  isSingleSided_not?: InputMaybe<Scalars['Boolean']['input']>;
  isSingleSided_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isSingleSided_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  createdTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  createdTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  createdBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tick?: InputMaybe<Scalars['BigInt']['input']>;
  tick_not?: InputMaybe<Scalars['BigInt']['input']>;
  tick_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tick_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tick_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tick_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tick_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tick_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalValueLockedUSD?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  totalValueLockedUSD_not?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  totalLiquidity?: InputMaybe<Scalars['BigInt']['input']>;
  totalLiquidity_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalLiquidity_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalLiquidity_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalLiquidity_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalLiquidity_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalLiquidity_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalLiquidity_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalLiquidityUSD?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  totalLiquidityUSD_not?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  totalLiquidityUSD_gt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  totalLiquidityUSD_lt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  totalLiquidityUSD_gte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  totalLiquidityUSD_lte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  totalLiquidityUSD_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  totalLiquidityUSD_not_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  activeLiquidity?: InputMaybe<Scalars['BigInt']['input']>;
  activeLiquidity_not?: InputMaybe<Scalars['BigInt']['input']>;
  activeLiquidity_gt?: InputMaybe<Scalars['BigInt']['input']>;
  activeLiquidity_lt?: InputMaybe<Scalars['BigInt']['input']>;
  activeLiquidity_gte?: InputMaybe<Scalars['BigInt']['input']>;
  activeLiquidity_lte?: InputMaybe<Scalars['BigInt']['input']>;
  activeLiquidity_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  activeLiquidity_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  activeLiquidityUSD?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  activeLiquidityUSD_not?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  activeLiquidityUSD_gt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  activeLiquidityUSD_lt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  activeLiquidityUSD_gte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  activeLiquidityUSD_lte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  activeLiquidityUSD_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  activeLiquidityUSD_not_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  uncollectedProtocolSideTokenAmounts?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  uncollectedProtocolSideTokenAmounts_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  uncollectedProtocolSideTokenAmounts_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  uncollectedProtocolSideTokenAmounts_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  uncollectedProtocolSideTokenAmounts_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  uncollectedProtocolSideTokenAmounts_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  uncollectedProtocolSideValuesUSD?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  uncollectedProtocolSideValuesUSD_not?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  uncollectedProtocolSideValuesUSD_contains?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  uncollectedProtocolSideValuesUSD_contains_nocase?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  uncollectedProtocolSideValuesUSD_not_contains?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  uncollectedProtocolSideValuesUSD_not_contains_nocase?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  uncollectedSupplySideTokenAmounts?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  uncollectedSupplySideTokenAmounts_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  uncollectedSupplySideTokenAmounts_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  uncollectedSupplySideTokenAmounts_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  uncollectedSupplySideTokenAmounts_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  uncollectedSupplySideTokenAmounts_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  uncollectedSupplySideValuesUSD?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  uncollectedSupplySideValuesUSD_not?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  uncollectedSupplySideValuesUSD_contains?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  uncollectedSupplySideValuesUSD_contains_nocase?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  uncollectedSupplySideValuesUSD_not_contains?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  uncollectedSupplySideValuesUSD_not_contains_nocase?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeSupplySideRevenueUSD?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeSupplySideRevenueUSD_not?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeSupplySideRevenueUSD_gt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeSupplySideRevenueUSD_lt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeSupplySideRevenueUSD_gte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeSupplySideRevenueUSD_lte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeSupplySideRevenueUSD_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeSupplySideRevenueUSD_not_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeProtocolSideRevenueUSD?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeProtocolSideRevenueUSD_not?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeProtocolSideRevenueUSD_gt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeProtocolSideRevenueUSD_lt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeProtocolSideRevenueUSD_gte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeProtocolSideRevenueUSD_lte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeProtocolSideRevenueUSD_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeProtocolSideRevenueUSD_not_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeTotalRevenueUSD?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeTotalRevenueUSD_not?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeTotalRevenueUSD_gt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeTotalRevenueUSD_lt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeTotalRevenueUSD_gte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeTotalRevenueUSD_lte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeTotalRevenueUSD_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeVolumeByTokenAmount?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeVolumeByTokenAmount_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeVolumeByTokenAmount_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeVolumeByTokenAmount_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeVolumeByTokenAmount_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeVolumeByTokenAmount_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeVolumeByTokenUSD?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeVolumeByTokenUSD_not?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeVolumeByTokenUSD_contains?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeVolumeByTokenUSD_contains_nocase?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeVolumeByTokenUSD_not_contains?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeVolumeByTokenUSD_not_contains_nocase?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeVolumeUSD?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeVolumeUSD_not?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeVolumeUSD_gt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeVolumeUSD_lt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeVolumeUSD_gte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeVolumeUSD_lte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeVolumeUSD_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeVolumeUSD_not_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  inputTokenBalances?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  inputTokenBalances_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  inputTokenBalances_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  inputTokenBalances_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  inputTokenBalances_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  inputTokenBalances_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  inputTokenBalancesUSD?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  inputTokenBalancesUSD_not?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  inputTokenBalancesUSD_contains?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  inputTokenBalancesUSD_contains_nocase?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  inputTokenBalancesUSD_not_contains?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  inputTokenBalancesUSD_not_contains_nocase?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  inputTokenWeights?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  inputTokenWeights_not?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  inputTokenWeights_contains?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  inputTokenWeights_contains_nocase?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  inputTokenWeights_not_contains?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  inputTokenWeights_not_contains_nocase?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  stakedOutputTokenAmount?: InputMaybe<Scalars['BigInt']['input']>;
  stakedOutputTokenAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  stakedOutputTokenAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  stakedOutputTokenAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  stakedOutputTokenAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  stakedOutputTokenAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  stakedOutputTokenAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  stakedOutputTokenAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  rewardTokenEmissionsAmount?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  rewardTokenEmissionsAmount_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  rewardTokenEmissionsAmount_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  rewardTokenEmissionsAmount_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  rewardTokenEmissionsAmount_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  rewardTokenEmissionsAmount_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  rewardTokenEmissionsUSD?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  rewardTokenEmissionsUSD_not?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  rewardTokenEmissionsUSD_contains?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  rewardTokenEmissionsUSD_contains_nocase?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  rewardTokenEmissionsUSD_not_contains?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  rewardTokenEmissionsUSD_not_contains_nocase?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeDepositCount?: InputMaybe<Scalars['Int']['input']>;
  cumulativeDepositCount_not?: InputMaybe<Scalars['Int']['input']>;
  cumulativeDepositCount_gt?: InputMaybe<Scalars['Int']['input']>;
  cumulativeDepositCount_lt?: InputMaybe<Scalars['Int']['input']>;
  cumulativeDepositCount_gte?: InputMaybe<Scalars['Int']['input']>;
  cumulativeDepositCount_lte?: InputMaybe<Scalars['Int']['input']>;
  cumulativeDepositCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  cumulativeDepositCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  cumulativeWithdrawCount?: InputMaybe<Scalars['Int']['input']>;
  cumulativeWithdrawCount_not?: InputMaybe<Scalars['Int']['input']>;
  cumulativeWithdrawCount_gt?: InputMaybe<Scalars['Int']['input']>;
  cumulativeWithdrawCount_lt?: InputMaybe<Scalars['Int']['input']>;
  cumulativeWithdrawCount_gte?: InputMaybe<Scalars['Int']['input']>;
  cumulativeWithdrawCount_lte?: InputMaybe<Scalars['Int']['input']>;
  cumulativeWithdrawCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  cumulativeWithdrawCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  cumulativeSwapCount?: InputMaybe<Scalars['Int']['input']>;
  cumulativeSwapCount_not?: InputMaybe<Scalars['Int']['input']>;
  cumulativeSwapCount_gt?: InputMaybe<Scalars['Int']['input']>;
  cumulativeSwapCount_lt?: InputMaybe<Scalars['Int']['input']>;
  cumulativeSwapCount_gte?: InputMaybe<Scalars['Int']['input']>;
  cumulativeSwapCount_lte?: InputMaybe<Scalars['Int']['input']>;
  cumulativeSwapCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  cumulativeSwapCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  positions_?: InputMaybe<Arbitrum_Position_filter>;
  positionCount?: InputMaybe<Scalars['Int']['input']>;
  positionCount_not?: InputMaybe<Scalars['Int']['input']>;
  positionCount_gt?: InputMaybe<Scalars['Int']['input']>;
  positionCount_lt?: InputMaybe<Scalars['Int']['input']>;
  positionCount_gte?: InputMaybe<Scalars['Int']['input']>;
  positionCount_lte?: InputMaybe<Scalars['Int']['input']>;
  positionCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  positionCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  openPositionCount?: InputMaybe<Scalars['Int']['input']>;
  openPositionCount_not?: InputMaybe<Scalars['Int']['input']>;
  openPositionCount_gt?: InputMaybe<Scalars['Int']['input']>;
  openPositionCount_lt?: InputMaybe<Scalars['Int']['input']>;
  openPositionCount_gte?: InputMaybe<Scalars['Int']['input']>;
  openPositionCount_lte?: InputMaybe<Scalars['Int']['input']>;
  openPositionCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  openPositionCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  closedPositionCount?: InputMaybe<Scalars['Int']['input']>;
  closedPositionCount_not?: InputMaybe<Scalars['Int']['input']>;
  closedPositionCount_gt?: InputMaybe<Scalars['Int']['input']>;
  closedPositionCount_lt?: InputMaybe<Scalars['Int']['input']>;
  closedPositionCount_gte?: InputMaybe<Scalars['Int']['input']>;
  closedPositionCount_lte?: InputMaybe<Scalars['Int']['input']>;
  closedPositionCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  closedPositionCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lastSnapshotDayID?: InputMaybe<Scalars['Int']['input']>;
  lastSnapshotDayID_not?: InputMaybe<Scalars['Int']['input']>;
  lastSnapshotDayID_gt?: InputMaybe<Scalars['Int']['input']>;
  lastSnapshotDayID_lt?: InputMaybe<Scalars['Int']['input']>;
  lastSnapshotDayID_gte?: InputMaybe<Scalars['Int']['input']>;
  lastSnapshotDayID_lte?: InputMaybe<Scalars['Int']['input']>;
  lastSnapshotDayID_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lastSnapshotDayID_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lastSnapshotHourID?: InputMaybe<Scalars['Int']['input']>;
  lastSnapshotHourID_not?: InputMaybe<Scalars['Int']['input']>;
  lastSnapshotHourID_gt?: InputMaybe<Scalars['Int']['input']>;
  lastSnapshotHourID_lt?: InputMaybe<Scalars['Int']['input']>;
  lastSnapshotHourID_gte?: InputMaybe<Scalars['Int']['input']>;
  lastSnapshotHourID_lte?: InputMaybe<Scalars['Int']['input']>;
  lastSnapshotHourID_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lastSnapshotHourID_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lastUpdateTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdateTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdateTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdateTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdateTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdateTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdateTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastUpdateTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastUpdateBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdateBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdateBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdateBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdateBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdateBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdateBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastUpdateBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  dailySnapshots_?: InputMaybe<Arbitrum_LiquidityPoolDailySnapshot_filter>;
  hourlySnapshots_?: InputMaybe<Arbitrum_LiquidityPoolHourlySnapshot_filter>;
  deposits_?: InputMaybe<Arbitrum_Deposit_filter>;
  withdraws_?: InputMaybe<Arbitrum_Withdraw_filter>;
  swaps_?: InputMaybe<Arbitrum_Swap_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Arbitrum_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arbitrum_LiquidityPool_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arbitrum_LiquidityPool_filter>>>;
};

export type Arbitrum_LiquidityPool_orderBy =
  | 'id'
  | 'protocol'
  | 'protocol__id'
  | 'protocol__name'
  | 'protocol__slug'
  | 'protocol__schemaVersion'
  | 'protocol__subgraphVersion'
  | 'protocol__methodologyVersion'
  | 'protocol__network'
  | 'protocol__type'
  | 'protocol__totalValueLockedUSD'
  | 'protocol__totalLiquidityUSD'
  | 'protocol__activeLiquidityUSD'
  | 'protocol__uncollectedProtocolSideValueUSD'
  | 'protocol__uncollectedSupplySideValueUSD'
  | 'protocol__protocolControlledValueUSD'
  | 'protocol__cumulativeVolumeUSD'
  | 'protocol__cumulativeSupplySideRevenueUSD'
  | 'protocol__cumulativeProtocolSideRevenueUSD'
  | 'protocol__cumulativeTotalRevenueUSD'
  | 'protocol__cumulativeUniqueUsers'
  | 'protocol__cumulativeUniqueLPs'
  | 'protocol__cumulativeUniqueTraders'
  | 'protocol__totalPoolCount'
  | 'protocol__openPositionCount'
  | 'protocol__cumulativePositionCount'
  | 'protocol__lastSnapshotDayID'
  | 'protocol__lastUpdateTimestamp'
  | 'protocol__lastUpdateBlockNumber'
  | 'protocol___regenesis'
  | 'name'
  | 'symbol'
  | 'liquidityToken'
  | 'liquidityToken__id'
  | 'liquidityToken__name'
  | 'liquidityToken__symbol'
  | 'liquidityToken__decimals'
  | 'liquidityToken__lastPriceUSD'
  | 'liquidityToken__lastPriceBlockNumber'
  | 'liquidityToken___lastPricePool'
  | 'liquidityToken___totalSupply'
  | 'liquidityToken___totalValueLockedUSD'
  | 'liquidityToken___largePriceChangeBuffer'
  | 'liquidityToken___largeTVLImpactBuffer'
  | 'liquidityTokenType'
  | 'inputTokens'
  | 'rewardTokens'
  | 'fees'
  | 'isSingleSided'
  | 'createdTimestamp'
  | 'createdBlockNumber'
  | 'tick'
  | 'totalValueLockedUSD'
  | 'totalLiquidity'
  | 'totalLiquidityUSD'
  | 'activeLiquidity'
  | 'activeLiquidityUSD'
  | 'uncollectedProtocolSideTokenAmounts'
  | 'uncollectedProtocolSideValuesUSD'
  | 'uncollectedSupplySideTokenAmounts'
  | 'uncollectedSupplySideValuesUSD'
  | 'cumulativeSupplySideRevenueUSD'
  | 'cumulativeProtocolSideRevenueUSD'
  | 'cumulativeTotalRevenueUSD'
  | 'cumulativeVolumeByTokenAmount'
  | 'cumulativeVolumeByTokenUSD'
  | 'cumulativeVolumeUSD'
  | 'inputTokenBalances'
  | 'inputTokenBalancesUSD'
  | 'inputTokenWeights'
  | 'stakedOutputTokenAmount'
  | 'rewardTokenEmissionsAmount'
  | 'rewardTokenEmissionsUSD'
  | 'cumulativeDepositCount'
  | 'cumulativeWithdrawCount'
  | 'cumulativeSwapCount'
  | 'positions'
  | 'positionCount'
  | 'openPositionCount'
  | 'closedPositionCount'
  | 'lastSnapshotDayID'
  | 'lastSnapshotHourID'
  | 'lastUpdateTimestamp'
  | 'lastUpdateBlockNumber'
  | 'dailySnapshots'
  | 'hourlySnapshots'
  | 'deposits'
  | 'withdraws'
  | 'swaps';

export type Arbitrum_Network =
  | 'ARBITRUM_ONE'
  | 'ARWEAVE_MAINNET'
  | 'AURORA'
  | 'AVALANCHE'
  | 'BASE'
  | 'BOBA'
  | 'BSC'
  | 'CELO'
  | 'COSMOS'
  | 'CRONOS'
  | 'MAINNET'
  | 'FANTOM'
  | 'FUSE'
  | 'HARMONY'
  | 'JUNO'
  | 'MOONBEAM'
  | 'MOONRIVER'
  | 'NEAR_MAINNET'
  | 'OPTIMISM'
  | 'OSMOSIS'
  | 'MATIC'
  | 'XDAI';

/** Defines the order direction, either ascending or descending */
export type Arbitrum_OrderDirection =
  | 'asc'
  | 'desc';

export type Arbitrum_Position = {
  /**  { Account address }-{ Market address }-{ Count }  */
  id: Scalars['Arbitrum_Bytes']['output'];
  /**  Account that owns this position  */
  account: Arbitrum_Account;
  /**  The liquidity pool in which this position was opened  */
  pool: Arbitrum_LiquidityPool;
  /**  The hash of the transaction that opened this position  */
  hashOpened: Scalars['Arbitrum_Bytes']['output'];
  /**  The hash of the transaction that closed this position  */
  hashClosed?: Maybe<Scalars['Arbitrum_Bytes']['output']>;
  /**  Block number of when the position was opened  */
  blockNumberOpened: Scalars['BigInt']['output'];
  /**  Timestamp when the position was opened  */
  timestampOpened: Scalars['BigInt']['output'];
  /**  Block number of when the position was closed (0 if still open)  */
  blockNumberClosed?: Maybe<Scalars['BigInt']['output']>;
  /**  Timestamp when the position was closed (0 if still open)  */
  timestampClosed?: Maybe<Scalars['BigInt']['output']>;
  /**  lower tick of the position  */
  tickLower?: Maybe<Arbitrum_Tick>;
  /**  upper tick of the position  */
  tickUpper?: Maybe<Arbitrum_Tick>;
  /**  Token that is to represent ownership of liquidity  */
  liquidityToken?: Maybe<Arbitrum_Token>;
  /**  Type of token used to track liquidity  */
  liquidityTokenType?: Maybe<Arbitrum_TokenType>;
  /**  total position liquidity  */
  liquidity: Scalars['BigInt']['output'];
  /**  total position liquidity in USD  */
  liquidityUSD: Scalars['Arbitrum_BigDecimal']['output'];
  /**  amount of tokens ever deposited to position  */
  cumulativeDepositTokenAmounts: Array<Scalars['BigInt']['output']>;
  /**  amount of tokens in USD deposited to position  */
  cumulativeDepositUSD: Scalars['Arbitrum_BigDecimal']['output'];
  /**  amount of tokens ever withdrawn from position (without fees)  */
  cumulativeWithdrawTokenAmounts: Array<Scalars['BigInt']['output']>;
  /**  amount of tokens in USD withdrawn from position (without fees)  */
  cumulativeWithdrawUSD: Scalars['Arbitrum_BigDecimal']['output'];
  /**  Total reward token accumulated under this position, in USD  */
  cumulativeRewardUSD?: Maybe<Array<Scalars['BigInt']['output']>>;
  /**  Number of deposits related to this position  */
  depositCount: Scalars['Int']['output'];
  /**  All deposit events of this position  */
  deposits: Array<Arbitrum_Deposit>;
  /**  Number of withdrawals related to this position  */
  withdrawCount: Scalars['Int']['output'];
  /**  All withdraw events of this position  */
  withdraws: Array<Arbitrum_Withdraw>;
  /**  Position daily snapshots for open positions  */
  snapshots: Array<Arbitrum_PositionSnapshot>;
};


export type Arbitrum_PositiondepositsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrum_Deposit_orderBy>;
  orderDirection?: InputMaybe<Arbitrum_OrderDirection>;
  where?: InputMaybe<Arbitrum_Deposit_filter>;
};


export type Arbitrum_PositionwithdrawsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrum_Withdraw_orderBy>;
  orderDirection?: InputMaybe<Arbitrum_OrderDirection>;
  where?: InputMaybe<Arbitrum_Withdraw_filter>;
};


export type Arbitrum_PositionsnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrum_PositionSnapshot_orderBy>;
  orderDirection?: InputMaybe<Arbitrum_OrderDirection>;
  where?: InputMaybe<Arbitrum_PositionSnapshot_filter>;
};

export type Arbitrum_PositionSnapshot = {
  /**  { Position ID }-{ Transaction hash }-{ Log index }  */
  id: Scalars['Arbitrum_Bytes']['output'];
  /**  Transaction hash of the transaction that triggered this snapshot  */
  hash: Scalars['Arbitrum_Bytes']['output'];
  /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
  logIndex: Scalars['Int']['output'];
  /**  Nonce of the transaction that triggered this snapshot  */
  nonce: Scalars['BigInt']['output'];
  /**  Position of this snapshot  */
  position: Arbitrum_Position;
  /**  Type of token used to track liquidity  */
  liquidityTokenType?: Maybe<Arbitrum_TokenType>;
  /**  total position liquidity  */
  liquidity?: Maybe<Scalars['BigInt']['output']>;
  /**  total position liquidity in USD  */
  liquidityUSD?: Maybe<Scalars['Arbitrum_BigDecimal']['output']>;
  /**  amount of tokens ever deposited to position  */
  cumulativeDepositTokenAmounts: Array<Scalars['BigInt']['output']>;
  /**  amount of tokens in USD deposited to position  */
  cumulativeDepositUSD: Scalars['Arbitrum_BigDecimal']['output'];
  /**  amount of tokens ever withdrawn from position (without fees)  */
  cumulativeWithdrawTokenAmounts: Array<Scalars['BigInt']['output']>;
  /**  amount of tokens in USD withdrawn from position (without fees)  */
  cumulativeWithdrawUSD: Scalars['Arbitrum_BigDecimal']['output'];
  /**  Total reward token accumulated under this position, in native amounts  */
  cumulativeRewardTokenAmounts?: Maybe<Array<Scalars['BigInt']['output']>>;
  /**  Total reward token accumulated under this position, in USD  */
  cumulativeRewardUSD?: Maybe<Array<Scalars['BigInt']['output']>>;
  /**  Number of deposits related to this position  */
  depositCount: Scalars['Int']['output'];
  /**  Number of withdrawals related to this position  */
  withdrawCount: Scalars['Int']['output'];
  /**  Block number of this snapshot  */
  blockNumber: Scalars['BigInt']['output'];
  /**  Timestamp of this snapshot  */
  timestamp: Scalars['BigInt']['output'];
};

export type Arbitrum_PositionSnapshot_filter = {
  id?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Arbitrum_Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Arbitrum_Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  hash?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  hash_not?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  hash_gt?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  hash_lt?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  hash_gte?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  hash_lte?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  hash_in?: InputMaybe<Array<Scalars['Arbitrum_Bytes']['input']>>;
  hash_not_in?: InputMaybe<Array<Scalars['Arbitrum_Bytes']['input']>>;
  hash_contains?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  hash_not_contains?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  logIndex?: InputMaybe<Scalars['Int']['input']>;
  logIndex_not?: InputMaybe<Scalars['Int']['input']>;
  logIndex_gt?: InputMaybe<Scalars['Int']['input']>;
  logIndex_lt?: InputMaybe<Scalars['Int']['input']>;
  logIndex_gte?: InputMaybe<Scalars['Int']['input']>;
  logIndex_lte?: InputMaybe<Scalars['Int']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  nonce?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_not?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_gt?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_lt?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_gte?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_lte?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  nonce_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  position?: InputMaybe<Scalars['String']['input']>;
  position_not?: InputMaybe<Scalars['String']['input']>;
  position_gt?: InputMaybe<Scalars['String']['input']>;
  position_lt?: InputMaybe<Scalars['String']['input']>;
  position_gte?: InputMaybe<Scalars['String']['input']>;
  position_lte?: InputMaybe<Scalars['String']['input']>;
  position_in?: InputMaybe<Array<Scalars['String']['input']>>;
  position_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  position_contains?: InputMaybe<Scalars['String']['input']>;
  position_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  position_not_contains?: InputMaybe<Scalars['String']['input']>;
  position_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  position_starts_with?: InputMaybe<Scalars['String']['input']>;
  position_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  position_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  position_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  position_ends_with?: InputMaybe<Scalars['String']['input']>;
  position_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  position_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  position_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  position_?: InputMaybe<Arbitrum_Position_filter>;
  liquidityTokenType?: InputMaybe<Arbitrum_TokenType>;
  liquidityTokenType_not?: InputMaybe<Arbitrum_TokenType>;
  liquidityTokenType_in?: InputMaybe<Array<Arbitrum_TokenType>>;
  liquidityTokenType_not_in?: InputMaybe<Array<Arbitrum_TokenType>>;
  liquidity?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_not?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_gt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_lt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_gte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_lte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidity_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidityUSD?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  liquidityUSD_not?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  liquidityUSD_gt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  liquidityUSD_lt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  liquidityUSD_gte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  liquidityUSD_lte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  liquidityUSD_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  liquidityUSD_not_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeDepositTokenAmounts?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeDepositTokenAmounts_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeDepositTokenAmounts_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeDepositTokenAmounts_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeDepositTokenAmounts_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeDepositTokenAmounts_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeDepositUSD?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeDepositUSD_not?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeDepositUSD_gt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeDepositUSD_lt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeDepositUSD_gte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeDepositUSD_lte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeDepositUSD_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeDepositUSD_not_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeWithdrawTokenAmounts?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeWithdrawTokenAmounts_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeWithdrawTokenAmounts_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeWithdrawTokenAmounts_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeWithdrawTokenAmounts_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeWithdrawTokenAmounts_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeWithdrawUSD?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeWithdrawUSD_not?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeWithdrawUSD_gt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeWithdrawUSD_lt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeWithdrawUSD_gte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeWithdrawUSD_lte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeWithdrawUSD_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeWithdrawUSD_not_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeRewardTokenAmounts?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeRewardTokenAmounts_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeRewardTokenAmounts_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeRewardTokenAmounts_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeRewardTokenAmounts_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeRewardTokenAmounts_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeRewardUSD?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeRewardUSD_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeRewardUSD_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeRewardUSD_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeRewardUSD_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeRewardUSD_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  depositCount?: InputMaybe<Scalars['Int']['input']>;
  depositCount_not?: InputMaybe<Scalars['Int']['input']>;
  depositCount_gt?: InputMaybe<Scalars['Int']['input']>;
  depositCount_lt?: InputMaybe<Scalars['Int']['input']>;
  depositCount_gte?: InputMaybe<Scalars['Int']['input']>;
  depositCount_lte?: InputMaybe<Scalars['Int']['input']>;
  depositCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  depositCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  withdrawCount?: InputMaybe<Scalars['Int']['input']>;
  withdrawCount_not?: InputMaybe<Scalars['Int']['input']>;
  withdrawCount_gt?: InputMaybe<Scalars['Int']['input']>;
  withdrawCount_lt?: InputMaybe<Scalars['Int']['input']>;
  withdrawCount_gte?: InputMaybe<Scalars['Int']['input']>;
  withdrawCount_lte?: InputMaybe<Scalars['Int']['input']>;
  withdrawCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  withdrawCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Arbitrum_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arbitrum_PositionSnapshot_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arbitrum_PositionSnapshot_filter>>>;
};

export type Arbitrum_PositionSnapshot_orderBy =
  | 'id'
  | 'hash'
  | 'logIndex'
  | 'nonce'
  | 'position'
  | 'position__id'
  | 'position__hashOpened'
  | 'position__hashClosed'
  | 'position__blockNumberOpened'
  | 'position__timestampOpened'
  | 'position__blockNumberClosed'
  | 'position__timestampClosed'
  | 'position__liquidityTokenType'
  | 'position__liquidity'
  | 'position__liquidityUSD'
  | 'position__cumulativeDepositUSD'
  | 'position__cumulativeWithdrawUSD'
  | 'position__depositCount'
  | 'position__withdrawCount'
  | 'liquidityTokenType'
  | 'liquidity'
  | 'liquidityUSD'
  | 'cumulativeDepositTokenAmounts'
  | 'cumulativeDepositUSD'
  | 'cumulativeWithdrawTokenAmounts'
  | 'cumulativeWithdrawUSD'
  | 'cumulativeRewardTokenAmounts'
  | 'cumulativeRewardUSD'
  | 'depositCount'
  | 'withdrawCount'
  | 'blockNumber'
  | 'timestamp';

export type Arbitrum_Position_filter = {
  id?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Arbitrum_Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Arbitrum_Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  account?: InputMaybe<Scalars['String']['input']>;
  account_not?: InputMaybe<Scalars['String']['input']>;
  account_gt?: InputMaybe<Scalars['String']['input']>;
  account_lt?: InputMaybe<Scalars['String']['input']>;
  account_gte?: InputMaybe<Scalars['String']['input']>;
  account_lte?: InputMaybe<Scalars['String']['input']>;
  account_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_contains?: InputMaybe<Scalars['String']['input']>;
  account_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_contains?: InputMaybe<Scalars['String']['input']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_?: InputMaybe<Arbitrum_Account_filter>;
  pool?: InputMaybe<Scalars['String']['input']>;
  pool_not?: InputMaybe<Scalars['String']['input']>;
  pool_gt?: InputMaybe<Scalars['String']['input']>;
  pool_lt?: InputMaybe<Scalars['String']['input']>;
  pool_gte?: InputMaybe<Scalars['String']['input']>;
  pool_lte?: InputMaybe<Scalars['String']['input']>;
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_contains?: InputMaybe<Scalars['String']['input']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_?: InputMaybe<Arbitrum_LiquidityPool_filter>;
  hashOpened?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  hashOpened_not?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  hashOpened_gt?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  hashOpened_lt?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  hashOpened_gte?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  hashOpened_lte?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  hashOpened_in?: InputMaybe<Array<Scalars['Arbitrum_Bytes']['input']>>;
  hashOpened_not_in?: InputMaybe<Array<Scalars['Arbitrum_Bytes']['input']>>;
  hashOpened_contains?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  hashOpened_not_contains?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  hashClosed?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  hashClosed_not?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  hashClosed_gt?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  hashClosed_lt?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  hashClosed_gte?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  hashClosed_lte?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  hashClosed_in?: InputMaybe<Array<Scalars['Arbitrum_Bytes']['input']>>;
  hashClosed_not_in?: InputMaybe<Array<Scalars['Arbitrum_Bytes']['input']>>;
  hashClosed_contains?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  hashClosed_not_contains?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  blockNumberOpened?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumberOpened_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumberOpened_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumberOpened_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumberOpened_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumberOpened_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumberOpened_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumberOpened_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestampOpened?: InputMaybe<Scalars['BigInt']['input']>;
  timestampOpened_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestampOpened_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestampOpened_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestampOpened_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestampOpened_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestampOpened_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestampOpened_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumberClosed?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumberClosed_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumberClosed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumberClosed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumberClosed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumberClosed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumberClosed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumberClosed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestampClosed?: InputMaybe<Scalars['BigInt']['input']>;
  timestampClosed_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestampClosed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestampClosed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestampClosed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestampClosed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestampClosed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestampClosed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tickLower?: InputMaybe<Scalars['String']['input']>;
  tickLower_not?: InputMaybe<Scalars['String']['input']>;
  tickLower_gt?: InputMaybe<Scalars['String']['input']>;
  tickLower_lt?: InputMaybe<Scalars['String']['input']>;
  tickLower_gte?: InputMaybe<Scalars['String']['input']>;
  tickLower_lte?: InputMaybe<Scalars['String']['input']>;
  tickLower_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tickLower_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tickLower_contains?: InputMaybe<Scalars['String']['input']>;
  tickLower_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tickLower_not_contains?: InputMaybe<Scalars['String']['input']>;
  tickLower_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tickLower_starts_with?: InputMaybe<Scalars['String']['input']>;
  tickLower_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tickLower_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tickLower_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tickLower_ends_with?: InputMaybe<Scalars['String']['input']>;
  tickLower_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tickLower_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tickLower_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tickLower_?: InputMaybe<Arbitrum_Tick_filter>;
  tickUpper?: InputMaybe<Scalars['String']['input']>;
  tickUpper_not?: InputMaybe<Scalars['String']['input']>;
  tickUpper_gt?: InputMaybe<Scalars['String']['input']>;
  tickUpper_lt?: InputMaybe<Scalars['String']['input']>;
  tickUpper_gte?: InputMaybe<Scalars['String']['input']>;
  tickUpper_lte?: InputMaybe<Scalars['String']['input']>;
  tickUpper_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tickUpper_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tickUpper_contains?: InputMaybe<Scalars['String']['input']>;
  tickUpper_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tickUpper_not_contains?: InputMaybe<Scalars['String']['input']>;
  tickUpper_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tickUpper_starts_with?: InputMaybe<Scalars['String']['input']>;
  tickUpper_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tickUpper_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tickUpper_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tickUpper_ends_with?: InputMaybe<Scalars['String']['input']>;
  tickUpper_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tickUpper_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tickUpper_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tickUpper_?: InputMaybe<Arbitrum_Tick_filter>;
  liquidityToken?: InputMaybe<Scalars['String']['input']>;
  liquidityToken_not?: InputMaybe<Scalars['String']['input']>;
  liquidityToken_gt?: InputMaybe<Scalars['String']['input']>;
  liquidityToken_lt?: InputMaybe<Scalars['String']['input']>;
  liquidityToken_gte?: InputMaybe<Scalars['String']['input']>;
  liquidityToken_lte?: InputMaybe<Scalars['String']['input']>;
  liquidityToken_in?: InputMaybe<Array<Scalars['String']['input']>>;
  liquidityToken_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  liquidityToken_contains?: InputMaybe<Scalars['String']['input']>;
  liquidityToken_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  liquidityToken_not_contains?: InputMaybe<Scalars['String']['input']>;
  liquidityToken_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  liquidityToken_starts_with?: InputMaybe<Scalars['String']['input']>;
  liquidityToken_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  liquidityToken_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  liquidityToken_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  liquidityToken_ends_with?: InputMaybe<Scalars['String']['input']>;
  liquidityToken_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  liquidityToken_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  liquidityToken_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  liquidityToken_?: InputMaybe<Arbitrum_Token_filter>;
  liquidityTokenType?: InputMaybe<Arbitrum_TokenType>;
  liquidityTokenType_not?: InputMaybe<Arbitrum_TokenType>;
  liquidityTokenType_in?: InputMaybe<Array<Arbitrum_TokenType>>;
  liquidityTokenType_not_in?: InputMaybe<Array<Arbitrum_TokenType>>;
  liquidity?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_not?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_gt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_lt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_gte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_lte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidity_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidityUSD?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  liquidityUSD_not?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  liquidityUSD_gt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  liquidityUSD_lt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  liquidityUSD_gte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  liquidityUSD_lte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  liquidityUSD_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  liquidityUSD_not_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeDepositTokenAmounts?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeDepositTokenAmounts_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeDepositTokenAmounts_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeDepositTokenAmounts_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeDepositTokenAmounts_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeDepositTokenAmounts_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeDepositUSD?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeDepositUSD_not?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeDepositUSD_gt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeDepositUSD_lt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeDepositUSD_gte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeDepositUSD_lte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeDepositUSD_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeDepositUSD_not_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeWithdrawTokenAmounts?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeWithdrawTokenAmounts_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeWithdrawTokenAmounts_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeWithdrawTokenAmounts_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeWithdrawTokenAmounts_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeWithdrawTokenAmounts_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeWithdrawUSD?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeWithdrawUSD_not?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeWithdrawUSD_gt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeWithdrawUSD_lt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeWithdrawUSD_gte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeWithdrawUSD_lte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeWithdrawUSD_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeWithdrawUSD_not_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeRewardUSD?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeRewardUSD_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeRewardUSD_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeRewardUSD_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeRewardUSD_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  cumulativeRewardUSD_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  depositCount?: InputMaybe<Scalars['Int']['input']>;
  depositCount_not?: InputMaybe<Scalars['Int']['input']>;
  depositCount_gt?: InputMaybe<Scalars['Int']['input']>;
  depositCount_lt?: InputMaybe<Scalars['Int']['input']>;
  depositCount_gte?: InputMaybe<Scalars['Int']['input']>;
  depositCount_lte?: InputMaybe<Scalars['Int']['input']>;
  depositCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  depositCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  deposits_?: InputMaybe<Arbitrum_Deposit_filter>;
  withdrawCount?: InputMaybe<Scalars['Int']['input']>;
  withdrawCount_not?: InputMaybe<Scalars['Int']['input']>;
  withdrawCount_gt?: InputMaybe<Scalars['Int']['input']>;
  withdrawCount_lt?: InputMaybe<Scalars['Int']['input']>;
  withdrawCount_gte?: InputMaybe<Scalars['Int']['input']>;
  withdrawCount_lte?: InputMaybe<Scalars['Int']['input']>;
  withdrawCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  withdrawCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  withdraws_?: InputMaybe<Arbitrum_Withdraw_filter>;
  snapshots_?: InputMaybe<Arbitrum_PositionSnapshot_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Arbitrum_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arbitrum_Position_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arbitrum_Position_filter>>>;
};

export type Arbitrum_Position_orderBy =
  | 'id'
  | 'account'
  | 'account__id'
  | 'account__positionCount'
  | 'account__openPositionCount'
  | 'account__closedPositionCount'
  | 'account__depositCount'
  | 'account__withdrawCount'
  | 'account__swapCount'
  | 'pool'
  | 'pool__id'
  | 'pool__name'
  | 'pool__symbol'
  | 'pool__liquidityTokenType'
  | 'pool__isSingleSided'
  | 'pool__createdTimestamp'
  | 'pool__createdBlockNumber'
  | 'pool__tick'
  | 'pool__totalValueLockedUSD'
  | 'pool__totalLiquidity'
  | 'pool__totalLiquidityUSD'
  | 'pool__activeLiquidity'
  | 'pool__activeLiquidityUSD'
  | 'pool__cumulativeSupplySideRevenueUSD'
  | 'pool__cumulativeProtocolSideRevenueUSD'
  | 'pool__cumulativeTotalRevenueUSD'
  | 'pool__cumulativeVolumeUSD'
  | 'pool__stakedOutputTokenAmount'
  | 'pool__cumulativeDepositCount'
  | 'pool__cumulativeWithdrawCount'
  | 'pool__cumulativeSwapCount'
  | 'pool__positionCount'
  | 'pool__openPositionCount'
  | 'pool__closedPositionCount'
  | 'pool__lastSnapshotDayID'
  | 'pool__lastSnapshotHourID'
  | 'pool__lastUpdateTimestamp'
  | 'pool__lastUpdateBlockNumber'
  | 'hashOpened'
  | 'hashClosed'
  | 'blockNumberOpened'
  | 'timestampOpened'
  | 'blockNumberClosed'
  | 'timestampClosed'
  | 'tickLower'
  | 'tickLower__id'
  | 'tickLower__index'
  | 'tickLower__createdTimestamp'
  | 'tickLower__createdBlockNumber'
  | 'tickLower__liquidityGross'
  | 'tickLower__liquidityGrossUSD'
  | 'tickLower__liquidityNet'
  | 'tickLower__liquidityNetUSD'
  | 'tickLower__lastSnapshotDayID'
  | 'tickLower__lastSnapshotHourID'
  | 'tickLower__lastUpdateTimestamp'
  | 'tickLower__lastUpdateBlockNumber'
  | 'tickUpper'
  | 'tickUpper__id'
  | 'tickUpper__index'
  | 'tickUpper__createdTimestamp'
  | 'tickUpper__createdBlockNumber'
  | 'tickUpper__liquidityGross'
  | 'tickUpper__liquidityGrossUSD'
  | 'tickUpper__liquidityNet'
  | 'tickUpper__liquidityNetUSD'
  | 'tickUpper__lastSnapshotDayID'
  | 'tickUpper__lastSnapshotHourID'
  | 'tickUpper__lastUpdateTimestamp'
  | 'tickUpper__lastUpdateBlockNumber'
  | 'liquidityToken'
  | 'liquidityToken__id'
  | 'liquidityToken__name'
  | 'liquidityToken__symbol'
  | 'liquidityToken__decimals'
  | 'liquidityToken__lastPriceUSD'
  | 'liquidityToken__lastPriceBlockNumber'
  | 'liquidityToken___lastPricePool'
  | 'liquidityToken___totalSupply'
  | 'liquidityToken___totalValueLockedUSD'
  | 'liquidityToken___largePriceChangeBuffer'
  | 'liquidityToken___largeTVLImpactBuffer'
  | 'liquidityTokenType'
  | 'liquidity'
  | 'liquidityUSD'
  | 'cumulativeDepositTokenAmounts'
  | 'cumulativeDepositUSD'
  | 'cumulativeWithdrawTokenAmounts'
  | 'cumulativeWithdrawUSD'
  | 'cumulativeRewardUSD'
  | 'depositCount'
  | 'deposits'
  | 'withdrawCount'
  | 'withdraws'
  | 'snapshots';

export type Arbitrum_Protocol = {
  /**  Smart contract address of the protocol's main contract (Factory, Registry, etc)  */
  id: Scalars['Arbitrum_Bytes']['output'];
  /**  Name of the protocol, including version. e.g. Uniswap v3  */
  name: Scalars['String']['output'];
  /**  Slug of protocol, including version. e.g. uniswap-v3  */
  slug: Scalars['String']['output'];
  /**  Version of the subgraph schema, in SemVer format (e.g. 1.0.0)  */
  schemaVersion: Scalars['String']['output'];
  /**  Version of the subgraph implementation, in SemVer format (e.g. 1.0.0)  */
  subgraphVersion: Scalars['String']['output'];
  /**  Version of the methodology used to compute metrics, loosely based on SemVer format (e.g. 1.0.0)  */
  methodologyVersion: Scalars['String']['output'];
  /**  The blockchain network this subgraph is indexing on  */
  network: Arbitrum_Network;
  /**  The type of protocol (e.g. DEX, Lending, Yield, etc)  */
  type: Arbitrum_ProtocolType;
  /**  Current TVL (Total Value Locked) of the entire protocol  */
  totalValueLockedUSD: Scalars['Arbitrum_BigDecimal']['output'];
  /**  Current PCV (Protocol Controlled Value). Only relevant for protocols with PCV.  */
  protocolControlledValueUSD?: Maybe<Scalars['Arbitrum_BigDecimal']['output']>;
  /**  Revenue claimed by suppliers to the protocol. LPs on DEXs (e.g. 0.25% of the swap fee in Sushiswap). Depositors on Lending Protocols. NFT sellers on OpenSea.  */
  cumulativeSupplySideRevenueUSD: Scalars['Arbitrum_BigDecimal']['output'];
  /**  Gross revenue for the protocol (revenue claimed by protocol). Examples: AMM protocol fee (Sushi’s 0.05%). OpenSea 10% sell fee.  */
  cumulativeProtocolSideRevenueUSD: Scalars['Arbitrum_BigDecimal']['output'];
  /**  All revenue generated by the protocol. e.g. 0.30% of swap fee in Sushiswap, all yield generated by Yearn.  */
  cumulativeTotalRevenueUSD: Scalars['Arbitrum_BigDecimal']['output'];
  /**  Number of cumulative unique users  */
  cumulativeUniqueUsers: Scalars['Int']['output'];
  /**  Total number of pools  */
  totalPoolCount: Scalars['Int']['output'];
  /**  Daily usage metrics for this protocol  */
  dailyUsageMetrics: Array<Arbitrum_UsageMetricsDailySnapshot>;
  /**  Hourly usage metrics for this protocol  */
  hourlyUsageMetrics: Array<Arbitrum_UsageMetricsHourlySnapshot>;
  /**  Daily financial metrics for this protocol  */
  financialMetrics: Array<Arbitrum_FinancialsDailySnapshot>;
};


export type Arbitrum_ProtocoldailyUsageMetricsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrum_UsageMetricsDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<Arbitrum_OrderDirection>;
  where?: InputMaybe<Arbitrum_UsageMetricsDailySnapshot_filter>;
};


export type Arbitrum_ProtocolhourlyUsageMetricsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrum_UsageMetricsHourlySnapshot_orderBy>;
  orderDirection?: InputMaybe<Arbitrum_OrderDirection>;
  where?: InputMaybe<Arbitrum_UsageMetricsHourlySnapshot_filter>;
};


export type Arbitrum_ProtocolfinancialMetricsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrum_FinancialsDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<Arbitrum_OrderDirection>;
  where?: InputMaybe<Arbitrum_FinancialsDailySnapshot_filter>;
};

export type Arbitrum_ProtocolType =
  | 'EXCHANGE'
  | 'LENDING'
  | 'YIELD'
  | 'BRIDGE'
  | 'GENERIC';

export type Arbitrum_Protocol_filter = {
  id?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Arbitrum_Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Arbitrum_Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_gt?: InputMaybe<Scalars['String']['input']>;
  slug_lt?: InputMaybe<Scalars['String']['input']>;
  slug_gte?: InputMaybe<Scalars['String']['input']>;
  slug_lte?: InputMaybe<Scalars['String']['input']>;
  slug_in?: InputMaybe<Array<Scalars['String']['input']>>;
  slug_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  slug_starts_with?: InputMaybe<Scalars['String']['input']>;
  slug_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  slug_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  slug_ends_with?: InputMaybe<Scalars['String']['input']>;
  slug_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  slug_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  schemaVersion?: InputMaybe<Scalars['String']['input']>;
  schemaVersion_not?: InputMaybe<Scalars['String']['input']>;
  schemaVersion_gt?: InputMaybe<Scalars['String']['input']>;
  schemaVersion_lt?: InputMaybe<Scalars['String']['input']>;
  schemaVersion_gte?: InputMaybe<Scalars['String']['input']>;
  schemaVersion_lte?: InputMaybe<Scalars['String']['input']>;
  schemaVersion_in?: InputMaybe<Array<Scalars['String']['input']>>;
  schemaVersion_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  schemaVersion_contains?: InputMaybe<Scalars['String']['input']>;
  schemaVersion_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  schemaVersion_not_contains?: InputMaybe<Scalars['String']['input']>;
  schemaVersion_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  schemaVersion_starts_with?: InputMaybe<Scalars['String']['input']>;
  schemaVersion_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  schemaVersion_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  schemaVersion_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  schemaVersion_ends_with?: InputMaybe<Scalars['String']['input']>;
  schemaVersion_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  schemaVersion_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  schemaVersion_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subgraphVersion?: InputMaybe<Scalars['String']['input']>;
  subgraphVersion_not?: InputMaybe<Scalars['String']['input']>;
  subgraphVersion_gt?: InputMaybe<Scalars['String']['input']>;
  subgraphVersion_lt?: InputMaybe<Scalars['String']['input']>;
  subgraphVersion_gte?: InputMaybe<Scalars['String']['input']>;
  subgraphVersion_lte?: InputMaybe<Scalars['String']['input']>;
  subgraphVersion_in?: InputMaybe<Array<Scalars['String']['input']>>;
  subgraphVersion_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  subgraphVersion_contains?: InputMaybe<Scalars['String']['input']>;
  subgraphVersion_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  subgraphVersion_not_contains?: InputMaybe<Scalars['String']['input']>;
  subgraphVersion_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  subgraphVersion_starts_with?: InputMaybe<Scalars['String']['input']>;
  subgraphVersion_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subgraphVersion_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  subgraphVersion_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subgraphVersion_ends_with?: InputMaybe<Scalars['String']['input']>;
  subgraphVersion_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  subgraphVersion_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  subgraphVersion_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  methodologyVersion?: InputMaybe<Scalars['String']['input']>;
  methodologyVersion_not?: InputMaybe<Scalars['String']['input']>;
  methodologyVersion_gt?: InputMaybe<Scalars['String']['input']>;
  methodologyVersion_lt?: InputMaybe<Scalars['String']['input']>;
  methodologyVersion_gte?: InputMaybe<Scalars['String']['input']>;
  methodologyVersion_lte?: InputMaybe<Scalars['String']['input']>;
  methodologyVersion_in?: InputMaybe<Array<Scalars['String']['input']>>;
  methodologyVersion_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  methodologyVersion_contains?: InputMaybe<Scalars['String']['input']>;
  methodologyVersion_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  methodologyVersion_not_contains?: InputMaybe<Scalars['String']['input']>;
  methodologyVersion_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  methodologyVersion_starts_with?: InputMaybe<Scalars['String']['input']>;
  methodologyVersion_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  methodologyVersion_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  methodologyVersion_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  methodologyVersion_ends_with?: InputMaybe<Scalars['String']['input']>;
  methodologyVersion_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  methodologyVersion_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  methodologyVersion_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  network?: InputMaybe<Arbitrum_Network>;
  network_not?: InputMaybe<Arbitrum_Network>;
  network_in?: InputMaybe<Array<Arbitrum_Network>>;
  network_not_in?: InputMaybe<Array<Arbitrum_Network>>;
  type?: InputMaybe<Arbitrum_ProtocolType>;
  type_not?: InputMaybe<Arbitrum_ProtocolType>;
  type_in?: InputMaybe<Array<Arbitrum_ProtocolType>>;
  type_not_in?: InputMaybe<Array<Arbitrum_ProtocolType>>;
  totalValueLockedUSD?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  totalValueLockedUSD_not?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  protocolControlledValueUSD?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  protocolControlledValueUSD_not?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  protocolControlledValueUSD_gt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  protocolControlledValueUSD_lt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  protocolControlledValueUSD_gte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  protocolControlledValueUSD_lte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  protocolControlledValueUSD_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  protocolControlledValueUSD_not_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeSupplySideRevenueUSD?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeSupplySideRevenueUSD_not?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeSupplySideRevenueUSD_gt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeSupplySideRevenueUSD_lt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeSupplySideRevenueUSD_gte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeSupplySideRevenueUSD_lte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeSupplySideRevenueUSD_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeSupplySideRevenueUSD_not_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeProtocolSideRevenueUSD?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeProtocolSideRevenueUSD_not?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeProtocolSideRevenueUSD_gt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeProtocolSideRevenueUSD_lt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeProtocolSideRevenueUSD_gte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeProtocolSideRevenueUSD_lte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeProtocolSideRevenueUSD_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeProtocolSideRevenueUSD_not_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeTotalRevenueUSD?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeTotalRevenueUSD_not?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeTotalRevenueUSD_gt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeTotalRevenueUSD_lt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeTotalRevenueUSD_gte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeTotalRevenueUSD_lte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  cumulativeTotalRevenueUSD_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeTotalRevenueUSD_not_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  cumulativeUniqueUsers?: InputMaybe<Scalars['Int']['input']>;
  cumulativeUniqueUsers_not?: InputMaybe<Scalars['Int']['input']>;
  cumulativeUniqueUsers_gt?: InputMaybe<Scalars['Int']['input']>;
  cumulativeUniqueUsers_lt?: InputMaybe<Scalars['Int']['input']>;
  cumulativeUniqueUsers_gte?: InputMaybe<Scalars['Int']['input']>;
  cumulativeUniqueUsers_lte?: InputMaybe<Scalars['Int']['input']>;
  cumulativeUniqueUsers_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  cumulativeUniqueUsers_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalPoolCount?: InputMaybe<Scalars['Int']['input']>;
  totalPoolCount_not?: InputMaybe<Scalars['Int']['input']>;
  totalPoolCount_gt?: InputMaybe<Scalars['Int']['input']>;
  totalPoolCount_lt?: InputMaybe<Scalars['Int']['input']>;
  totalPoolCount_gte?: InputMaybe<Scalars['Int']['input']>;
  totalPoolCount_lte?: InputMaybe<Scalars['Int']['input']>;
  totalPoolCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalPoolCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  dailyUsageMetrics_?: InputMaybe<Arbitrum_UsageMetricsDailySnapshot_filter>;
  hourlyUsageMetrics_?: InputMaybe<Arbitrum_UsageMetricsHourlySnapshot_filter>;
  financialMetrics_?: InputMaybe<Arbitrum_FinancialsDailySnapshot_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Arbitrum_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arbitrum_Protocol_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arbitrum_Protocol_filter>>>;
};

export type Arbitrum_Protocol_orderBy =
  | 'id'
  | 'name'
  | 'slug'
  | 'schemaVersion'
  | 'subgraphVersion'
  | 'methodologyVersion'
  | 'network'
  | 'type'
  | 'totalValueLockedUSD'
  | 'protocolControlledValueUSD'
  | 'cumulativeSupplySideRevenueUSD'
  | 'cumulativeProtocolSideRevenueUSD'
  | 'cumulativeTotalRevenueUSD'
  | 'cumulativeUniqueUsers'
  | 'totalPoolCount'
  | 'dailyUsageMetrics'
  | 'hourlyUsageMetrics'
  | 'financialMetrics';

export type Query = {
  Arbitrum_token?: Maybe<Arbitrum_Token>;
  Arbitrum_tokens: Array<Arbitrum_Token>;
  Arbitrum_rewardToken?: Maybe<Arbitrum_RewardToken>;
  Arbitrum_rewardTokens: Array<Arbitrum_RewardToken>;
  Arbitrum_liquidityPoolFee?: Maybe<Arbitrum_LiquidityPoolFee>;
  Arbitrum_liquidityPoolFees: Array<Arbitrum_LiquidityPoolFee>;
  Arbitrum_dexAmmProtocol?: Maybe<Arbitrum_DexAmmProtocol>;
  Arbitrum_dexAmmProtocols: Array<Arbitrum_DexAmmProtocol>;
  Arbitrum_usageMetricsDailySnapshot?: Maybe<Arbitrum_UsageMetricsDailySnapshot>;
  Arbitrum_usageMetricsDailySnapshots: Array<Arbitrum_UsageMetricsDailySnapshot>;
  Arbitrum_usageMetricsHourlySnapshot?: Maybe<Arbitrum_UsageMetricsHourlySnapshot>;
  Arbitrum_usageMetricsHourlySnapshots: Array<Arbitrum_UsageMetricsHourlySnapshot>;
  Arbitrum_financialsDailySnapshot?: Maybe<Arbitrum_FinancialsDailySnapshot>;
  Arbitrum_financialsDailySnapshots: Array<Arbitrum_FinancialsDailySnapshot>;
  Arbitrum_liquidityPool?: Maybe<Arbitrum_LiquidityPool>;
  Arbitrum_liquidityPools: Array<Arbitrum_LiquidityPool>;
  Arbitrum_liquidityPoolDailySnapshot?: Maybe<Arbitrum_LiquidityPoolDailySnapshot>;
  Arbitrum_liquidityPoolDailySnapshots: Array<Arbitrum_LiquidityPoolDailySnapshot>;
  Arbitrum_liquidityPoolHourlySnapshot?: Maybe<Arbitrum_LiquidityPoolHourlySnapshot>;
  Arbitrum_liquidityPoolHourlySnapshots: Array<Arbitrum_LiquidityPoolHourlySnapshot>;
  Arbitrum_tick?: Maybe<Arbitrum_Tick>;
  Arbitrum_ticks: Array<Arbitrum_Tick>;
  Arbitrum_tickDailySnapshot?: Maybe<Arbitrum_TickDailySnapshot>;
  Arbitrum_tickDailySnapshots: Array<Arbitrum_TickDailySnapshot>;
  Arbitrum_tickHourlySnapshot?: Maybe<Arbitrum_TickHourlySnapshot>;
  Arbitrum_tickHourlySnapshots: Array<Arbitrum_TickHourlySnapshot>;
  Arbitrum_account?: Maybe<Arbitrum_Account>;
  Arbitrum_accounts: Array<Arbitrum_Account>;
  Arbitrum_position?: Maybe<Arbitrum_Position>;
  Arbitrum_positions: Array<Arbitrum_Position>;
  Arbitrum_positionSnapshot?: Maybe<Arbitrum_PositionSnapshot>;
  Arbitrum_positionSnapshots: Array<Arbitrum_PositionSnapshot>;
  Arbitrum_deposit?: Maybe<Arbitrum_Deposit>;
  Arbitrum_deposits: Array<Arbitrum_Deposit>;
  Arbitrum_withdraw?: Maybe<Arbitrum_Withdraw>;
  Arbitrum_withdraws: Array<Arbitrum_Withdraw>;
  Arbitrum_swap?: Maybe<Arbitrum_Swap>;
  Arbitrum_swaps: Array<Arbitrum_Swap>;
  Arbitrum_activeAccount?: Maybe<Arbitrum_ActiveAccount>;
  Arbitrum_activeAccounts: Array<Arbitrum_ActiveAccount>;
  Arbitrum_liquidityPoolAmount?: Maybe<Arbitrum__LiquidityPoolAmount>;
  Arbitrum_liquidityPoolAmounts: Array<Arbitrum__LiquidityPoolAmount>;
  Arbitrum_helperStore?: Maybe<Arbitrum__HelperStore>;
  Arbitrum_helperStores: Array<Arbitrum__HelperStore>;
  Arbitrum_tokenWhitelist?: Maybe<Arbitrum__TokenWhitelist>;
  Arbitrum_tokenWhitelists: Array<Arbitrum__TokenWhitelist>;
  Arbitrum_tokenWhitelistSymbol?: Maybe<Arbitrum__TokenWhitelistSymbol>;
  Arbitrum_tokenWhitelistSymbols: Array<Arbitrum__TokenWhitelistSymbol>;
  Arbitrum_protocol?: Maybe<Arbitrum_Protocol>;
  Arbitrum_protocols: Array<Arbitrum_Protocol>;
  /** Access to subgraph metadata */
  Arbitrum__meta?: Maybe<Arbitrum__Meta_>;
};


export type QueryArbitrum_tokenArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type QueryArbitrum_tokensArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrum_Token_orderBy>;
  orderDirection?: InputMaybe<Arbitrum_OrderDirection>;
  where?: InputMaybe<Arbitrum_Token_filter>;
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type QueryArbitrum_rewardTokenArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type QueryArbitrum_rewardTokensArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrum_RewardToken_orderBy>;
  orderDirection?: InputMaybe<Arbitrum_OrderDirection>;
  where?: InputMaybe<Arbitrum_RewardToken_filter>;
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type QueryArbitrum_liquidityPoolFeeArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type QueryArbitrum_liquidityPoolFeesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrum_LiquidityPoolFee_orderBy>;
  orderDirection?: InputMaybe<Arbitrum_OrderDirection>;
  where?: InputMaybe<Arbitrum_LiquidityPoolFee_filter>;
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type QueryArbitrum_dexAmmProtocolArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type QueryArbitrum_dexAmmProtocolsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrum_DexAmmProtocol_orderBy>;
  orderDirection?: InputMaybe<Arbitrum_OrderDirection>;
  where?: InputMaybe<Arbitrum_DexAmmProtocol_filter>;
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type QueryArbitrum_usageMetricsDailySnapshotArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type QueryArbitrum_usageMetricsDailySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrum_UsageMetricsDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<Arbitrum_OrderDirection>;
  where?: InputMaybe<Arbitrum_UsageMetricsDailySnapshot_filter>;
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type QueryArbitrum_usageMetricsHourlySnapshotArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type QueryArbitrum_usageMetricsHourlySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrum_UsageMetricsHourlySnapshot_orderBy>;
  orderDirection?: InputMaybe<Arbitrum_OrderDirection>;
  where?: InputMaybe<Arbitrum_UsageMetricsHourlySnapshot_filter>;
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type QueryArbitrum_financialsDailySnapshotArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type QueryArbitrum_financialsDailySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrum_FinancialsDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<Arbitrum_OrderDirection>;
  where?: InputMaybe<Arbitrum_FinancialsDailySnapshot_filter>;
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type QueryArbitrum_liquidityPoolArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type QueryArbitrum_liquidityPoolsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrum_LiquidityPool_orderBy>;
  orderDirection?: InputMaybe<Arbitrum_OrderDirection>;
  where?: InputMaybe<Arbitrum_LiquidityPool_filter>;
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type QueryArbitrum_liquidityPoolDailySnapshotArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type QueryArbitrum_liquidityPoolDailySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrum_LiquidityPoolDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<Arbitrum_OrderDirection>;
  where?: InputMaybe<Arbitrum_LiquidityPoolDailySnapshot_filter>;
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type QueryArbitrum_liquidityPoolHourlySnapshotArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type QueryArbitrum_liquidityPoolHourlySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrum_LiquidityPoolHourlySnapshot_orderBy>;
  orderDirection?: InputMaybe<Arbitrum_OrderDirection>;
  where?: InputMaybe<Arbitrum_LiquidityPoolHourlySnapshot_filter>;
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type QueryArbitrum_tickArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type QueryArbitrum_ticksArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrum_Tick_orderBy>;
  orderDirection?: InputMaybe<Arbitrum_OrderDirection>;
  where?: InputMaybe<Arbitrum_Tick_filter>;
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type QueryArbitrum_tickDailySnapshotArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type QueryArbitrum_tickDailySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrum_TickDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<Arbitrum_OrderDirection>;
  where?: InputMaybe<Arbitrum_TickDailySnapshot_filter>;
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type QueryArbitrum_tickHourlySnapshotArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type QueryArbitrum_tickHourlySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrum_TickHourlySnapshot_orderBy>;
  orderDirection?: InputMaybe<Arbitrum_OrderDirection>;
  where?: InputMaybe<Arbitrum_TickHourlySnapshot_filter>;
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type QueryArbitrum_accountArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type QueryArbitrum_accountsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrum_Account_orderBy>;
  orderDirection?: InputMaybe<Arbitrum_OrderDirection>;
  where?: InputMaybe<Arbitrum_Account_filter>;
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type QueryArbitrum_positionArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type QueryArbitrum_positionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrum_Position_orderBy>;
  orderDirection?: InputMaybe<Arbitrum_OrderDirection>;
  where?: InputMaybe<Arbitrum_Position_filter>;
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type QueryArbitrum_positionSnapshotArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type QueryArbitrum_positionSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrum_PositionSnapshot_orderBy>;
  orderDirection?: InputMaybe<Arbitrum_OrderDirection>;
  where?: InputMaybe<Arbitrum_PositionSnapshot_filter>;
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type QueryArbitrum_depositArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type QueryArbitrum_depositsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrum_Deposit_orderBy>;
  orderDirection?: InputMaybe<Arbitrum_OrderDirection>;
  where?: InputMaybe<Arbitrum_Deposit_filter>;
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type QueryArbitrum_withdrawArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type QueryArbitrum_withdrawsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrum_Withdraw_orderBy>;
  orderDirection?: InputMaybe<Arbitrum_OrderDirection>;
  where?: InputMaybe<Arbitrum_Withdraw_filter>;
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type QueryArbitrum_swapArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type QueryArbitrum_swapsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrum_Swap_orderBy>;
  orderDirection?: InputMaybe<Arbitrum_OrderDirection>;
  where?: InputMaybe<Arbitrum_Swap_filter>;
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type QueryArbitrum_activeAccountArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type QueryArbitrum_activeAccountsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrum_ActiveAccount_orderBy>;
  orderDirection?: InputMaybe<Arbitrum_OrderDirection>;
  where?: InputMaybe<Arbitrum_ActiveAccount_filter>;
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type QueryArbitrum_liquidityPoolAmountArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type QueryArbitrum_liquidityPoolAmountsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrum__LiquidityPoolAmount_orderBy>;
  orderDirection?: InputMaybe<Arbitrum_OrderDirection>;
  where?: InputMaybe<Arbitrum__LiquidityPoolAmount_filter>;
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type QueryArbitrum_helperStoreArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type QueryArbitrum_helperStoresArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrum__HelperStore_orderBy>;
  orderDirection?: InputMaybe<Arbitrum_OrderDirection>;
  where?: InputMaybe<Arbitrum__HelperStore_filter>;
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type QueryArbitrum_tokenWhitelistArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type QueryArbitrum_tokenWhitelistsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrum__TokenWhitelist_orderBy>;
  orderDirection?: InputMaybe<Arbitrum_OrderDirection>;
  where?: InputMaybe<Arbitrum__TokenWhitelist_filter>;
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type QueryArbitrum_tokenWhitelistSymbolArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type QueryArbitrum_tokenWhitelistSymbolsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrum__TokenWhitelistSymbol_orderBy>;
  orderDirection?: InputMaybe<Arbitrum_OrderDirection>;
  where?: InputMaybe<Arbitrum__TokenWhitelistSymbol_filter>;
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type QueryArbitrum_protocolArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type QueryArbitrum_protocolsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrum_Protocol_orderBy>;
  orderDirection?: InputMaybe<Arbitrum_OrderDirection>;
  where?: InputMaybe<Arbitrum_Protocol_filter>;
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type QueryArbitrum__metaArgs = {
  block?: InputMaybe<Arbitrum_Block_height>;
};

export type Arbitrum_RewardToken = {
  /**  { Reward token type }-{ Smart contract address of the reward token }  */
  id: Scalars['Arbitrum_Bytes']['output'];
  /**  Reference to the actual token  */
  token: Arbitrum_Token;
  /**  The type of the reward token  */
  type: Arbitrum_RewardTokenType;
};

export type Arbitrum_RewardTokenType =
  /**  For reward tokens awarded to LPs/lenders  */
  | 'DEPOSIT'
  /**  For reward tokens awarded to borrowers  */
  | 'BORROW';

export type Arbitrum_RewardToken_filter = {
  id?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Arbitrum_Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Arbitrum_Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<Arbitrum_Token_filter>;
  type?: InputMaybe<Arbitrum_RewardTokenType>;
  type_not?: InputMaybe<Arbitrum_RewardTokenType>;
  type_in?: InputMaybe<Array<Arbitrum_RewardTokenType>>;
  type_not_in?: InputMaybe<Array<Arbitrum_RewardTokenType>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Arbitrum_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arbitrum_RewardToken_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arbitrum_RewardToken_filter>>>;
};

export type Arbitrum_RewardToken_orderBy =
  | 'id'
  | 'token'
  | 'token__id'
  | 'token__name'
  | 'token__symbol'
  | 'token__decimals'
  | 'token__lastPriceUSD'
  | 'token__lastPriceBlockNumber'
  | 'token___lastPricePool'
  | 'token___totalSupply'
  | 'token___totalValueLockedUSD'
  | 'token___largePriceChangeBuffer'
  | 'token___largeTVLImpactBuffer'
  | 'type';

export type Subscription = {
  Arbitrum_token?: Maybe<Arbitrum_Token>;
  Arbitrum_tokens: Array<Arbitrum_Token>;
  Arbitrum_rewardToken?: Maybe<Arbitrum_RewardToken>;
  Arbitrum_rewardTokens: Array<Arbitrum_RewardToken>;
  Arbitrum_liquidityPoolFee?: Maybe<Arbitrum_LiquidityPoolFee>;
  Arbitrum_liquidityPoolFees: Array<Arbitrum_LiquidityPoolFee>;
  Arbitrum_dexAmmProtocol?: Maybe<Arbitrum_DexAmmProtocol>;
  Arbitrum_dexAmmProtocols: Array<Arbitrum_DexAmmProtocol>;
  Arbitrum_usageMetricsDailySnapshot?: Maybe<Arbitrum_UsageMetricsDailySnapshot>;
  Arbitrum_usageMetricsDailySnapshots: Array<Arbitrum_UsageMetricsDailySnapshot>;
  Arbitrum_usageMetricsHourlySnapshot?: Maybe<Arbitrum_UsageMetricsHourlySnapshot>;
  Arbitrum_usageMetricsHourlySnapshots: Array<Arbitrum_UsageMetricsHourlySnapshot>;
  Arbitrum_financialsDailySnapshot?: Maybe<Arbitrum_FinancialsDailySnapshot>;
  Arbitrum_financialsDailySnapshots: Array<Arbitrum_FinancialsDailySnapshot>;
  Arbitrum_liquidityPool?: Maybe<Arbitrum_LiquidityPool>;
  Arbitrum_liquidityPools: Array<Arbitrum_LiquidityPool>;
  Arbitrum_liquidityPoolDailySnapshot?: Maybe<Arbitrum_LiquidityPoolDailySnapshot>;
  Arbitrum_liquidityPoolDailySnapshots: Array<Arbitrum_LiquidityPoolDailySnapshot>;
  Arbitrum_liquidityPoolHourlySnapshot?: Maybe<Arbitrum_LiquidityPoolHourlySnapshot>;
  Arbitrum_liquidityPoolHourlySnapshots: Array<Arbitrum_LiquidityPoolHourlySnapshot>;
  Arbitrum_tick?: Maybe<Arbitrum_Tick>;
  Arbitrum_ticks: Array<Arbitrum_Tick>;
  Arbitrum_tickDailySnapshot?: Maybe<Arbitrum_TickDailySnapshot>;
  Arbitrum_tickDailySnapshots: Array<Arbitrum_TickDailySnapshot>;
  Arbitrum_tickHourlySnapshot?: Maybe<Arbitrum_TickHourlySnapshot>;
  Arbitrum_tickHourlySnapshots: Array<Arbitrum_TickHourlySnapshot>;
  Arbitrum_account?: Maybe<Arbitrum_Account>;
  Arbitrum_accounts: Array<Arbitrum_Account>;
  Arbitrum_position?: Maybe<Arbitrum_Position>;
  Arbitrum_positions: Array<Arbitrum_Position>;
  Arbitrum_positionSnapshot?: Maybe<Arbitrum_PositionSnapshot>;
  Arbitrum_positionSnapshots: Array<Arbitrum_PositionSnapshot>;
  Arbitrum_deposit?: Maybe<Arbitrum_Deposit>;
  Arbitrum_deposits: Array<Arbitrum_Deposit>;
  Arbitrum_withdraw?: Maybe<Arbitrum_Withdraw>;
  Arbitrum_withdraws: Array<Arbitrum_Withdraw>;
  Arbitrum_swap?: Maybe<Arbitrum_Swap>;
  Arbitrum_swaps: Array<Arbitrum_Swap>;
  Arbitrum_activeAccount?: Maybe<Arbitrum_ActiveAccount>;
  Arbitrum_activeAccounts: Array<Arbitrum_ActiveAccount>;
  Arbitrum_liquidityPoolAmount?: Maybe<Arbitrum__LiquidityPoolAmount>;
  Arbitrum_liquidityPoolAmounts: Array<Arbitrum__LiquidityPoolAmount>;
  Arbitrum_helperStore?: Maybe<Arbitrum__HelperStore>;
  Arbitrum_helperStores: Array<Arbitrum__HelperStore>;
  Arbitrum_tokenWhitelist?: Maybe<Arbitrum__TokenWhitelist>;
  Arbitrum_tokenWhitelists: Array<Arbitrum__TokenWhitelist>;
  Arbitrum_tokenWhitelistSymbol?: Maybe<Arbitrum__TokenWhitelistSymbol>;
  Arbitrum_tokenWhitelistSymbols: Array<Arbitrum__TokenWhitelistSymbol>;
  Arbitrum_protocol?: Maybe<Arbitrum_Protocol>;
  Arbitrum_protocols: Array<Arbitrum_Protocol>;
  /** Access to subgraph metadata */
  Arbitrum__meta?: Maybe<Arbitrum__Meta_>;
};


export type SubscriptionArbitrum_tokenArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type SubscriptionArbitrum_tokensArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrum_Token_orderBy>;
  orderDirection?: InputMaybe<Arbitrum_OrderDirection>;
  where?: InputMaybe<Arbitrum_Token_filter>;
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type SubscriptionArbitrum_rewardTokenArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type SubscriptionArbitrum_rewardTokensArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrum_RewardToken_orderBy>;
  orderDirection?: InputMaybe<Arbitrum_OrderDirection>;
  where?: InputMaybe<Arbitrum_RewardToken_filter>;
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type SubscriptionArbitrum_liquidityPoolFeeArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type SubscriptionArbitrum_liquidityPoolFeesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrum_LiquidityPoolFee_orderBy>;
  orderDirection?: InputMaybe<Arbitrum_OrderDirection>;
  where?: InputMaybe<Arbitrum_LiquidityPoolFee_filter>;
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type SubscriptionArbitrum_dexAmmProtocolArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type SubscriptionArbitrum_dexAmmProtocolsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrum_DexAmmProtocol_orderBy>;
  orderDirection?: InputMaybe<Arbitrum_OrderDirection>;
  where?: InputMaybe<Arbitrum_DexAmmProtocol_filter>;
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type SubscriptionArbitrum_usageMetricsDailySnapshotArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type SubscriptionArbitrum_usageMetricsDailySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrum_UsageMetricsDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<Arbitrum_OrderDirection>;
  where?: InputMaybe<Arbitrum_UsageMetricsDailySnapshot_filter>;
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type SubscriptionArbitrum_usageMetricsHourlySnapshotArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type SubscriptionArbitrum_usageMetricsHourlySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrum_UsageMetricsHourlySnapshot_orderBy>;
  orderDirection?: InputMaybe<Arbitrum_OrderDirection>;
  where?: InputMaybe<Arbitrum_UsageMetricsHourlySnapshot_filter>;
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type SubscriptionArbitrum_financialsDailySnapshotArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type SubscriptionArbitrum_financialsDailySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrum_FinancialsDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<Arbitrum_OrderDirection>;
  where?: InputMaybe<Arbitrum_FinancialsDailySnapshot_filter>;
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type SubscriptionArbitrum_liquidityPoolArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type SubscriptionArbitrum_liquidityPoolsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrum_LiquidityPool_orderBy>;
  orderDirection?: InputMaybe<Arbitrum_OrderDirection>;
  where?: InputMaybe<Arbitrum_LiquidityPool_filter>;
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type SubscriptionArbitrum_liquidityPoolDailySnapshotArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type SubscriptionArbitrum_liquidityPoolDailySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrum_LiquidityPoolDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<Arbitrum_OrderDirection>;
  where?: InputMaybe<Arbitrum_LiquidityPoolDailySnapshot_filter>;
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type SubscriptionArbitrum_liquidityPoolHourlySnapshotArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type SubscriptionArbitrum_liquidityPoolHourlySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrum_LiquidityPoolHourlySnapshot_orderBy>;
  orderDirection?: InputMaybe<Arbitrum_OrderDirection>;
  where?: InputMaybe<Arbitrum_LiquidityPoolHourlySnapshot_filter>;
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type SubscriptionArbitrum_tickArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type SubscriptionArbitrum_ticksArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrum_Tick_orderBy>;
  orderDirection?: InputMaybe<Arbitrum_OrderDirection>;
  where?: InputMaybe<Arbitrum_Tick_filter>;
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type SubscriptionArbitrum_tickDailySnapshotArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type SubscriptionArbitrum_tickDailySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrum_TickDailySnapshot_orderBy>;
  orderDirection?: InputMaybe<Arbitrum_OrderDirection>;
  where?: InputMaybe<Arbitrum_TickDailySnapshot_filter>;
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type SubscriptionArbitrum_tickHourlySnapshotArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type SubscriptionArbitrum_tickHourlySnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrum_TickHourlySnapshot_orderBy>;
  orderDirection?: InputMaybe<Arbitrum_OrderDirection>;
  where?: InputMaybe<Arbitrum_TickHourlySnapshot_filter>;
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type SubscriptionArbitrum_accountArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type SubscriptionArbitrum_accountsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrum_Account_orderBy>;
  orderDirection?: InputMaybe<Arbitrum_OrderDirection>;
  where?: InputMaybe<Arbitrum_Account_filter>;
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type SubscriptionArbitrum_positionArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type SubscriptionArbitrum_positionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrum_Position_orderBy>;
  orderDirection?: InputMaybe<Arbitrum_OrderDirection>;
  where?: InputMaybe<Arbitrum_Position_filter>;
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type SubscriptionArbitrum_positionSnapshotArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type SubscriptionArbitrum_positionSnapshotsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrum_PositionSnapshot_orderBy>;
  orderDirection?: InputMaybe<Arbitrum_OrderDirection>;
  where?: InputMaybe<Arbitrum_PositionSnapshot_filter>;
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type SubscriptionArbitrum_depositArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type SubscriptionArbitrum_depositsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrum_Deposit_orderBy>;
  orderDirection?: InputMaybe<Arbitrum_OrderDirection>;
  where?: InputMaybe<Arbitrum_Deposit_filter>;
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type SubscriptionArbitrum_withdrawArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type SubscriptionArbitrum_withdrawsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrum_Withdraw_orderBy>;
  orderDirection?: InputMaybe<Arbitrum_OrderDirection>;
  where?: InputMaybe<Arbitrum_Withdraw_filter>;
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type SubscriptionArbitrum_swapArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type SubscriptionArbitrum_swapsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrum_Swap_orderBy>;
  orderDirection?: InputMaybe<Arbitrum_OrderDirection>;
  where?: InputMaybe<Arbitrum_Swap_filter>;
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type SubscriptionArbitrum_activeAccountArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type SubscriptionArbitrum_activeAccountsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrum_ActiveAccount_orderBy>;
  orderDirection?: InputMaybe<Arbitrum_OrderDirection>;
  where?: InputMaybe<Arbitrum_ActiveAccount_filter>;
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type SubscriptionArbitrum_liquidityPoolAmountArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type SubscriptionArbitrum_liquidityPoolAmountsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrum__LiquidityPoolAmount_orderBy>;
  orderDirection?: InputMaybe<Arbitrum_OrderDirection>;
  where?: InputMaybe<Arbitrum__LiquidityPoolAmount_filter>;
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type SubscriptionArbitrum_helperStoreArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type SubscriptionArbitrum_helperStoresArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrum__HelperStore_orderBy>;
  orderDirection?: InputMaybe<Arbitrum_OrderDirection>;
  where?: InputMaybe<Arbitrum__HelperStore_filter>;
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type SubscriptionArbitrum_tokenWhitelistArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type SubscriptionArbitrum_tokenWhitelistsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrum__TokenWhitelist_orderBy>;
  orderDirection?: InputMaybe<Arbitrum_OrderDirection>;
  where?: InputMaybe<Arbitrum__TokenWhitelist_filter>;
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type SubscriptionArbitrum_tokenWhitelistSymbolArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type SubscriptionArbitrum_tokenWhitelistSymbolsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrum__TokenWhitelistSymbol_orderBy>;
  orderDirection?: InputMaybe<Arbitrum_OrderDirection>;
  where?: InputMaybe<Arbitrum__TokenWhitelistSymbol_filter>;
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type SubscriptionArbitrum_protocolArgs = {
  id: Scalars['ID']['input'];
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type SubscriptionArbitrum_protocolsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrum_Protocol_orderBy>;
  orderDirection?: InputMaybe<Arbitrum_OrderDirection>;
  where?: InputMaybe<Arbitrum_Protocol_filter>;
  block?: InputMaybe<Arbitrum_Block_height>;
  subgraphError?: Arbitrum__SubgraphErrorPolicy_;
};


export type SubscriptionArbitrum__metaArgs = {
  block?: InputMaybe<Arbitrum_Block_height>;
};

export type Arbitrum_Swap = {
  /**  { Transaction hash }-{ Log index }  */
  id: Scalars['Arbitrum_Bytes']['output'];
  /**  Transaction hash of the transaction that emitted this event  */
  hash: Scalars['Arbitrum_Bytes']['output'];
  /**  Nonce of the transaction that emitted this event  */
  nonce: Scalars['BigInt']['output'];
  /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
  logIndex: Scalars['Int']['output'];
  /**  Gas limit of the transaction that emitted this event  */
  gasLimit?: Maybe<Scalars['BigInt']['output']>;
  /**  Gas used in this transaction. (Optional because not every chain will support this)  */
  gasUsed?: Maybe<Scalars['BigInt']['output']>;
  /**  Gas price of the transaction that emitted this event  */
  gasPrice?: Maybe<Scalars['BigInt']['output']>;
  /**  The protocol this transaction belongs to  */
  protocol: Arbitrum_DexAmmProtocol;
  /**  Account that emitted this event  */
  account: Arbitrum_Account;
  /**  The pool involving this event  */
  pool: Arbitrum_LiquidityPool;
  /**  Block number of this event  */
  blockNumber: Scalars['BigInt']['output'];
  /**  Timestamp of this event  */
  timestamp: Scalars['BigInt']['output'];
  /**  the tick after the swap  */
  tick?: Maybe<Scalars['BigInt']['output']>;
  /**  Token deposited into pool  */
  tokenIn: Arbitrum_Token;
  /**  Amount of token deposited into pool in native units  */
  amountIn: Scalars['BigInt']['output'];
  /**  Amount of token deposited into pool in USD  */
  amountInUSD: Scalars['Arbitrum_BigDecimal']['output'];
  /**  Token withdrawn from pool  */
  tokenOut: Arbitrum_Token;
  /**  Amount of token withdrawn from pool in native units  */
  amountOut: Scalars['BigInt']['output'];
  /**  Amount of token withdrawn from pool in USD  */
  amountOutUSD: Scalars['Arbitrum_BigDecimal']['output'];
  /**  Amount of input tokens in the liquidity pool  */
  reserveAmounts?: Maybe<Array<Scalars['BigInt']['output']>>;
};

export type Arbitrum_Swap_filter = {
  id?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Arbitrum_Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Arbitrum_Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  hash?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  hash_not?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  hash_gt?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  hash_lt?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  hash_gte?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  hash_lte?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  hash_in?: InputMaybe<Array<Scalars['Arbitrum_Bytes']['input']>>;
  hash_not_in?: InputMaybe<Array<Scalars['Arbitrum_Bytes']['input']>>;
  hash_contains?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  hash_not_contains?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  nonce?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_not?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_gt?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_lt?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_gte?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_lte?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  nonce_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex?: InputMaybe<Scalars['Int']['input']>;
  logIndex_not?: InputMaybe<Scalars['Int']['input']>;
  logIndex_gt?: InputMaybe<Scalars['Int']['input']>;
  logIndex_lt?: InputMaybe<Scalars['Int']['input']>;
  logIndex_gte?: InputMaybe<Scalars['Int']['input']>;
  logIndex_lte?: InputMaybe<Scalars['Int']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  gasLimit?: InputMaybe<Scalars['BigInt']['input']>;
  gasLimit_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasLimit_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasLimit_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasLimit_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasLimit_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasLimit_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasLimit_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  protocol?: InputMaybe<Scalars['String']['input']>;
  protocol_not?: InputMaybe<Scalars['String']['input']>;
  protocol_gt?: InputMaybe<Scalars['String']['input']>;
  protocol_lt?: InputMaybe<Scalars['String']['input']>;
  protocol_gte?: InputMaybe<Scalars['String']['input']>;
  protocol_lte?: InputMaybe<Scalars['String']['input']>;
  protocol_in?: InputMaybe<Array<Scalars['String']['input']>>;
  protocol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  protocol_contains?: InputMaybe<Scalars['String']['input']>;
  protocol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  protocol_not_contains?: InputMaybe<Scalars['String']['input']>;
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  protocol_starts_with?: InputMaybe<Scalars['String']['input']>;
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  protocol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  protocol_ends_with?: InputMaybe<Scalars['String']['input']>;
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  protocol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  protocol_?: InputMaybe<Arbitrum_DexAmmProtocol_filter>;
  account?: InputMaybe<Scalars['String']['input']>;
  account_not?: InputMaybe<Scalars['String']['input']>;
  account_gt?: InputMaybe<Scalars['String']['input']>;
  account_lt?: InputMaybe<Scalars['String']['input']>;
  account_gte?: InputMaybe<Scalars['String']['input']>;
  account_lte?: InputMaybe<Scalars['String']['input']>;
  account_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_contains?: InputMaybe<Scalars['String']['input']>;
  account_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_contains?: InputMaybe<Scalars['String']['input']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_?: InputMaybe<Arbitrum_Account_filter>;
  pool?: InputMaybe<Scalars['String']['input']>;
  pool_not?: InputMaybe<Scalars['String']['input']>;
  pool_gt?: InputMaybe<Scalars['String']['input']>;
  pool_lt?: InputMaybe<Scalars['String']['input']>;
  pool_gte?: InputMaybe<Scalars['String']['input']>;
  pool_lte?: InputMaybe<Scalars['String']['input']>;
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_contains?: InputMaybe<Scalars['String']['input']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_?: InputMaybe<Arbitrum_LiquidityPool_filter>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tick?: InputMaybe<Scalars['BigInt']['input']>;
  tick_not?: InputMaybe<Scalars['BigInt']['input']>;
  tick_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tick_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tick_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tick_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tick_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tick_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenIn?: InputMaybe<Scalars['String']['input']>;
  tokenIn_not?: InputMaybe<Scalars['String']['input']>;
  tokenIn_gt?: InputMaybe<Scalars['String']['input']>;
  tokenIn_lt?: InputMaybe<Scalars['String']['input']>;
  tokenIn_gte?: InputMaybe<Scalars['String']['input']>;
  tokenIn_lte?: InputMaybe<Scalars['String']['input']>;
  tokenIn_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenIn_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenIn_contains?: InputMaybe<Scalars['String']['input']>;
  tokenIn_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenIn_not_contains?: InputMaybe<Scalars['String']['input']>;
  tokenIn_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenIn_starts_with?: InputMaybe<Scalars['String']['input']>;
  tokenIn_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenIn_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tokenIn_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenIn_ends_with?: InputMaybe<Scalars['String']['input']>;
  tokenIn_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenIn_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tokenIn_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenIn_?: InputMaybe<Arbitrum_Token_filter>;
  amountIn?: InputMaybe<Scalars['BigInt']['input']>;
  amountIn_not?: InputMaybe<Scalars['BigInt']['input']>;
  amountIn_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amountIn_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amountIn_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amountIn_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amountIn_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amountIn_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amountInUSD?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  amountInUSD_not?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  amountInUSD_gt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  amountInUSD_lt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  amountInUSD_gte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  amountInUSD_lte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  amountInUSD_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  amountInUSD_not_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  tokenOut?: InputMaybe<Scalars['String']['input']>;
  tokenOut_not?: InputMaybe<Scalars['String']['input']>;
  tokenOut_gt?: InputMaybe<Scalars['String']['input']>;
  tokenOut_lt?: InputMaybe<Scalars['String']['input']>;
  tokenOut_gte?: InputMaybe<Scalars['String']['input']>;
  tokenOut_lte?: InputMaybe<Scalars['String']['input']>;
  tokenOut_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenOut_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenOut_contains?: InputMaybe<Scalars['String']['input']>;
  tokenOut_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenOut_not_contains?: InputMaybe<Scalars['String']['input']>;
  tokenOut_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenOut_starts_with?: InputMaybe<Scalars['String']['input']>;
  tokenOut_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenOut_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tokenOut_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenOut_ends_with?: InputMaybe<Scalars['String']['input']>;
  tokenOut_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenOut_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tokenOut_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenOut_?: InputMaybe<Arbitrum_Token_filter>;
  amountOut?: InputMaybe<Scalars['BigInt']['input']>;
  amountOut_not?: InputMaybe<Scalars['BigInt']['input']>;
  amountOut_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amountOut_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amountOut_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amountOut_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amountOut_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amountOut_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amountOutUSD?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  amountOutUSD_not?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  amountOutUSD_gt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  amountOutUSD_lt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  amountOutUSD_gte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  amountOutUSD_lte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  amountOutUSD_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  amountOutUSD_not_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  reserveAmounts?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  reserveAmounts_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  reserveAmounts_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  reserveAmounts_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  reserveAmounts_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  reserveAmounts_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Arbitrum_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arbitrum_Swap_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arbitrum_Swap_filter>>>;
};

export type Arbitrum_Swap_orderBy =
  | 'id'
  | 'hash'
  | 'nonce'
  | 'logIndex'
  | 'gasLimit'
  | 'gasUsed'
  | 'gasPrice'
  | 'protocol'
  | 'protocol__id'
  | 'protocol__name'
  | 'protocol__slug'
  | 'protocol__schemaVersion'
  | 'protocol__subgraphVersion'
  | 'protocol__methodologyVersion'
  | 'protocol__network'
  | 'protocol__type'
  | 'protocol__totalValueLockedUSD'
  | 'protocol__totalLiquidityUSD'
  | 'protocol__activeLiquidityUSD'
  | 'protocol__uncollectedProtocolSideValueUSD'
  | 'protocol__uncollectedSupplySideValueUSD'
  | 'protocol__protocolControlledValueUSD'
  | 'protocol__cumulativeVolumeUSD'
  | 'protocol__cumulativeSupplySideRevenueUSD'
  | 'protocol__cumulativeProtocolSideRevenueUSD'
  | 'protocol__cumulativeTotalRevenueUSD'
  | 'protocol__cumulativeUniqueUsers'
  | 'protocol__cumulativeUniqueLPs'
  | 'protocol__cumulativeUniqueTraders'
  | 'protocol__totalPoolCount'
  | 'protocol__openPositionCount'
  | 'protocol__cumulativePositionCount'
  | 'protocol__lastSnapshotDayID'
  | 'protocol__lastUpdateTimestamp'
  | 'protocol__lastUpdateBlockNumber'
  | 'protocol___regenesis'
  | 'account'
  | 'account__id'
  | 'account__positionCount'
  | 'account__openPositionCount'
  | 'account__closedPositionCount'
  | 'account__depositCount'
  | 'account__withdrawCount'
  | 'account__swapCount'
  | 'pool'
  | 'pool__id'
  | 'pool__name'
  | 'pool__symbol'
  | 'pool__liquidityTokenType'
  | 'pool__isSingleSided'
  | 'pool__createdTimestamp'
  | 'pool__createdBlockNumber'
  | 'pool__tick'
  | 'pool__totalValueLockedUSD'
  | 'pool__totalLiquidity'
  | 'pool__totalLiquidityUSD'
  | 'pool__activeLiquidity'
  | 'pool__activeLiquidityUSD'
  | 'pool__cumulativeSupplySideRevenueUSD'
  | 'pool__cumulativeProtocolSideRevenueUSD'
  | 'pool__cumulativeTotalRevenueUSD'
  | 'pool__cumulativeVolumeUSD'
  | 'pool__stakedOutputTokenAmount'
  | 'pool__cumulativeDepositCount'
  | 'pool__cumulativeWithdrawCount'
  | 'pool__cumulativeSwapCount'
  | 'pool__positionCount'
  | 'pool__openPositionCount'
  | 'pool__closedPositionCount'
  | 'pool__lastSnapshotDayID'
  | 'pool__lastSnapshotHourID'
  | 'pool__lastUpdateTimestamp'
  | 'pool__lastUpdateBlockNumber'
  | 'blockNumber'
  | 'timestamp'
  | 'tick'
  | 'tokenIn'
  | 'tokenIn__id'
  | 'tokenIn__name'
  | 'tokenIn__symbol'
  | 'tokenIn__decimals'
  | 'tokenIn__lastPriceUSD'
  | 'tokenIn__lastPriceBlockNumber'
  | 'tokenIn___lastPricePool'
  | 'tokenIn___totalSupply'
  | 'tokenIn___totalValueLockedUSD'
  | 'tokenIn___largePriceChangeBuffer'
  | 'tokenIn___largeTVLImpactBuffer'
  | 'amountIn'
  | 'amountInUSD'
  | 'tokenOut'
  | 'tokenOut__id'
  | 'tokenOut__name'
  | 'tokenOut__symbol'
  | 'tokenOut__decimals'
  | 'tokenOut__lastPriceUSD'
  | 'tokenOut__lastPriceBlockNumber'
  | 'tokenOut___lastPricePool'
  | 'tokenOut___totalSupply'
  | 'tokenOut___totalValueLockedUSD'
  | 'tokenOut___largePriceChangeBuffer'
  | 'tokenOut___largeTVLImpactBuffer'
  | 'amountOut'
  | 'amountOutUSD'
  | 'reserveAmounts';

export type Arbitrum_Tick = {
  /**  { pool address }-{ tick index }  */
  id: Scalars['Arbitrum_Bytes']['output'];
  /**  tick index  */
  index: Scalars['BigInt']['output'];
  /**  Liquidity pool this tick belongs to  */
  pool: Arbitrum_LiquidityPool;
  /**  Creation timestamp  */
  createdTimestamp: Scalars['BigInt']['output'];
  /**  Creation block number  */
  createdBlockNumber: Scalars['BigInt']['output'];
  /**  calculated price of token0 of tick within this pool - constant  */
  prices: Array<Scalars['Arbitrum_BigDecimal']['output']>;
  /**  total liquidity pool has as tick lower or upper  */
  liquidityGross: Scalars['BigInt']['output'];
  /**  total liquidity in USD pool has as tick lower or upper  */
  liquidityGrossUSD: Scalars['Arbitrum_BigDecimal']['output'];
  /**  how much liquidity changes when tick crossed  */
  liquidityNet: Scalars['BigInt']['output'];
  /**  how much liquidity in USD changes when tick crossed  */
  liquidityNetUSD: Scalars['Arbitrum_BigDecimal']['output'];
  /**  Day ID of the most recent daily snapshot  */
  lastSnapshotDayID: Scalars['Int']['output'];
  /**  Hour ID of the most recent hourly snapshot  */
  lastSnapshotHourID: Scalars['Int']['output'];
  /**  Timestamp of the last time this entity was updated  */
  lastUpdateTimestamp: Scalars['BigInt']['output'];
  /**  Block number of the last time this entity was updated  */
  lastUpdateBlockNumber: Scalars['BigInt']['output'];
};

export type Arbitrum_TickDailySnapshot = {
  /**  { pool address }-{ tick index }-{ day ID }  */
  id: Scalars['Arbitrum_Bytes']['output'];
  /**  Number of days since Unix epoch time  */
  day: Scalars['Int']['output'];
  /**  tick index  */
  tick: Arbitrum_Tick;
  /**  liquidity pool this tick belongs to  */
  pool: Arbitrum_LiquidityPool;
  /**  total liquidity pool has as tick lower or upper  */
  liquidityGross: Scalars['BigInt']['output'];
  /**  total liquidity in USD pool has as tick lower or upper  */
  liquidityGrossUSD: Scalars['Arbitrum_BigDecimal']['output'];
  /**  how much liquidity changes when tick crossed  */
  liquidityNet: Scalars['BigInt']['output'];
  /**  how much liquidity in USD changes when tick crossed  */
  liquidityNetUSD: Scalars['Arbitrum_BigDecimal']['output'];
  /**  Timestamp of when this snapshot was taken/last modified (May be taken after interval has passed)  */
  timestamp: Scalars['BigInt']['output'];
  /**  Block number of when this snapshot was taken/last modified (May be taken after interval has passed)  */
  blockNumber: Scalars['BigInt']['output'];
};

export type Arbitrum_TickDailySnapshot_filter = {
  id?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Arbitrum_Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Arbitrum_Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  day?: InputMaybe<Scalars['Int']['input']>;
  day_not?: InputMaybe<Scalars['Int']['input']>;
  day_gt?: InputMaybe<Scalars['Int']['input']>;
  day_lt?: InputMaybe<Scalars['Int']['input']>;
  day_gte?: InputMaybe<Scalars['Int']['input']>;
  day_lte?: InputMaybe<Scalars['Int']['input']>;
  day_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  day_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  tick?: InputMaybe<Scalars['String']['input']>;
  tick_not?: InputMaybe<Scalars['String']['input']>;
  tick_gt?: InputMaybe<Scalars['String']['input']>;
  tick_lt?: InputMaybe<Scalars['String']['input']>;
  tick_gte?: InputMaybe<Scalars['String']['input']>;
  tick_lte?: InputMaybe<Scalars['String']['input']>;
  tick_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tick_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tick_contains?: InputMaybe<Scalars['String']['input']>;
  tick_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tick_not_contains?: InputMaybe<Scalars['String']['input']>;
  tick_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tick_starts_with?: InputMaybe<Scalars['String']['input']>;
  tick_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tick_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tick_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tick_ends_with?: InputMaybe<Scalars['String']['input']>;
  tick_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tick_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tick_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tick_?: InputMaybe<Arbitrum_Tick_filter>;
  pool?: InputMaybe<Scalars['String']['input']>;
  pool_not?: InputMaybe<Scalars['String']['input']>;
  pool_gt?: InputMaybe<Scalars['String']['input']>;
  pool_lt?: InputMaybe<Scalars['String']['input']>;
  pool_gte?: InputMaybe<Scalars['String']['input']>;
  pool_lte?: InputMaybe<Scalars['String']['input']>;
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_contains?: InputMaybe<Scalars['String']['input']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_?: InputMaybe<Arbitrum_LiquidityPool_filter>;
  liquidityGross?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityGross_not?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityGross_gt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityGross_lt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityGross_gte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityGross_lte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityGross_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidityGross_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidityGrossUSD?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  liquidityGrossUSD_not?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  liquidityGrossUSD_gt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  liquidityGrossUSD_lt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  liquidityGrossUSD_gte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  liquidityGrossUSD_lte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  liquidityGrossUSD_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  liquidityGrossUSD_not_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  liquidityNet?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityNet_not?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityNet_gt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityNet_lt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityNet_gte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityNet_lte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityNet_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidityNet_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidityNetUSD?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  liquidityNetUSD_not?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  liquidityNetUSD_gt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  liquidityNetUSD_lt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  liquidityNetUSD_gte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  liquidityNetUSD_lte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  liquidityNetUSD_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  liquidityNetUSD_not_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Arbitrum_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arbitrum_TickDailySnapshot_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arbitrum_TickDailySnapshot_filter>>>;
};

export type Arbitrum_TickDailySnapshot_orderBy =
  | 'id'
  | 'day'
  | 'tick'
  | 'tick__id'
  | 'tick__index'
  | 'tick__createdTimestamp'
  | 'tick__createdBlockNumber'
  | 'tick__liquidityGross'
  | 'tick__liquidityGrossUSD'
  | 'tick__liquidityNet'
  | 'tick__liquidityNetUSD'
  | 'tick__lastSnapshotDayID'
  | 'tick__lastSnapshotHourID'
  | 'tick__lastUpdateTimestamp'
  | 'tick__lastUpdateBlockNumber'
  | 'pool'
  | 'pool__id'
  | 'pool__name'
  | 'pool__symbol'
  | 'pool__liquidityTokenType'
  | 'pool__isSingleSided'
  | 'pool__createdTimestamp'
  | 'pool__createdBlockNumber'
  | 'pool__tick'
  | 'pool__totalValueLockedUSD'
  | 'pool__totalLiquidity'
  | 'pool__totalLiquidityUSD'
  | 'pool__activeLiquidity'
  | 'pool__activeLiquidityUSD'
  | 'pool__cumulativeSupplySideRevenueUSD'
  | 'pool__cumulativeProtocolSideRevenueUSD'
  | 'pool__cumulativeTotalRevenueUSD'
  | 'pool__cumulativeVolumeUSD'
  | 'pool__stakedOutputTokenAmount'
  | 'pool__cumulativeDepositCount'
  | 'pool__cumulativeWithdrawCount'
  | 'pool__cumulativeSwapCount'
  | 'pool__positionCount'
  | 'pool__openPositionCount'
  | 'pool__closedPositionCount'
  | 'pool__lastSnapshotDayID'
  | 'pool__lastSnapshotHourID'
  | 'pool__lastUpdateTimestamp'
  | 'pool__lastUpdateBlockNumber'
  | 'liquidityGross'
  | 'liquidityGrossUSD'
  | 'liquidityNet'
  | 'liquidityNetUSD'
  | 'timestamp'
  | 'blockNumber';

export type Arbitrum_TickHourlySnapshot = {
  /**  { pool address }-{ tick index }-{ hour ID }  */
  id: Scalars['Arbitrum_Bytes']['output'];
  /**  Number of hours since Unix epoch time  */
  hour: Scalars['Int']['output'];
  /**  tick index  */
  tick: Arbitrum_Tick;
  /**  liquidity pool this tick belongs to  */
  pool: Arbitrum_LiquidityPool;
  /**  total liquidity pool has as tick lower or upper  */
  liquidityGross: Scalars['BigInt']['output'];
  /**  total liquidity in USD pool has as tick lower or upper  */
  liquidityGrossUSD: Scalars['Arbitrum_BigDecimal']['output'];
  /**  how much liquidity changes when tick crossed  */
  liquidityNet: Scalars['BigInt']['output'];
  /**  how much liquidity in USD changes when tick crossed  */
  liquidityNetUSD: Scalars['Arbitrum_BigDecimal']['output'];
  /**  Timestamp of when this snapshot was taken/last modified (May be taken after interval has passed)  */
  timestamp: Scalars['BigInt']['output'];
  /**  Block number of when this snapshot was taken/last modified (May be taken after interval has passed)  */
  blockNumber: Scalars['BigInt']['output'];
};

export type Arbitrum_TickHourlySnapshot_filter = {
  id?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Arbitrum_Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Arbitrum_Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  hour?: InputMaybe<Scalars['Int']['input']>;
  hour_not?: InputMaybe<Scalars['Int']['input']>;
  hour_gt?: InputMaybe<Scalars['Int']['input']>;
  hour_lt?: InputMaybe<Scalars['Int']['input']>;
  hour_gte?: InputMaybe<Scalars['Int']['input']>;
  hour_lte?: InputMaybe<Scalars['Int']['input']>;
  hour_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  hour_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  tick?: InputMaybe<Scalars['String']['input']>;
  tick_not?: InputMaybe<Scalars['String']['input']>;
  tick_gt?: InputMaybe<Scalars['String']['input']>;
  tick_lt?: InputMaybe<Scalars['String']['input']>;
  tick_gte?: InputMaybe<Scalars['String']['input']>;
  tick_lte?: InputMaybe<Scalars['String']['input']>;
  tick_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tick_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tick_contains?: InputMaybe<Scalars['String']['input']>;
  tick_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tick_not_contains?: InputMaybe<Scalars['String']['input']>;
  tick_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tick_starts_with?: InputMaybe<Scalars['String']['input']>;
  tick_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tick_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tick_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tick_ends_with?: InputMaybe<Scalars['String']['input']>;
  tick_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tick_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tick_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tick_?: InputMaybe<Arbitrum_Tick_filter>;
  pool?: InputMaybe<Scalars['String']['input']>;
  pool_not?: InputMaybe<Scalars['String']['input']>;
  pool_gt?: InputMaybe<Scalars['String']['input']>;
  pool_lt?: InputMaybe<Scalars['String']['input']>;
  pool_gte?: InputMaybe<Scalars['String']['input']>;
  pool_lte?: InputMaybe<Scalars['String']['input']>;
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_contains?: InputMaybe<Scalars['String']['input']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_?: InputMaybe<Arbitrum_LiquidityPool_filter>;
  liquidityGross?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityGross_not?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityGross_gt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityGross_lt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityGross_gte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityGross_lte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityGross_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidityGross_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidityGrossUSD?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  liquidityGrossUSD_not?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  liquidityGrossUSD_gt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  liquidityGrossUSD_lt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  liquidityGrossUSD_gte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  liquidityGrossUSD_lte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  liquidityGrossUSD_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  liquidityGrossUSD_not_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  liquidityNet?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityNet_not?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityNet_gt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityNet_lt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityNet_gte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityNet_lte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityNet_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidityNet_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidityNetUSD?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  liquidityNetUSD_not?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  liquidityNetUSD_gt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  liquidityNetUSD_lt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  liquidityNetUSD_gte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  liquidityNetUSD_lte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  liquidityNetUSD_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  liquidityNetUSD_not_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Arbitrum_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arbitrum_TickHourlySnapshot_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arbitrum_TickHourlySnapshot_filter>>>;
};

export type Arbitrum_TickHourlySnapshot_orderBy =
  | 'id'
  | 'hour'
  | 'tick'
  | 'tick__id'
  | 'tick__index'
  | 'tick__createdTimestamp'
  | 'tick__createdBlockNumber'
  | 'tick__liquidityGross'
  | 'tick__liquidityGrossUSD'
  | 'tick__liquidityNet'
  | 'tick__liquidityNetUSD'
  | 'tick__lastSnapshotDayID'
  | 'tick__lastSnapshotHourID'
  | 'tick__lastUpdateTimestamp'
  | 'tick__lastUpdateBlockNumber'
  | 'pool'
  | 'pool__id'
  | 'pool__name'
  | 'pool__symbol'
  | 'pool__liquidityTokenType'
  | 'pool__isSingleSided'
  | 'pool__createdTimestamp'
  | 'pool__createdBlockNumber'
  | 'pool__tick'
  | 'pool__totalValueLockedUSD'
  | 'pool__totalLiquidity'
  | 'pool__totalLiquidityUSD'
  | 'pool__activeLiquidity'
  | 'pool__activeLiquidityUSD'
  | 'pool__cumulativeSupplySideRevenueUSD'
  | 'pool__cumulativeProtocolSideRevenueUSD'
  | 'pool__cumulativeTotalRevenueUSD'
  | 'pool__cumulativeVolumeUSD'
  | 'pool__stakedOutputTokenAmount'
  | 'pool__cumulativeDepositCount'
  | 'pool__cumulativeWithdrawCount'
  | 'pool__cumulativeSwapCount'
  | 'pool__positionCount'
  | 'pool__openPositionCount'
  | 'pool__closedPositionCount'
  | 'pool__lastSnapshotDayID'
  | 'pool__lastSnapshotHourID'
  | 'pool__lastUpdateTimestamp'
  | 'pool__lastUpdateBlockNumber'
  | 'liquidityGross'
  | 'liquidityGrossUSD'
  | 'liquidityNet'
  | 'liquidityNetUSD'
  | 'timestamp'
  | 'blockNumber';

export type Arbitrum_Tick_filter = {
  id?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Arbitrum_Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Arbitrum_Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  index?: InputMaybe<Scalars['BigInt']['input']>;
  index_not?: InputMaybe<Scalars['BigInt']['input']>;
  index_gt?: InputMaybe<Scalars['BigInt']['input']>;
  index_lt?: InputMaybe<Scalars['BigInt']['input']>;
  index_gte?: InputMaybe<Scalars['BigInt']['input']>;
  index_lte?: InputMaybe<Scalars['BigInt']['input']>;
  index_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  index_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  pool?: InputMaybe<Scalars['String']['input']>;
  pool_not?: InputMaybe<Scalars['String']['input']>;
  pool_gt?: InputMaybe<Scalars['String']['input']>;
  pool_lt?: InputMaybe<Scalars['String']['input']>;
  pool_gte?: InputMaybe<Scalars['String']['input']>;
  pool_lte?: InputMaybe<Scalars['String']['input']>;
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_contains?: InputMaybe<Scalars['String']['input']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_?: InputMaybe<Arbitrum_LiquidityPool_filter>;
  createdTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  createdTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  createdBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  prices?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  prices_not?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  prices_contains?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  prices_contains_nocase?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  prices_not_contains?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  prices_not_contains_nocase?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  liquidityGross?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityGross_not?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityGross_gt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityGross_lt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityGross_gte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityGross_lte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityGross_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidityGross_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidityGrossUSD?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  liquidityGrossUSD_not?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  liquidityGrossUSD_gt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  liquidityGrossUSD_lt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  liquidityGrossUSD_gte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  liquidityGrossUSD_lte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  liquidityGrossUSD_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  liquidityGrossUSD_not_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  liquidityNet?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityNet_not?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityNet_gt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityNet_lt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityNet_gte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityNet_lte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityNet_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidityNet_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidityNetUSD?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  liquidityNetUSD_not?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  liquidityNetUSD_gt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  liquidityNetUSD_lt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  liquidityNetUSD_gte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  liquidityNetUSD_lte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  liquidityNetUSD_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  liquidityNetUSD_not_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  lastSnapshotDayID?: InputMaybe<Scalars['Int']['input']>;
  lastSnapshotDayID_not?: InputMaybe<Scalars['Int']['input']>;
  lastSnapshotDayID_gt?: InputMaybe<Scalars['Int']['input']>;
  lastSnapshotDayID_lt?: InputMaybe<Scalars['Int']['input']>;
  lastSnapshotDayID_gte?: InputMaybe<Scalars['Int']['input']>;
  lastSnapshotDayID_lte?: InputMaybe<Scalars['Int']['input']>;
  lastSnapshotDayID_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lastSnapshotDayID_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lastSnapshotHourID?: InputMaybe<Scalars['Int']['input']>;
  lastSnapshotHourID_not?: InputMaybe<Scalars['Int']['input']>;
  lastSnapshotHourID_gt?: InputMaybe<Scalars['Int']['input']>;
  lastSnapshotHourID_lt?: InputMaybe<Scalars['Int']['input']>;
  lastSnapshotHourID_gte?: InputMaybe<Scalars['Int']['input']>;
  lastSnapshotHourID_lte?: InputMaybe<Scalars['Int']['input']>;
  lastSnapshotHourID_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lastSnapshotHourID_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lastUpdateTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdateTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdateTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdateTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdateTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdateTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdateTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastUpdateTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastUpdateBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdateBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdateBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdateBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdateBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdateBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdateBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastUpdateBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Arbitrum_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arbitrum_Tick_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arbitrum_Tick_filter>>>;
};

export type Arbitrum_Tick_orderBy =
  | 'id'
  | 'index'
  | 'pool'
  | 'pool__id'
  | 'pool__name'
  | 'pool__symbol'
  | 'pool__liquidityTokenType'
  | 'pool__isSingleSided'
  | 'pool__createdTimestamp'
  | 'pool__createdBlockNumber'
  | 'pool__tick'
  | 'pool__totalValueLockedUSD'
  | 'pool__totalLiquidity'
  | 'pool__totalLiquidityUSD'
  | 'pool__activeLiquidity'
  | 'pool__activeLiquidityUSD'
  | 'pool__cumulativeSupplySideRevenueUSD'
  | 'pool__cumulativeProtocolSideRevenueUSD'
  | 'pool__cumulativeTotalRevenueUSD'
  | 'pool__cumulativeVolumeUSD'
  | 'pool__stakedOutputTokenAmount'
  | 'pool__cumulativeDepositCount'
  | 'pool__cumulativeWithdrawCount'
  | 'pool__cumulativeSwapCount'
  | 'pool__positionCount'
  | 'pool__openPositionCount'
  | 'pool__closedPositionCount'
  | 'pool__lastSnapshotDayID'
  | 'pool__lastSnapshotHourID'
  | 'pool__lastUpdateTimestamp'
  | 'pool__lastUpdateBlockNumber'
  | 'createdTimestamp'
  | 'createdBlockNumber'
  | 'prices'
  | 'liquidityGross'
  | 'liquidityGrossUSD'
  | 'liquidityNet'
  | 'liquidityNetUSD'
  | 'lastSnapshotDayID'
  | 'lastSnapshotHourID'
  | 'lastUpdateTimestamp'
  | 'lastUpdateBlockNumber';

export type Arbitrum_Token = {
  /**  Smart contract address of the token  */
  id: Scalars['Arbitrum_Bytes']['output'];
  /**  Name of the token, mirrored from the smart contract  */
  name: Scalars['String']['output'];
  /**  Symbol of the token, mirrored from the smart contract  */
  symbol: Scalars['String']['output'];
  /**  The number of decimal places this token uses, default to 18  */
  decimals: Scalars['Int']['output'];
  /**  Optional field to track the price of a token, mostly for caching purposes  */
  lastPriceUSD?: Maybe<Scalars['Arbitrum_BigDecimal']['output']>;
  /**  Optional field to track the block number of the last token price  */
  lastPriceBlockNumber?: Maybe<Scalars['BigInt']['output']>;
  /**  last pool that gave this token a price  */
  _lastPricePool?: Maybe<Scalars['Arbitrum_Bytes']['output']>;
  /**  amount of tokens in the protocol  */
  _totalSupply: Scalars['BigInt']['output'];
  /**  Total value locked in the protocol  */
  _totalValueLockedUSD: Scalars['Arbitrum_BigDecimal']['output'];
  _largePriceChangeBuffer: Scalars['Int']['output'];
  _largeTVLImpactBuffer: Scalars['Int']['output'];
};

export type Arbitrum_TokenType =
  | 'MULTIPLE'
  | 'UNKNOWN'
  | 'ERC20'
  | 'ERC721'
  | 'ERC1155'
  | 'BEP20'
  | 'BEP721'
  | 'BEP1155';

export type Arbitrum_Token_filter = {
  id?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Arbitrum_Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Arbitrum_Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  symbol_not?: InputMaybe<Scalars['String']['input']>;
  symbol_gt?: InputMaybe<Scalars['String']['input']>;
  symbol_lt?: InputMaybe<Scalars['String']['input']>;
  symbol_gte?: InputMaybe<Scalars['String']['input']>;
  symbol_lte?: InputMaybe<Scalars['String']['input']>;
  symbol_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  decimals?: InputMaybe<Scalars['Int']['input']>;
  decimals_not?: InputMaybe<Scalars['Int']['input']>;
  decimals_gt?: InputMaybe<Scalars['Int']['input']>;
  decimals_lt?: InputMaybe<Scalars['Int']['input']>;
  decimals_gte?: InputMaybe<Scalars['Int']['input']>;
  decimals_lte?: InputMaybe<Scalars['Int']['input']>;
  decimals_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  decimals_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lastPriceUSD?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  lastPriceUSD_not?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  lastPriceUSD_gt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  lastPriceUSD_lt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  lastPriceUSD_gte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  lastPriceUSD_lte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  lastPriceUSD_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  lastPriceUSD_not_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  lastPriceBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  lastPriceBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  lastPriceBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastPriceBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastPriceBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastPriceBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastPriceBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastPriceBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  _lastPricePool?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  _lastPricePool_not?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  _lastPricePool_gt?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  _lastPricePool_lt?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  _lastPricePool_gte?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  _lastPricePool_lte?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  _lastPricePool_in?: InputMaybe<Array<Scalars['Arbitrum_Bytes']['input']>>;
  _lastPricePool_not_in?: InputMaybe<Array<Scalars['Arbitrum_Bytes']['input']>>;
  _lastPricePool_contains?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  _lastPricePool_not_contains?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  _totalSupply?: InputMaybe<Scalars['BigInt']['input']>;
  _totalSupply_not?: InputMaybe<Scalars['BigInt']['input']>;
  _totalSupply_gt?: InputMaybe<Scalars['BigInt']['input']>;
  _totalSupply_lt?: InputMaybe<Scalars['BigInt']['input']>;
  _totalSupply_gte?: InputMaybe<Scalars['BigInt']['input']>;
  _totalSupply_lte?: InputMaybe<Scalars['BigInt']['input']>;
  _totalSupply_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  _totalSupply_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  _totalValueLockedUSD?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  _totalValueLockedUSD_not?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  _totalValueLockedUSD_gt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  _totalValueLockedUSD_lt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  _totalValueLockedUSD_gte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  _totalValueLockedUSD_lte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  _totalValueLockedUSD_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  _totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  _largePriceChangeBuffer?: InputMaybe<Scalars['Int']['input']>;
  _largePriceChangeBuffer_not?: InputMaybe<Scalars['Int']['input']>;
  _largePriceChangeBuffer_gt?: InputMaybe<Scalars['Int']['input']>;
  _largePriceChangeBuffer_lt?: InputMaybe<Scalars['Int']['input']>;
  _largePriceChangeBuffer_gte?: InputMaybe<Scalars['Int']['input']>;
  _largePriceChangeBuffer_lte?: InputMaybe<Scalars['Int']['input']>;
  _largePriceChangeBuffer_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _largePriceChangeBuffer_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _largeTVLImpactBuffer?: InputMaybe<Scalars['Int']['input']>;
  _largeTVLImpactBuffer_not?: InputMaybe<Scalars['Int']['input']>;
  _largeTVLImpactBuffer_gt?: InputMaybe<Scalars['Int']['input']>;
  _largeTVLImpactBuffer_lt?: InputMaybe<Scalars['Int']['input']>;
  _largeTVLImpactBuffer_gte?: InputMaybe<Scalars['Int']['input']>;
  _largeTVLImpactBuffer_lte?: InputMaybe<Scalars['Int']['input']>;
  _largeTVLImpactBuffer_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _largeTVLImpactBuffer_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Arbitrum_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arbitrum_Token_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arbitrum_Token_filter>>>;
};

export type Arbitrum_Token_orderBy =
  | 'id'
  | 'name'
  | 'symbol'
  | 'decimals'
  | 'lastPriceUSD'
  | 'lastPriceBlockNumber'
  | '_lastPricePool'
  | '_totalSupply'
  | '_totalValueLockedUSD'
  | '_largePriceChangeBuffer'
  | '_largeTVLImpactBuffer';

export type Arbitrum_UsageMetricsDailySnapshot = {
  /**  ID is # of days since Unix epoch time  */
  id: Scalars['Arbitrum_Bytes']['output'];
  /**  Number of days since Unix epoch time  */
  day: Scalars['Int']['output'];
  /**  Protocol this snapshot is associated with  */
  protocol: Arbitrum_DexAmmProtocol;
  /**  Number of unique daily active users  */
  dailyActiveUsers: Scalars['Int']['output'];
  /**  Number of cumulative unique users  */
  cumulativeUniqueUsers: Scalars['Int']['output'];
  /**  Total number of transactions occurred in a day. Transactions include all entities that implement the Event interface.  */
  dailyTransactionCount: Scalars['Int']['output'];
  /**  Total number of pools  */
  totalPoolCount: Scalars['Int']['output'];
  /**  Total number of deposits (add liquidity) in an day  */
  dailyDepositCount: Scalars['Int']['output'];
  /**  Total number of withdrawals (remove liquidity) in an day  */
  dailyWithdrawCount: Scalars['Int']['output'];
  /**  Total number of trades (swaps) in an day  */
  dailySwapCount: Scalars['Int']['output'];
  /**  Timestamp of when this snapshot was taken/last modified (May be taken after interval has passed)  */
  timestamp: Scalars['BigInt']['output'];
  /**  Block number of when this snapshot was taken/last modified (May be taken after interval has passed)  */
  blockNumber: Scalars['BigInt']['output'];
};

export type Arbitrum_UsageMetricsDailySnapshot_filter = {
  id?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Arbitrum_Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Arbitrum_Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  day?: InputMaybe<Scalars['Int']['input']>;
  day_not?: InputMaybe<Scalars['Int']['input']>;
  day_gt?: InputMaybe<Scalars['Int']['input']>;
  day_lt?: InputMaybe<Scalars['Int']['input']>;
  day_gte?: InputMaybe<Scalars['Int']['input']>;
  day_lte?: InputMaybe<Scalars['Int']['input']>;
  day_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  day_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  protocol?: InputMaybe<Scalars['String']['input']>;
  protocol_not?: InputMaybe<Scalars['String']['input']>;
  protocol_gt?: InputMaybe<Scalars['String']['input']>;
  protocol_lt?: InputMaybe<Scalars['String']['input']>;
  protocol_gte?: InputMaybe<Scalars['String']['input']>;
  protocol_lte?: InputMaybe<Scalars['String']['input']>;
  protocol_in?: InputMaybe<Array<Scalars['String']['input']>>;
  protocol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  protocol_contains?: InputMaybe<Scalars['String']['input']>;
  protocol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  protocol_not_contains?: InputMaybe<Scalars['String']['input']>;
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  protocol_starts_with?: InputMaybe<Scalars['String']['input']>;
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  protocol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  protocol_ends_with?: InputMaybe<Scalars['String']['input']>;
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  protocol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  protocol_?: InputMaybe<Arbitrum_DexAmmProtocol_filter>;
  dailyActiveUsers?: InputMaybe<Scalars['Int']['input']>;
  dailyActiveUsers_not?: InputMaybe<Scalars['Int']['input']>;
  dailyActiveUsers_gt?: InputMaybe<Scalars['Int']['input']>;
  dailyActiveUsers_lt?: InputMaybe<Scalars['Int']['input']>;
  dailyActiveUsers_gte?: InputMaybe<Scalars['Int']['input']>;
  dailyActiveUsers_lte?: InputMaybe<Scalars['Int']['input']>;
  dailyActiveUsers_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  dailyActiveUsers_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  cumulativeUniqueUsers?: InputMaybe<Scalars['Int']['input']>;
  cumulativeUniqueUsers_not?: InputMaybe<Scalars['Int']['input']>;
  cumulativeUniqueUsers_gt?: InputMaybe<Scalars['Int']['input']>;
  cumulativeUniqueUsers_lt?: InputMaybe<Scalars['Int']['input']>;
  cumulativeUniqueUsers_gte?: InputMaybe<Scalars['Int']['input']>;
  cumulativeUniqueUsers_lte?: InputMaybe<Scalars['Int']['input']>;
  cumulativeUniqueUsers_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  cumulativeUniqueUsers_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  dailyTransactionCount?: InputMaybe<Scalars['Int']['input']>;
  dailyTransactionCount_not?: InputMaybe<Scalars['Int']['input']>;
  dailyTransactionCount_gt?: InputMaybe<Scalars['Int']['input']>;
  dailyTransactionCount_lt?: InputMaybe<Scalars['Int']['input']>;
  dailyTransactionCount_gte?: InputMaybe<Scalars['Int']['input']>;
  dailyTransactionCount_lte?: InputMaybe<Scalars['Int']['input']>;
  dailyTransactionCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  dailyTransactionCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalPoolCount?: InputMaybe<Scalars['Int']['input']>;
  totalPoolCount_not?: InputMaybe<Scalars['Int']['input']>;
  totalPoolCount_gt?: InputMaybe<Scalars['Int']['input']>;
  totalPoolCount_lt?: InputMaybe<Scalars['Int']['input']>;
  totalPoolCount_gte?: InputMaybe<Scalars['Int']['input']>;
  totalPoolCount_lte?: InputMaybe<Scalars['Int']['input']>;
  totalPoolCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  totalPoolCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  dailyDepositCount?: InputMaybe<Scalars['Int']['input']>;
  dailyDepositCount_not?: InputMaybe<Scalars['Int']['input']>;
  dailyDepositCount_gt?: InputMaybe<Scalars['Int']['input']>;
  dailyDepositCount_lt?: InputMaybe<Scalars['Int']['input']>;
  dailyDepositCount_gte?: InputMaybe<Scalars['Int']['input']>;
  dailyDepositCount_lte?: InputMaybe<Scalars['Int']['input']>;
  dailyDepositCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  dailyDepositCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  dailyWithdrawCount?: InputMaybe<Scalars['Int']['input']>;
  dailyWithdrawCount_not?: InputMaybe<Scalars['Int']['input']>;
  dailyWithdrawCount_gt?: InputMaybe<Scalars['Int']['input']>;
  dailyWithdrawCount_lt?: InputMaybe<Scalars['Int']['input']>;
  dailyWithdrawCount_gte?: InputMaybe<Scalars['Int']['input']>;
  dailyWithdrawCount_lte?: InputMaybe<Scalars['Int']['input']>;
  dailyWithdrawCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  dailyWithdrawCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  dailySwapCount?: InputMaybe<Scalars['Int']['input']>;
  dailySwapCount_not?: InputMaybe<Scalars['Int']['input']>;
  dailySwapCount_gt?: InputMaybe<Scalars['Int']['input']>;
  dailySwapCount_lt?: InputMaybe<Scalars['Int']['input']>;
  dailySwapCount_gte?: InputMaybe<Scalars['Int']['input']>;
  dailySwapCount_lte?: InputMaybe<Scalars['Int']['input']>;
  dailySwapCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  dailySwapCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Arbitrum_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arbitrum_UsageMetricsDailySnapshot_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arbitrum_UsageMetricsDailySnapshot_filter>>>;
};

export type Arbitrum_UsageMetricsDailySnapshot_orderBy =
  | 'id'
  | 'day'
  | 'protocol'
  | 'protocol__id'
  | 'protocol__name'
  | 'protocol__slug'
  | 'protocol__schemaVersion'
  | 'protocol__subgraphVersion'
  | 'protocol__methodologyVersion'
  | 'protocol__network'
  | 'protocol__type'
  | 'protocol__totalValueLockedUSD'
  | 'protocol__totalLiquidityUSD'
  | 'protocol__activeLiquidityUSD'
  | 'protocol__uncollectedProtocolSideValueUSD'
  | 'protocol__uncollectedSupplySideValueUSD'
  | 'protocol__protocolControlledValueUSD'
  | 'protocol__cumulativeVolumeUSD'
  | 'protocol__cumulativeSupplySideRevenueUSD'
  | 'protocol__cumulativeProtocolSideRevenueUSD'
  | 'protocol__cumulativeTotalRevenueUSD'
  | 'protocol__cumulativeUniqueUsers'
  | 'protocol__cumulativeUniqueLPs'
  | 'protocol__cumulativeUniqueTraders'
  | 'protocol__totalPoolCount'
  | 'protocol__openPositionCount'
  | 'protocol__cumulativePositionCount'
  | 'protocol__lastSnapshotDayID'
  | 'protocol__lastUpdateTimestamp'
  | 'protocol__lastUpdateBlockNumber'
  | 'protocol___regenesis'
  | 'dailyActiveUsers'
  | 'cumulativeUniqueUsers'
  | 'dailyTransactionCount'
  | 'totalPoolCount'
  | 'dailyDepositCount'
  | 'dailyWithdrawCount'
  | 'dailySwapCount'
  | 'timestamp'
  | 'blockNumber';

export type Arbitrum_UsageMetricsHourlySnapshot = {
  /**  { # of hours since Unix epoch time }  */
  id: Scalars['Arbitrum_Bytes']['output'];
  /**  Number of hours since Unix epoch time  */
  hour: Scalars['Int']['output'];
  /**  Protocol this snapshot is associated with  */
  protocol: Arbitrum_DexAmmProtocol;
  /**  Number of unique hourly active users  */
  hourlyActiveUsers: Scalars['Int']['output'];
  /**  Number of cumulative unique users  */
  cumulativeUniqueUsers: Scalars['Int']['output'];
  /**  Total number of transactions occurred in an hour. Transactions include all entities that implement the Event interface.  */
  hourlyTransactionCount: Scalars['Int']['output'];
  /**  Total number of deposits (add liquidity) in an hour  */
  hourlyDepositCount: Scalars['Int']['output'];
  /**  Total number of withdrawals (remove liquidity) in an hour  */
  hourlyWithdrawCount: Scalars['Int']['output'];
  /**  Total number of trades (swaps) in an hour  */
  hourlySwapCount: Scalars['Int']['output'];
  /**  Timestamp of when this snapshot was taken/last modified (May be taken after interval has passed)  */
  timestamp: Scalars['BigInt']['output'];
  /**  Block number of when this snapshot was taken/last modified (May be taken after interval has passed)  */
  blockNumber: Scalars['BigInt']['output'];
};

export type Arbitrum_UsageMetricsHourlySnapshot_filter = {
  id?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Arbitrum_Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Arbitrum_Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  hour?: InputMaybe<Scalars['Int']['input']>;
  hour_not?: InputMaybe<Scalars['Int']['input']>;
  hour_gt?: InputMaybe<Scalars['Int']['input']>;
  hour_lt?: InputMaybe<Scalars['Int']['input']>;
  hour_gte?: InputMaybe<Scalars['Int']['input']>;
  hour_lte?: InputMaybe<Scalars['Int']['input']>;
  hour_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  hour_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  protocol?: InputMaybe<Scalars['String']['input']>;
  protocol_not?: InputMaybe<Scalars['String']['input']>;
  protocol_gt?: InputMaybe<Scalars['String']['input']>;
  protocol_lt?: InputMaybe<Scalars['String']['input']>;
  protocol_gte?: InputMaybe<Scalars['String']['input']>;
  protocol_lte?: InputMaybe<Scalars['String']['input']>;
  protocol_in?: InputMaybe<Array<Scalars['String']['input']>>;
  protocol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  protocol_contains?: InputMaybe<Scalars['String']['input']>;
  protocol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  protocol_not_contains?: InputMaybe<Scalars['String']['input']>;
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  protocol_starts_with?: InputMaybe<Scalars['String']['input']>;
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  protocol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  protocol_ends_with?: InputMaybe<Scalars['String']['input']>;
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  protocol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  protocol_?: InputMaybe<Arbitrum_DexAmmProtocol_filter>;
  hourlyActiveUsers?: InputMaybe<Scalars['Int']['input']>;
  hourlyActiveUsers_not?: InputMaybe<Scalars['Int']['input']>;
  hourlyActiveUsers_gt?: InputMaybe<Scalars['Int']['input']>;
  hourlyActiveUsers_lt?: InputMaybe<Scalars['Int']['input']>;
  hourlyActiveUsers_gte?: InputMaybe<Scalars['Int']['input']>;
  hourlyActiveUsers_lte?: InputMaybe<Scalars['Int']['input']>;
  hourlyActiveUsers_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  hourlyActiveUsers_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  cumulativeUniqueUsers?: InputMaybe<Scalars['Int']['input']>;
  cumulativeUniqueUsers_not?: InputMaybe<Scalars['Int']['input']>;
  cumulativeUniqueUsers_gt?: InputMaybe<Scalars['Int']['input']>;
  cumulativeUniqueUsers_lt?: InputMaybe<Scalars['Int']['input']>;
  cumulativeUniqueUsers_gte?: InputMaybe<Scalars['Int']['input']>;
  cumulativeUniqueUsers_lte?: InputMaybe<Scalars['Int']['input']>;
  cumulativeUniqueUsers_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  cumulativeUniqueUsers_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  hourlyTransactionCount?: InputMaybe<Scalars['Int']['input']>;
  hourlyTransactionCount_not?: InputMaybe<Scalars['Int']['input']>;
  hourlyTransactionCount_gt?: InputMaybe<Scalars['Int']['input']>;
  hourlyTransactionCount_lt?: InputMaybe<Scalars['Int']['input']>;
  hourlyTransactionCount_gte?: InputMaybe<Scalars['Int']['input']>;
  hourlyTransactionCount_lte?: InputMaybe<Scalars['Int']['input']>;
  hourlyTransactionCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  hourlyTransactionCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  hourlyDepositCount?: InputMaybe<Scalars['Int']['input']>;
  hourlyDepositCount_not?: InputMaybe<Scalars['Int']['input']>;
  hourlyDepositCount_gt?: InputMaybe<Scalars['Int']['input']>;
  hourlyDepositCount_lt?: InputMaybe<Scalars['Int']['input']>;
  hourlyDepositCount_gte?: InputMaybe<Scalars['Int']['input']>;
  hourlyDepositCount_lte?: InputMaybe<Scalars['Int']['input']>;
  hourlyDepositCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  hourlyDepositCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  hourlyWithdrawCount?: InputMaybe<Scalars['Int']['input']>;
  hourlyWithdrawCount_not?: InputMaybe<Scalars['Int']['input']>;
  hourlyWithdrawCount_gt?: InputMaybe<Scalars['Int']['input']>;
  hourlyWithdrawCount_lt?: InputMaybe<Scalars['Int']['input']>;
  hourlyWithdrawCount_gte?: InputMaybe<Scalars['Int']['input']>;
  hourlyWithdrawCount_lte?: InputMaybe<Scalars['Int']['input']>;
  hourlyWithdrawCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  hourlyWithdrawCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  hourlySwapCount?: InputMaybe<Scalars['Int']['input']>;
  hourlySwapCount_not?: InputMaybe<Scalars['Int']['input']>;
  hourlySwapCount_gt?: InputMaybe<Scalars['Int']['input']>;
  hourlySwapCount_lt?: InputMaybe<Scalars['Int']['input']>;
  hourlySwapCount_gte?: InputMaybe<Scalars['Int']['input']>;
  hourlySwapCount_lte?: InputMaybe<Scalars['Int']['input']>;
  hourlySwapCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  hourlySwapCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Arbitrum_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arbitrum_UsageMetricsHourlySnapshot_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arbitrum_UsageMetricsHourlySnapshot_filter>>>;
};

export type Arbitrum_UsageMetricsHourlySnapshot_orderBy =
  | 'id'
  | 'hour'
  | 'protocol'
  | 'protocol__id'
  | 'protocol__name'
  | 'protocol__slug'
  | 'protocol__schemaVersion'
  | 'protocol__subgraphVersion'
  | 'protocol__methodologyVersion'
  | 'protocol__network'
  | 'protocol__type'
  | 'protocol__totalValueLockedUSD'
  | 'protocol__totalLiquidityUSD'
  | 'protocol__activeLiquidityUSD'
  | 'protocol__uncollectedProtocolSideValueUSD'
  | 'protocol__uncollectedSupplySideValueUSD'
  | 'protocol__protocolControlledValueUSD'
  | 'protocol__cumulativeVolumeUSD'
  | 'protocol__cumulativeSupplySideRevenueUSD'
  | 'protocol__cumulativeProtocolSideRevenueUSD'
  | 'protocol__cumulativeTotalRevenueUSD'
  | 'protocol__cumulativeUniqueUsers'
  | 'protocol__cumulativeUniqueLPs'
  | 'protocol__cumulativeUniqueTraders'
  | 'protocol__totalPoolCount'
  | 'protocol__openPositionCount'
  | 'protocol__cumulativePositionCount'
  | 'protocol__lastSnapshotDayID'
  | 'protocol__lastUpdateTimestamp'
  | 'protocol__lastUpdateBlockNumber'
  | 'protocol___regenesis'
  | 'hourlyActiveUsers'
  | 'cumulativeUniqueUsers'
  | 'hourlyTransactionCount'
  | 'hourlyDepositCount'
  | 'hourlyWithdrawCount'
  | 'hourlySwapCount'
  | 'timestamp'
  | 'blockNumber';

export type Arbitrum_Withdraw = {
  /**  { Transaction hash }-{ Log index } */
  id: Scalars['Arbitrum_Bytes']['output'];
  /**  Transaction hash of the transaction that emitted this event  */
  hash: Scalars['Arbitrum_Bytes']['output'];
  /**  Nonce of the transaction that emitted this event  */
  nonce: Scalars['BigInt']['output'];
  /**  Event log index. For transactions that don't emit event, create arbitrary index starting from 0  */
  logIndex: Scalars['Int']['output'];
  /**  Gas limit of the transaction that emitted this event  */
  gasLimit?: Maybe<Scalars['BigInt']['output']>;
  /**  Gas used in this transaction. (Optional because not every chain will support this)  */
  gasUsed?: Maybe<Scalars['BigInt']['output']>;
  /**  Gas price of the transaction that emitted this event  */
  gasPrice?: Maybe<Scalars['BigInt']['output']>;
  /**  The protocol this transaction belongs to  */
  protocol: Arbitrum_DexAmmProtocol;
  /**  Account that emitted this event  */
  account: Arbitrum_Account;
  /**  The user position changed by this event  */
  position?: Maybe<Arbitrum_Position>;
  /**  lower tick of position  */
  tickLower?: Maybe<Scalars['BigInt']['output']>;
  /**  upper tick of position  */
  tickUpper?: Maybe<Scalars['BigInt']['output']>;
  /**  The pool involving this event  */
  pool: Arbitrum_LiquidityPool;
  /**  Block number of this event  */
  blockNumber: Scalars['BigInt']['output'];
  /**  Timestamp of this event  */
  timestamp: Scalars['BigInt']['output'];
  /**  Amount of liquidity burned  */
  liquidity: Scalars['BigInt']['output'];
  /**  Input tokens of the pool (not input tokens of the event/transaction). E.g. WETH and USDC from a WETH-USDC pool  */
  inputTokens: Array<Arbitrum_Token>;
  /**  Amount of input tokens in the token's native unit  */
  inputTokenAmounts: Array<Scalars['BigInt']['output']>;
  /**  Amount of input tokens in the liquidity pool  */
  reserveAmounts?: Maybe<Array<Scalars['BigInt']['output']>>;
  /**  USD-normalized value of the transaction of the underlying (e.g. sum of tokens withdrawn from a pool)  */
  amountUSD: Scalars['Arbitrum_BigDecimal']['output'];
};


export type Arbitrum_WithdrawinputTokensArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrum_Token_orderBy>;
  orderDirection?: InputMaybe<Arbitrum_OrderDirection>;
  where?: InputMaybe<Arbitrum_Token_filter>;
};

export type Arbitrum_Withdraw_filter = {
  id?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Arbitrum_Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Arbitrum_Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  hash?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  hash_not?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  hash_gt?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  hash_lt?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  hash_gte?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  hash_lte?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  hash_in?: InputMaybe<Array<Scalars['Arbitrum_Bytes']['input']>>;
  hash_not_in?: InputMaybe<Array<Scalars['Arbitrum_Bytes']['input']>>;
  hash_contains?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  hash_not_contains?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  nonce?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_not?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_gt?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_lt?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_gte?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_lte?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  nonce_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex?: InputMaybe<Scalars['Int']['input']>;
  logIndex_not?: InputMaybe<Scalars['Int']['input']>;
  logIndex_gt?: InputMaybe<Scalars['Int']['input']>;
  logIndex_lt?: InputMaybe<Scalars['Int']['input']>;
  logIndex_gte?: InputMaybe<Scalars['Int']['input']>;
  logIndex_lte?: InputMaybe<Scalars['Int']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  logIndex_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  gasLimit?: InputMaybe<Scalars['BigInt']['input']>;
  gasLimit_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasLimit_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasLimit_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasLimit_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasLimit_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasLimit_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasLimit_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  protocol?: InputMaybe<Scalars['String']['input']>;
  protocol_not?: InputMaybe<Scalars['String']['input']>;
  protocol_gt?: InputMaybe<Scalars['String']['input']>;
  protocol_lt?: InputMaybe<Scalars['String']['input']>;
  protocol_gte?: InputMaybe<Scalars['String']['input']>;
  protocol_lte?: InputMaybe<Scalars['String']['input']>;
  protocol_in?: InputMaybe<Array<Scalars['String']['input']>>;
  protocol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  protocol_contains?: InputMaybe<Scalars['String']['input']>;
  protocol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  protocol_not_contains?: InputMaybe<Scalars['String']['input']>;
  protocol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  protocol_starts_with?: InputMaybe<Scalars['String']['input']>;
  protocol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  protocol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  protocol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  protocol_ends_with?: InputMaybe<Scalars['String']['input']>;
  protocol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  protocol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  protocol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  protocol_?: InputMaybe<Arbitrum_DexAmmProtocol_filter>;
  account?: InputMaybe<Scalars['String']['input']>;
  account_not?: InputMaybe<Scalars['String']['input']>;
  account_gt?: InputMaybe<Scalars['String']['input']>;
  account_lt?: InputMaybe<Scalars['String']['input']>;
  account_gte?: InputMaybe<Scalars['String']['input']>;
  account_lte?: InputMaybe<Scalars['String']['input']>;
  account_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_contains?: InputMaybe<Scalars['String']['input']>;
  account_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_contains?: InputMaybe<Scalars['String']['input']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_?: InputMaybe<Arbitrum_Account_filter>;
  position?: InputMaybe<Scalars['String']['input']>;
  position_not?: InputMaybe<Scalars['String']['input']>;
  position_gt?: InputMaybe<Scalars['String']['input']>;
  position_lt?: InputMaybe<Scalars['String']['input']>;
  position_gte?: InputMaybe<Scalars['String']['input']>;
  position_lte?: InputMaybe<Scalars['String']['input']>;
  position_in?: InputMaybe<Array<Scalars['String']['input']>>;
  position_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  position_contains?: InputMaybe<Scalars['String']['input']>;
  position_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  position_not_contains?: InputMaybe<Scalars['String']['input']>;
  position_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  position_starts_with?: InputMaybe<Scalars['String']['input']>;
  position_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  position_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  position_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  position_ends_with?: InputMaybe<Scalars['String']['input']>;
  position_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  position_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  position_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  position_?: InputMaybe<Arbitrum_Position_filter>;
  tickLower?: InputMaybe<Scalars['BigInt']['input']>;
  tickLower_not?: InputMaybe<Scalars['BigInt']['input']>;
  tickLower_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tickLower_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tickLower_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tickLower_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tickLower_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tickLower_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tickUpper?: InputMaybe<Scalars['BigInt']['input']>;
  tickUpper_not?: InputMaybe<Scalars['BigInt']['input']>;
  tickUpper_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tickUpper_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tickUpper_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tickUpper_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tickUpper_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tickUpper_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  pool?: InputMaybe<Scalars['String']['input']>;
  pool_not?: InputMaybe<Scalars['String']['input']>;
  pool_gt?: InputMaybe<Scalars['String']['input']>;
  pool_lt?: InputMaybe<Scalars['String']['input']>;
  pool_gte?: InputMaybe<Scalars['String']['input']>;
  pool_lte?: InputMaybe<Scalars['String']['input']>;
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_contains?: InputMaybe<Scalars['String']['input']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_?: InputMaybe<Arbitrum_LiquidityPool_filter>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidity?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_not?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_gt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_lt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_gte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_lte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidity_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  inputTokens?: InputMaybe<Array<Scalars['String']['input']>>;
  inputTokens_not?: InputMaybe<Array<Scalars['String']['input']>>;
  inputTokens_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  inputTokens_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  inputTokens_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  inputTokens_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  inputTokens_?: InputMaybe<Arbitrum_Token_filter>;
  inputTokenAmounts?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  inputTokenAmounts_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  inputTokenAmounts_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  inputTokenAmounts_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  inputTokenAmounts_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  inputTokenAmounts_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  reserveAmounts?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  reserveAmounts_not?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  reserveAmounts_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  reserveAmounts_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  reserveAmounts_not_contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  reserveAmounts_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amountUSD?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  amountUSD_not?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  amountUSD_gt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  amountUSD_lt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  amountUSD_gte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  amountUSD_lte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  amountUSD_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Arbitrum_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arbitrum_Withdraw_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arbitrum_Withdraw_filter>>>;
};

export type Arbitrum_Withdraw_orderBy =
  | 'id'
  | 'hash'
  | 'nonce'
  | 'logIndex'
  | 'gasLimit'
  | 'gasUsed'
  | 'gasPrice'
  | 'protocol'
  | 'protocol__id'
  | 'protocol__name'
  | 'protocol__slug'
  | 'protocol__schemaVersion'
  | 'protocol__subgraphVersion'
  | 'protocol__methodologyVersion'
  | 'protocol__network'
  | 'protocol__type'
  | 'protocol__totalValueLockedUSD'
  | 'protocol__totalLiquidityUSD'
  | 'protocol__activeLiquidityUSD'
  | 'protocol__uncollectedProtocolSideValueUSD'
  | 'protocol__uncollectedSupplySideValueUSD'
  | 'protocol__protocolControlledValueUSD'
  | 'protocol__cumulativeVolumeUSD'
  | 'protocol__cumulativeSupplySideRevenueUSD'
  | 'protocol__cumulativeProtocolSideRevenueUSD'
  | 'protocol__cumulativeTotalRevenueUSD'
  | 'protocol__cumulativeUniqueUsers'
  | 'protocol__cumulativeUniqueLPs'
  | 'protocol__cumulativeUniqueTraders'
  | 'protocol__totalPoolCount'
  | 'protocol__openPositionCount'
  | 'protocol__cumulativePositionCount'
  | 'protocol__lastSnapshotDayID'
  | 'protocol__lastUpdateTimestamp'
  | 'protocol__lastUpdateBlockNumber'
  | 'protocol___regenesis'
  | 'account'
  | 'account__id'
  | 'account__positionCount'
  | 'account__openPositionCount'
  | 'account__closedPositionCount'
  | 'account__depositCount'
  | 'account__withdrawCount'
  | 'account__swapCount'
  | 'position'
  | 'position__id'
  | 'position__hashOpened'
  | 'position__hashClosed'
  | 'position__blockNumberOpened'
  | 'position__timestampOpened'
  | 'position__blockNumberClosed'
  | 'position__timestampClosed'
  | 'position__liquidityTokenType'
  | 'position__liquidity'
  | 'position__liquidityUSD'
  | 'position__cumulativeDepositUSD'
  | 'position__cumulativeWithdrawUSD'
  | 'position__depositCount'
  | 'position__withdrawCount'
  | 'tickLower'
  | 'tickUpper'
  | 'pool'
  | 'pool__id'
  | 'pool__name'
  | 'pool__symbol'
  | 'pool__liquidityTokenType'
  | 'pool__isSingleSided'
  | 'pool__createdTimestamp'
  | 'pool__createdBlockNumber'
  | 'pool__tick'
  | 'pool__totalValueLockedUSD'
  | 'pool__totalLiquidity'
  | 'pool__totalLiquidityUSD'
  | 'pool__activeLiquidity'
  | 'pool__activeLiquidityUSD'
  | 'pool__cumulativeSupplySideRevenueUSD'
  | 'pool__cumulativeProtocolSideRevenueUSD'
  | 'pool__cumulativeTotalRevenueUSD'
  | 'pool__cumulativeVolumeUSD'
  | 'pool__stakedOutputTokenAmount'
  | 'pool__cumulativeDepositCount'
  | 'pool__cumulativeWithdrawCount'
  | 'pool__cumulativeSwapCount'
  | 'pool__positionCount'
  | 'pool__openPositionCount'
  | 'pool__closedPositionCount'
  | 'pool__lastSnapshotDayID'
  | 'pool__lastSnapshotHourID'
  | 'pool__lastUpdateTimestamp'
  | 'pool__lastUpdateBlockNumber'
  | 'blockNumber'
  | 'timestamp'
  | 'liquidity'
  | 'inputTokens'
  | 'inputTokenAmounts'
  | 'reserveAmounts'
  | 'amountUSD';

export type Arbitrum__Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Arbitrum_Bytes']['output']>;
  /** The block number */
  number: Scalars['Int']['output'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']['output']>;
  /** The hash of the parent block */
  parentHash?: Maybe<Scalars['Arbitrum_Bytes']['output']>;
};

/**   Used to keep track of the price of Ether/TVL in USD, pool deposit count, and total unique users  */
export type Arbitrum__HelperStore = {
  id: Scalars['Arbitrum_Bytes']['output'];
  /**  Token Prices  */
  valueDecimalList?: Maybe<Array<Scalars['Arbitrum_BigDecimal']['output']>>;
  /**  price of ETH/TVL in USD  */
  valueDecimal?: Maybe<Scalars['Arbitrum_BigDecimal']['output']>;
  /**  # of deposits, # of unique users  */
  valueInt?: Maybe<Scalars['Int']['output']>;
};

export type Arbitrum__HelperStore_filter = {
  id?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Arbitrum_Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Arbitrum_Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  valueDecimalList?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  valueDecimalList_not?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  valueDecimalList_contains?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  valueDecimalList_contains_nocase?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  valueDecimalList_not_contains?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  valueDecimalList_not_contains_nocase?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  valueDecimal?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  valueDecimal_not?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  valueDecimal_gt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  valueDecimal_lt?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  valueDecimal_gte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  valueDecimal_lte?: InputMaybe<Scalars['Arbitrum_BigDecimal']['input']>;
  valueDecimal_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  valueDecimal_not_in?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  valueInt?: InputMaybe<Scalars['Int']['input']>;
  valueInt_not?: InputMaybe<Scalars['Int']['input']>;
  valueInt_gt?: InputMaybe<Scalars['Int']['input']>;
  valueInt_lt?: InputMaybe<Scalars['Int']['input']>;
  valueInt_gte?: InputMaybe<Scalars['Int']['input']>;
  valueInt_lte?: InputMaybe<Scalars['Int']['input']>;
  valueInt_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  valueInt_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Arbitrum_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arbitrum__HelperStore_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arbitrum__HelperStore_filter>>>;
};

export type Arbitrum__HelperStore_orderBy =
  | 'id'
  | 'valueDecimalList'
  | 'valueDecimal'
  | 'valueInt';

export type Arbitrum__LiquidityPoolAmount = {
  /**  Smart contract address of the pool  */
  id: Scalars['Arbitrum_Bytes']['output'];
  /**  Input tokens of the pool (not input tokens of the event/transaction). E.g. WETH and USDC from a WETH-USDC pool  */
  inputTokens: Array<Arbitrum_Token>;
  /**  Amount of input tokens in the pool. The ordering should be the same as the pool's `inputTokens` field.  */
  inputTokenBalances: Array<Scalars['Arbitrum_BigDecimal']['output']>;
  tokenPrices: Array<Scalars['Arbitrum_BigDecimal']['output']>;
};


export type Arbitrum__LiquidityPoolAmountinputTokensArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrum_Token_orderBy>;
  orderDirection?: InputMaybe<Arbitrum_OrderDirection>;
  where?: InputMaybe<Arbitrum_Token_filter>;
};

export type Arbitrum__LiquidityPoolAmount_filter = {
  id?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Arbitrum_Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Arbitrum_Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  inputTokens?: InputMaybe<Array<Scalars['String']['input']>>;
  inputTokens_not?: InputMaybe<Array<Scalars['String']['input']>>;
  inputTokens_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  inputTokens_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  inputTokens_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  inputTokens_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  inputTokens_?: InputMaybe<Arbitrum_Token_filter>;
  inputTokenBalances?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  inputTokenBalances_not?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  inputTokenBalances_contains?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  inputTokenBalances_contains_nocase?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  inputTokenBalances_not_contains?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  inputTokenBalances_not_contains_nocase?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  tokenPrices?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  tokenPrices_not?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  tokenPrices_contains?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  tokenPrices_contains_nocase?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  tokenPrices_not_contains?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  tokenPrices_not_contains_nocase?: InputMaybe<Array<Scalars['Arbitrum_BigDecimal']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Arbitrum_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arbitrum__LiquidityPoolAmount_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arbitrum__LiquidityPoolAmount_filter>>>;
};

export type Arbitrum__LiquidityPoolAmount_orderBy =
  | 'id'
  | 'inputTokens'
  | 'inputTokenBalances'
  | 'tokenPrices';

/** The type for the top-level _meta field */
export type Arbitrum__Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: Arbitrum__Block_;
  /** The deployment ID */
  deployment: Scalars['String']['output'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output'];
};

export type Arbitrum__SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

/**  This is used to keep tract of the derived price of tokens in ethereum and the whitelisted pools to which it belongs */
export type Arbitrum__TokenWhitelist = {
  /**  Token Address  */
  id: Scalars['Arbitrum_Bytes']['output'];
  /**  pools token is in that are white listed for USD pricing  */
  whitelistPools: Array<Arbitrum_LiquidityPool>;
};


/**  This is used to keep tract of the derived price of tokens in ethereum and the whitelisted pools to which it belongs */
export type Arbitrum__TokenWhitelistwhitelistPoolsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Arbitrum_LiquidityPool_orderBy>;
  orderDirection?: InputMaybe<Arbitrum_OrderDirection>;
  where?: InputMaybe<Arbitrum_LiquidityPool_filter>;
};

export type Arbitrum__TokenWhitelistSymbol = {
  /**  Whitelist Token Symbol  */
  id: Scalars['ID']['output'];
  /**  Whitelist Token Address */
  address: Scalars['Arbitrum_Bytes']['output'];
};

export type Arbitrum__TokenWhitelistSymbol_filter = {
  id?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  address?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  address_not?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  address_gt?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  address_lt?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  address_gte?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  address_lte?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  address_in?: InputMaybe<Array<Scalars['Arbitrum_Bytes']['input']>>;
  address_not_in?: InputMaybe<Array<Scalars['Arbitrum_Bytes']['input']>>;
  address_contains?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  address_not_contains?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Arbitrum_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arbitrum__TokenWhitelistSymbol_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arbitrum__TokenWhitelistSymbol_filter>>>;
};

export type Arbitrum__TokenWhitelistSymbol_orderBy =
  | 'id'
  | 'address';

export type Arbitrum__TokenWhitelist_filter = {
  id?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_not?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_gt?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_lt?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_gte?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_lte?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_in?: InputMaybe<Array<Scalars['Arbitrum_Bytes']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['Arbitrum_Bytes']['input']>>;
  id_contains?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  id_not_contains?: InputMaybe<Scalars['Arbitrum_Bytes']['input']>;
  whitelistPools?: InputMaybe<Array<Scalars['String']['input']>>;
  whitelistPools_not?: InputMaybe<Array<Scalars['String']['input']>>;
  whitelistPools_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  whitelistPools_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  whitelistPools_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  whitelistPools_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  whitelistPools_?: InputMaybe<Arbitrum_LiquidityPool_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<Arbitrum_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Arbitrum__TokenWhitelist_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Arbitrum__TokenWhitelist_filter>>>;
};

export type Arbitrum__TokenWhitelist_orderBy =
  | 'id'
  | 'whitelistPools';

  export type QuerySdk = {
      /** null **/
  Arbitrum_token: InContextSdkMethod<Query['Arbitrum_token'], QueryArbitrum_tokenArgs, MeshContext>,
  /** null **/
  Arbitrum_tokens: InContextSdkMethod<Query['Arbitrum_tokens'], QueryArbitrum_tokensArgs, MeshContext>,
  /** null **/
  Arbitrum_rewardToken: InContextSdkMethod<Query['Arbitrum_rewardToken'], QueryArbitrum_rewardTokenArgs, MeshContext>,
  /** null **/
  Arbitrum_rewardTokens: InContextSdkMethod<Query['Arbitrum_rewardTokens'], QueryArbitrum_rewardTokensArgs, MeshContext>,
  /** null **/
  Arbitrum_liquidityPoolFee: InContextSdkMethod<Query['Arbitrum_liquidityPoolFee'], QueryArbitrum_liquidityPoolFeeArgs, MeshContext>,
  /** null **/
  Arbitrum_liquidityPoolFees: InContextSdkMethod<Query['Arbitrum_liquidityPoolFees'], QueryArbitrum_liquidityPoolFeesArgs, MeshContext>,
  /** null **/
  Arbitrum_dexAmmProtocol: InContextSdkMethod<Query['Arbitrum_dexAmmProtocol'], QueryArbitrum_dexAmmProtocolArgs, MeshContext>,
  /** null **/
  Arbitrum_dexAmmProtocols: InContextSdkMethod<Query['Arbitrum_dexAmmProtocols'], QueryArbitrum_dexAmmProtocolsArgs, MeshContext>,
  /** null **/
  Arbitrum_usageMetricsDailySnapshot: InContextSdkMethod<Query['Arbitrum_usageMetricsDailySnapshot'], QueryArbitrum_usageMetricsDailySnapshotArgs, MeshContext>,
  /** null **/
  Arbitrum_usageMetricsDailySnapshots: InContextSdkMethod<Query['Arbitrum_usageMetricsDailySnapshots'], QueryArbitrum_usageMetricsDailySnapshotsArgs, MeshContext>,
  /** null **/
  Arbitrum_usageMetricsHourlySnapshot: InContextSdkMethod<Query['Arbitrum_usageMetricsHourlySnapshot'], QueryArbitrum_usageMetricsHourlySnapshotArgs, MeshContext>,
  /** null **/
  Arbitrum_usageMetricsHourlySnapshots: InContextSdkMethod<Query['Arbitrum_usageMetricsHourlySnapshots'], QueryArbitrum_usageMetricsHourlySnapshotsArgs, MeshContext>,
  /** null **/
  Arbitrum_financialsDailySnapshot: InContextSdkMethod<Query['Arbitrum_financialsDailySnapshot'], QueryArbitrum_financialsDailySnapshotArgs, MeshContext>,
  /** null **/
  Arbitrum_financialsDailySnapshots: InContextSdkMethod<Query['Arbitrum_financialsDailySnapshots'], QueryArbitrum_financialsDailySnapshotsArgs, MeshContext>,
  /** null **/
  Arbitrum_liquidityPool: InContextSdkMethod<Query['Arbitrum_liquidityPool'], QueryArbitrum_liquidityPoolArgs, MeshContext>,
  /** null **/
  Arbitrum_liquidityPools: InContextSdkMethod<Query['Arbitrum_liquidityPools'], QueryArbitrum_liquidityPoolsArgs, MeshContext>,
  /** null **/
  Arbitrum_liquidityPoolDailySnapshot: InContextSdkMethod<Query['Arbitrum_liquidityPoolDailySnapshot'], QueryArbitrum_liquidityPoolDailySnapshotArgs, MeshContext>,
  /** null **/
  Arbitrum_liquidityPoolDailySnapshots: InContextSdkMethod<Query['Arbitrum_liquidityPoolDailySnapshots'], QueryArbitrum_liquidityPoolDailySnapshotsArgs, MeshContext>,
  /** null **/
  Arbitrum_liquidityPoolHourlySnapshot: InContextSdkMethod<Query['Arbitrum_liquidityPoolHourlySnapshot'], QueryArbitrum_liquidityPoolHourlySnapshotArgs, MeshContext>,
  /** null **/
  Arbitrum_liquidityPoolHourlySnapshots: InContextSdkMethod<Query['Arbitrum_liquidityPoolHourlySnapshots'], QueryArbitrum_liquidityPoolHourlySnapshotsArgs, MeshContext>,
  /** null **/
  Arbitrum_tick: InContextSdkMethod<Query['Arbitrum_tick'], QueryArbitrum_tickArgs, MeshContext>,
  /** null **/
  Arbitrum_ticks: InContextSdkMethod<Query['Arbitrum_ticks'], QueryArbitrum_ticksArgs, MeshContext>,
  /** null **/
  Arbitrum_tickDailySnapshot: InContextSdkMethod<Query['Arbitrum_tickDailySnapshot'], QueryArbitrum_tickDailySnapshotArgs, MeshContext>,
  /** null **/
  Arbitrum_tickDailySnapshots: InContextSdkMethod<Query['Arbitrum_tickDailySnapshots'], QueryArbitrum_tickDailySnapshotsArgs, MeshContext>,
  /** null **/
  Arbitrum_tickHourlySnapshot: InContextSdkMethod<Query['Arbitrum_tickHourlySnapshot'], QueryArbitrum_tickHourlySnapshotArgs, MeshContext>,
  /** null **/
  Arbitrum_tickHourlySnapshots: InContextSdkMethod<Query['Arbitrum_tickHourlySnapshots'], QueryArbitrum_tickHourlySnapshotsArgs, MeshContext>,
  /** null **/
  Arbitrum_account: InContextSdkMethod<Query['Arbitrum_account'], QueryArbitrum_accountArgs, MeshContext>,
  /** null **/
  Arbitrum_accounts: InContextSdkMethod<Query['Arbitrum_accounts'], QueryArbitrum_accountsArgs, MeshContext>,
  /** null **/
  Arbitrum_position: InContextSdkMethod<Query['Arbitrum_position'], QueryArbitrum_positionArgs, MeshContext>,
  /** null **/
  Arbitrum_positions: InContextSdkMethod<Query['Arbitrum_positions'], QueryArbitrum_positionsArgs, MeshContext>,
  /** null **/
  Arbitrum_positionSnapshot: InContextSdkMethod<Query['Arbitrum_positionSnapshot'], QueryArbitrum_positionSnapshotArgs, MeshContext>,
  /** null **/
  Arbitrum_positionSnapshots: InContextSdkMethod<Query['Arbitrum_positionSnapshots'], QueryArbitrum_positionSnapshotsArgs, MeshContext>,
  /** null **/
  Arbitrum_deposit: InContextSdkMethod<Query['Arbitrum_deposit'], QueryArbitrum_depositArgs, MeshContext>,
  /** null **/
  Arbitrum_deposits: InContextSdkMethod<Query['Arbitrum_deposits'], QueryArbitrum_depositsArgs, MeshContext>,
  /** null **/
  Arbitrum_withdraw: InContextSdkMethod<Query['Arbitrum_withdraw'], QueryArbitrum_withdrawArgs, MeshContext>,
  /** null **/
  Arbitrum_withdraws: InContextSdkMethod<Query['Arbitrum_withdraws'], QueryArbitrum_withdrawsArgs, MeshContext>,
  /** null **/
  Arbitrum_swap: InContextSdkMethod<Query['Arbitrum_swap'], QueryArbitrum_swapArgs, MeshContext>,
  /** null **/
  Arbitrum_swaps: InContextSdkMethod<Query['Arbitrum_swaps'], QueryArbitrum_swapsArgs, MeshContext>,
  /** null **/
  Arbitrum_activeAccount: InContextSdkMethod<Query['Arbitrum_activeAccount'], QueryArbitrum_activeAccountArgs, MeshContext>,
  /** null **/
  Arbitrum_activeAccounts: InContextSdkMethod<Query['Arbitrum_activeAccounts'], QueryArbitrum_activeAccountsArgs, MeshContext>,
  /** null **/
  Arbitrum_liquidityPoolAmount: InContextSdkMethod<Query['Arbitrum_liquidityPoolAmount'], QueryArbitrum_liquidityPoolAmountArgs, MeshContext>,
  /** null **/
  Arbitrum_liquidityPoolAmounts: InContextSdkMethod<Query['Arbitrum_liquidityPoolAmounts'], QueryArbitrum_liquidityPoolAmountsArgs, MeshContext>,
  /** null **/
  Arbitrum_helperStore: InContextSdkMethod<Query['Arbitrum_helperStore'], QueryArbitrum_helperStoreArgs, MeshContext>,
  /** null **/
  Arbitrum_helperStores: InContextSdkMethod<Query['Arbitrum_helperStores'], QueryArbitrum_helperStoresArgs, MeshContext>,
  /** null **/
  Arbitrum_tokenWhitelist: InContextSdkMethod<Query['Arbitrum_tokenWhitelist'], QueryArbitrum_tokenWhitelistArgs, MeshContext>,
  /** null **/
  Arbitrum_tokenWhitelists: InContextSdkMethod<Query['Arbitrum_tokenWhitelists'], QueryArbitrum_tokenWhitelistsArgs, MeshContext>,
  /** null **/
  Arbitrum_tokenWhitelistSymbol: InContextSdkMethod<Query['Arbitrum_tokenWhitelistSymbol'], QueryArbitrum_tokenWhitelistSymbolArgs, MeshContext>,
  /** null **/
  Arbitrum_tokenWhitelistSymbols: InContextSdkMethod<Query['Arbitrum_tokenWhitelistSymbols'], QueryArbitrum_tokenWhitelistSymbolsArgs, MeshContext>,
  /** null **/
  Arbitrum_protocol: InContextSdkMethod<Arbitrum_DexAmmProtocol, QueryArbitrum_protocolArgs, MeshContext>,
  /** null **/
  Arbitrum_protocols: InContextSdkMethod<[Arbitrum_DexAmmProtocol!]!, QueryArbitrum_protocolsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  Arbitrum__meta: InContextSdkMethod<Query['Arbitrum__meta'], QueryArbitrum__metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  Arbitrum_token: InContextSdkMethod<Subscription['Arbitrum_token'], SubscriptionArbitrum_tokenArgs, MeshContext>,
  /** null **/
  Arbitrum_tokens: InContextSdkMethod<Subscription['Arbitrum_tokens'], SubscriptionArbitrum_tokensArgs, MeshContext>,
  /** null **/
  Arbitrum_rewardToken: InContextSdkMethod<Subscription['Arbitrum_rewardToken'], SubscriptionArbitrum_rewardTokenArgs, MeshContext>,
  /** null **/
  Arbitrum_rewardTokens: InContextSdkMethod<Subscription['Arbitrum_rewardTokens'], SubscriptionArbitrum_rewardTokensArgs, MeshContext>,
  /** null **/
  Arbitrum_liquidityPoolFee: InContextSdkMethod<Subscription['Arbitrum_liquidityPoolFee'], SubscriptionArbitrum_liquidityPoolFeeArgs, MeshContext>,
  /** null **/
  Arbitrum_liquidityPoolFees: InContextSdkMethod<Subscription['Arbitrum_liquidityPoolFees'], SubscriptionArbitrum_liquidityPoolFeesArgs, MeshContext>,
  /** null **/
  Arbitrum_dexAmmProtocol: InContextSdkMethod<Subscription['Arbitrum_dexAmmProtocol'], SubscriptionArbitrum_dexAmmProtocolArgs, MeshContext>,
  /** null **/
  Arbitrum_dexAmmProtocols: InContextSdkMethod<Subscription['Arbitrum_dexAmmProtocols'], SubscriptionArbitrum_dexAmmProtocolsArgs, MeshContext>,
  /** null **/
  Arbitrum_usageMetricsDailySnapshot: InContextSdkMethod<Subscription['Arbitrum_usageMetricsDailySnapshot'], SubscriptionArbitrum_usageMetricsDailySnapshotArgs, MeshContext>,
  /** null **/
  Arbitrum_usageMetricsDailySnapshots: InContextSdkMethod<Subscription['Arbitrum_usageMetricsDailySnapshots'], SubscriptionArbitrum_usageMetricsDailySnapshotsArgs, MeshContext>,
  /** null **/
  Arbitrum_usageMetricsHourlySnapshot: InContextSdkMethod<Subscription['Arbitrum_usageMetricsHourlySnapshot'], SubscriptionArbitrum_usageMetricsHourlySnapshotArgs, MeshContext>,
  /** null **/
  Arbitrum_usageMetricsHourlySnapshots: InContextSdkMethod<Subscription['Arbitrum_usageMetricsHourlySnapshots'], SubscriptionArbitrum_usageMetricsHourlySnapshotsArgs, MeshContext>,
  /** null **/
  Arbitrum_financialsDailySnapshot: InContextSdkMethod<Subscription['Arbitrum_financialsDailySnapshot'], SubscriptionArbitrum_financialsDailySnapshotArgs, MeshContext>,
  /** null **/
  Arbitrum_financialsDailySnapshots: InContextSdkMethod<Subscription['Arbitrum_financialsDailySnapshots'], SubscriptionArbitrum_financialsDailySnapshotsArgs, MeshContext>,
  /** null **/
  Arbitrum_liquidityPool: InContextSdkMethod<Subscription['Arbitrum_liquidityPool'], SubscriptionArbitrum_liquidityPoolArgs, MeshContext>,
  /** null **/
  Arbitrum_liquidityPools: InContextSdkMethod<Subscription['Arbitrum_liquidityPools'], SubscriptionArbitrum_liquidityPoolsArgs, MeshContext>,
  /** null **/
  Arbitrum_liquidityPoolDailySnapshot: InContextSdkMethod<Subscription['Arbitrum_liquidityPoolDailySnapshot'], SubscriptionArbitrum_liquidityPoolDailySnapshotArgs, MeshContext>,
  /** null **/
  Arbitrum_liquidityPoolDailySnapshots: InContextSdkMethod<Subscription['Arbitrum_liquidityPoolDailySnapshots'], SubscriptionArbitrum_liquidityPoolDailySnapshotsArgs, MeshContext>,
  /** null **/
  Arbitrum_liquidityPoolHourlySnapshot: InContextSdkMethod<Subscription['Arbitrum_liquidityPoolHourlySnapshot'], SubscriptionArbitrum_liquidityPoolHourlySnapshotArgs, MeshContext>,
  /** null **/
  Arbitrum_liquidityPoolHourlySnapshots: InContextSdkMethod<Subscription['Arbitrum_liquidityPoolHourlySnapshots'], SubscriptionArbitrum_liquidityPoolHourlySnapshotsArgs, MeshContext>,
  /** null **/
  Arbitrum_tick: InContextSdkMethod<Subscription['Arbitrum_tick'], SubscriptionArbitrum_tickArgs, MeshContext>,
  /** null **/
  Arbitrum_ticks: InContextSdkMethod<Subscription['Arbitrum_ticks'], SubscriptionArbitrum_ticksArgs, MeshContext>,
  /** null **/
  Arbitrum_tickDailySnapshot: InContextSdkMethod<Subscription['Arbitrum_tickDailySnapshot'], SubscriptionArbitrum_tickDailySnapshotArgs, MeshContext>,
  /** null **/
  Arbitrum_tickDailySnapshots: InContextSdkMethod<Subscription['Arbitrum_tickDailySnapshots'], SubscriptionArbitrum_tickDailySnapshotsArgs, MeshContext>,
  /** null **/
  Arbitrum_tickHourlySnapshot: InContextSdkMethod<Subscription['Arbitrum_tickHourlySnapshot'], SubscriptionArbitrum_tickHourlySnapshotArgs, MeshContext>,
  /** null **/
  Arbitrum_tickHourlySnapshots: InContextSdkMethod<Subscription['Arbitrum_tickHourlySnapshots'], SubscriptionArbitrum_tickHourlySnapshotsArgs, MeshContext>,
  /** null **/
  Arbitrum_account: InContextSdkMethod<Subscription['Arbitrum_account'], SubscriptionArbitrum_accountArgs, MeshContext>,
  /** null **/
  Arbitrum_accounts: InContextSdkMethod<Subscription['Arbitrum_accounts'], SubscriptionArbitrum_accountsArgs, MeshContext>,
  /** null **/
  Arbitrum_position: InContextSdkMethod<Subscription['Arbitrum_position'], SubscriptionArbitrum_positionArgs, MeshContext>,
  /** null **/
  Arbitrum_positions: InContextSdkMethod<Subscription['Arbitrum_positions'], SubscriptionArbitrum_positionsArgs, MeshContext>,
  /** null **/
  Arbitrum_positionSnapshot: InContextSdkMethod<Subscription['Arbitrum_positionSnapshot'], SubscriptionArbitrum_positionSnapshotArgs, MeshContext>,
  /** null **/
  Arbitrum_positionSnapshots: InContextSdkMethod<Subscription['Arbitrum_positionSnapshots'], SubscriptionArbitrum_positionSnapshotsArgs, MeshContext>,
  /** null **/
  Arbitrum_deposit: InContextSdkMethod<Subscription['Arbitrum_deposit'], SubscriptionArbitrum_depositArgs, MeshContext>,
  /** null **/
  Arbitrum_deposits: InContextSdkMethod<Subscription['Arbitrum_deposits'], SubscriptionArbitrum_depositsArgs, MeshContext>,
  /** null **/
  Arbitrum_withdraw: InContextSdkMethod<Subscription['Arbitrum_withdraw'], SubscriptionArbitrum_withdrawArgs, MeshContext>,
  /** null **/
  Arbitrum_withdraws: InContextSdkMethod<Subscription['Arbitrum_withdraws'], SubscriptionArbitrum_withdrawsArgs, MeshContext>,
  /** null **/
  Arbitrum_swap: InContextSdkMethod<Subscription['Arbitrum_swap'], SubscriptionArbitrum_swapArgs, MeshContext>,
  /** null **/
  Arbitrum_swaps: InContextSdkMethod<Subscription['Arbitrum_swaps'], SubscriptionArbitrum_swapsArgs, MeshContext>,
  /** null **/
  Arbitrum_activeAccount: InContextSdkMethod<Subscription['Arbitrum_activeAccount'], SubscriptionArbitrum_activeAccountArgs, MeshContext>,
  /** null **/
  Arbitrum_activeAccounts: InContextSdkMethod<Subscription['Arbitrum_activeAccounts'], SubscriptionArbitrum_activeAccountsArgs, MeshContext>,
  /** null **/
  Arbitrum_liquidityPoolAmount: InContextSdkMethod<Subscription['Arbitrum_liquidityPoolAmount'], SubscriptionArbitrum_liquidityPoolAmountArgs, MeshContext>,
  /** null **/
  Arbitrum_liquidityPoolAmounts: InContextSdkMethod<Subscription['Arbitrum_liquidityPoolAmounts'], SubscriptionArbitrum_liquidityPoolAmountsArgs, MeshContext>,
  /** null **/
  Arbitrum_helperStore: InContextSdkMethod<Subscription['Arbitrum_helperStore'], SubscriptionArbitrum_helperStoreArgs, MeshContext>,
  /** null **/
  Arbitrum_helperStores: InContextSdkMethod<Subscription['Arbitrum_helperStores'], SubscriptionArbitrum_helperStoresArgs, MeshContext>,
  /** null **/
  Arbitrum_tokenWhitelist: InContextSdkMethod<Subscription['Arbitrum_tokenWhitelist'], SubscriptionArbitrum_tokenWhitelistArgs, MeshContext>,
  /** null **/
  Arbitrum_tokenWhitelists: InContextSdkMethod<Subscription['Arbitrum_tokenWhitelists'], SubscriptionArbitrum_tokenWhitelistsArgs, MeshContext>,
  /** null **/
  Arbitrum_tokenWhitelistSymbol: InContextSdkMethod<Subscription['Arbitrum_tokenWhitelistSymbol'], SubscriptionArbitrum_tokenWhitelistSymbolArgs, MeshContext>,
  /** null **/
  Arbitrum_tokenWhitelistSymbols: InContextSdkMethod<Subscription['Arbitrum_tokenWhitelistSymbols'], SubscriptionArbitrum_tokenWhitelistSymbolsArgs, MeshContext>,
  /** null **/
  Arbitrum_protocol: InContextSdkMethod<Arbitrum_DexAmmProtocol, SubscriptionArbitrum_protocolArgs, MeshContext>,
  /** null **/
  Arbitrum_protocols: InContextSdkMethod<[Arbitrum_DexAmmProtocol!]!, SubscriptionArbitrum_protocolsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  Arbitrum__meta: InContextSdkMethod<Subscription['Arbitrum__meta'], SubscriptionArbitrum__metaArgs, MeshContext>
  };

  export type Context = {
      ["uniswapv3-arbitrum"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
