import { ethers } from "ethers";
import {
  ETHEREUM_WETH_TOKEN,
  ETHEREUM_USDC_TOKEN,
  ETHEREUM_EZETH_TOKEN,
} from "./lib/ethereum/constants";
import {
  calculateEthereumEthUsdcPoolSlippage,
  calculateEthereumEzethWethPoolSlippage,
  fetchEthereumEthUsdcQuote,
  fetchEthereumEzethWethQuote,
  processEthereumEthUsdcPool,
  processEthereumEzethWethPool,
} from "./services/ethereum";
import {
  calculateBaseEthUsdcPoolSlippage,
  calculateBaseEzethWethPoolSlippage,
  processBaseEthUsdcPool,
  processBaseEzethWethPool,
} from "./services/base";
import {
  calculateOptimismEthUsdcPoolSlippage,
  calculateOptimismEzethWstethPoolSlippage,
  fetchOptimismEthUsdcQuote,
  fetchOptimismEzethWstethQuote,
  processOptimismEthUsdcPool,
  processOptimismEzethWstethPool,
} from "./services/optimism";
import {
  calculateArbitrumEthUsdcPoolSlippage,
  calculateArbitrumEzethWethPoolSlippage,
  fetchArbitrumEthUsdcQuote,
  fetchArbitrumEzethWethQuote,
  processArbitrumEthUsdcPool,
  processArbitrumEzethWethPool,
} from "./services/arbitrum";
import {
  aggregateEthUsdcLiquidity,
  aggregateEzethWethLiquidity,
  aggregateEzethWstethLiquidity,
  calculateAggregatedEthUsdcPoolSlippage,
  calculateAggregatedEzethWethPoolSlippage,
  calculateAggregatedUsdcEthPoolSlippage,
  calculateAggregatedWethEzethPoolSlippage,
} from "./services/aggregated";
import {
  BASE_EZETH_TOKEN,
  BASE_USDC_TOKEN,
  BASE_WETH_TOKEN,
} from "./lib/base/constants";
import { getBaseEthUsdcPoolSlippage } from "./lib/base/eth-usdc-pool-slippage";
import { getBaseEzethWethPoolSlippage } from "./lib/base/ezeth-weth-pool-slippage";
import {
  OPTIMISM_EZETH_TOKEN,
  OPTIMISM_USDC_TOKEN,
  OPTIMISM_WETH_TOKEN,
  OPTIMISM_WSTETH_TOKEN,
} from "./lib/optimism/constants";
import {
  ARBITRUM_EZETH_TOKEN,
  ARBITRUM_USDC_TOKEN,
  ARBITRUM_WETH_TOKEN,
} from "./lib/arbitrum/constants";

async function main() {
  /** ETHEREUM */
  // await processEthereumEthUsdcPool();
  // await processEthereumEzethWethPool();
  // const usdcAmountIn = 5000;
  // await fetchEthereumEthUsdcQuote(usdcAmountIn);
  // const ezethAmountIn = 1;
  // await fetchEthereumEzethWethQuote(ezethAmountIn);
  // await calculateEthereumEthUsdcPoolSlippage(
  //   ETHEREUM_WETH_TOKEN.address,
  //   ETHEREUM_USDC_TOKEN.address,
  //   500,
  //   ethers.utils.parseUnits("1", 18)
  // );
  // await calculateEthereumEzethWethPoolSlippage(
  //   ETHEREUM_EZETH_TOKEN.address,
  //   ETHEREUM_WETH_TOKEN.address,
  //   3000,
  //   ethers.utils.parseUnits("1", 18)
  // );
  /** BASE */
  // await processBaseEthUsdcPool();
  // await processBaseEzethWethPool();
  // await calculateBaseEthUsdcPoolSlippage(
  //   BASE_USDC_TOKEN.address,
  //   BASE_WETH_TOKEN.address,
  //   500,
  //   ethers.utils.parseUnits("5000", 6)
  // );
  // await calculateBaseEzethWethPoolSlippage(
  //   BASE_WETH_TOKEN.address,
  //   BASE_EZETH_TOKEN.address,
  //   500,
  //   ethers.utils.parseUnits("1", 18)
  // );
  /** OPTIMISM */
  // await processOptimismEthUsdcPool();
  // await processOptimismEzethWstethPool();
  // const usdcAmountIn = 5000;
  // await fetchOptimismEthUsdcQuote(usdcAmountIn);
  // const wstethAmountIn = 1;
  // await fetchOptimismEzethWstethQuote(wstethAmountIn);
  // await calculateOptimismEthUsdcPoolSlippage(
  //   OPTIMISM_WETH_TOKEN.address,
  //   OPTIMISM_USDC_TOKEN.address,
  //   3000,
  //   ethers.utils.parseUnits("1", 18)
  // );
  // await calculateOptimismEzethWstethPoolSlippage(
  //   OPTIMISM_EZETH_TOKEN.address,
  //   OPTIMISM_WSTETH_TOKEN.address,
  //   3000,
  //   ethers.utils.parseUnits("1", 18)
  // );
  /** ARBITRUM */
  // await processArbitrumEthUsdcPool();
  // await processArbitrumEzethWethPool();
  // const wethAmountIn = 5;
  // await fetchArbitrumEthUsdcQuote(wethAmountIn);
  // const ezethAmountIn = 1;
  // await fetchArbitrumEzethWethQuote(ezethAmountIn);
  // await calculateArbitrumEthUsdcPoolSlippage(
  //   ARBITRUM_WETH_TOKEN.address,
  //   ARBITRUM_USDC_TOKEN.address,
  //   3000,
  //   ethers.utils.parseUnits("1", 18)
  // );
  // await calculateArbitrumEzethWethPoolSlippage(
  //   ARBITRUM_EZETH_TOKEN.address,
  //   ARBITRUM_WETH_TOKEN.address,
  //   3000,
  //   ethers.utils.parseUnits("1", 18)
  // );
  /** AGGREGATED */
  // await aggregateEthUsdcLiquidity();
  // await aggregateEzethWethLiquidity();
  // await aggregateEzethWstethLiquidity();
  // await calculateAggregatedEthUsdcPoolSlippage(
  //   ethers.utils.parseUnits("1", 18)
  // );
  // await calculateAggregatedUsdcEthPoolSlippage(
  //   ethers.utils.parseUnits("4000", 6)
  // );
  // await calculateAggregatedEzethWethPoolSlippage(
  //   ethers.utils.parseUnits("5", 18)
  // );
  // await calculateAggregatedWethEzethPoolSlippage(
  //   ethers.utils.parseUnits("5", 18)
  // );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
