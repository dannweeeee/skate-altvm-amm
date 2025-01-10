import express, { Request, Response } from "express";
import {
  calculateEthereumEthUsdcPoolSlippage,
  calculateEthereumEzethWethPoolSlippage,
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
  processOptimismEthUsdcPool,
  processOptimismEzethWstethPool,
} from "./services/optimism";
import {
  calculateArbitrumEthUsdcPoolSlippage,
  calculateArbitrumEzethWethPoolSlippage,
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
import { ethers } from "ethers";
import {
  ETHEREUM_EZETH_TOKEN,
  ETHEREUM_USDC_TOKEN,
  ETHEREUM_WETH_TOKEN,
} from "./lib/ethereum/constants";
import {
  BASE_EZETH_TOKEN,
  BASE_USDC_TOKEN,
  BASE_WETH_TOKEN,
} from "./lib/base/constants";
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

const app = express();
const port = process.env.PORT || 3050;

/////////////////////////////////////////
///////// CHART TICKS ENDPOINTS /////////
/////////////////////////////////////////

app.get("/v1/eth-pools/ethereum", async (req: Request, res: Response) => {
  try {
    const chartTicks = await processEthereumEthUsdcPool();
    res.status(200).json({
      message: "Ethereum ETH USDC pool API Endpoint",
      chartTicks,
    });
  } catch (error) {
    console.error("Error processing Ethereum ETH USDC pool:", error);
    res.status(500).json({ error: "Failed to process Ethereum ETH USDC pool" });
  }
});

app.get("/v1/eth-pools/base", async (req: Request, res: Response) => {
  try {
    const chartTicks = await processBaseEthUsdcPool();
    res.status(200).json({
      message: "Base ETH USDC pool API Endpoint",
      chartTicks,
    });
  } catch (error) {
    console.error("Error processing Base ETH USDC pool:", error);
    res.status(500).json({ error: "Failed to process Base ETH USDC pool" });
  }
});

app.get("/v1/eth-pools/optimism", async (req: Request, res: Response) => {
  try {
    const chartTicks = await processOptimismEthUsdcPool();
    res.status(200).json({
      message: "Optimism ETH USDC pool API Endpoint",
      chartTicks,
    });
  } catch (error) {
    console.error("Error processing Optimism ETH USDC pool:", error);
    res.status(500).json({ error: "Failed to process Optimism ETH USDC pool" });
  }
});

app.get("/v1/eth-pools/arbitrum", async (req: Request, res: Response) => {
  try {
    const chartTicks = await processArbitrumEthUsdcPool();
    res.status(200).json({
      message: "Arbitrum ETH USDC pool API Endpoint",
      chartTicks,
    });
  } catch (error) {
    console.error("Error processing Arbitrum ETH USDC pool:", error);
    res.status(500).json({ error: "Failed to process Arbitrum ETH USDC pool" });
  }
});

app.get("/v1/ezeth-pools/ethereum", async (req: Request, res: Response) => {
  try {
    const chartTicks = await processEthereumEzethWethPool();
    res.status(200).json({
      message: "Ethereum ezETH WETH pool API Endpoint",
      chartTicks,
    });
  } catch (error) {
    console.error("Error processing Ethereum ezETH WETH pool:", error);
    res
      .status(500)
      .json({ error: "Failed to process Ethereum ezETH WETH pool" });
  }
});

app.get("/v1/ezeth-pools/base", async (req: Request, res: Response) => {
  try {
    const chartTicks = await processBaseEzethWethPool();
    res.status(200).json({
      message: "Base ezETH WETH pool API Endpoint",
      chartTicks,
    });
  } catch (error) {
    console.error("Error processing Base ezETH WETH pool:", error);
    res.status(500).json({ error: "Failed to process Base ezETH WETH pool" });
  }
});

app.get("/v1/ezeth-pools/optimism", async (req: Request, res: Response) => {
  try {
    const chartTicks = await processOptimismEzethWstethPool();
    res.status(200).json({
      message: "Optimism ezETH WSTETH pool API Endpoint",
      chartTicks,
    });
  } catch (error) {
    console.error("Error processing Optimism ezETH WSTETH pool:", error);
    res
      .status(500)
      .json({ error: "Failed to process Optimism ezETH WSTETH pool" });
  }
});

app.get("/v1/ezeth-pools/arbitrum", async (req: Request, res: Response) => {
  try {
    const chartTicks = await processArbitrumEzethWethPool();
    res.status(200).json({
      message: "Arbitrum ezETH WETH pool API Endpoint",
      chartTicks,
    });
  } catch (error) {
    console.error("Error processing Arbitrum ezETH WETH pool:", error);
    res
      .status(500)
      .json({ error: "Failed to process Arbitrum ezETH WETH pool" });
  }
});

app.get(
  "/v1/aggregated-pools/eth-usdc",
  async (req: Request, res: Response) => {
    try {
      const aggregatedTicks = await aggregateEthUsdcLiquidity();
      res.status(200).json({
        message: "Aggregated ETH USDC pool API Endpoint",
        aggregatedTicks,
      });
    } catch (error) {
      console.error("Error processing Aggregated ETH USDC pool:", error);
      res
        .status(500)
        .json({ error: "Failed to process Aggregated ETH USDC pool" });
    }
  }
);

app.get(
  "/v1/aggregated-pools/ezeth-weth",
  async (req: Request, res: Response) => {
    try {
      const aggregatedTicks = await aggregateEzethWethLiquidity();
      res.status(200).json({
        message: "Aggregated ezETH WETH pool API Endpoint",
        aggregatedTicks,
      });
    } catch (error) {
      console.error("Error processing Aggregated ezETH WETH pool:", error);
      res
        .status(500)
        .json({ error: "Failed to process Aggregated ezETH WETH pool" });
    }
  }
);

app.get(
  "/v1/aggregated-pools/ezeth-wsteth",
  async (req: Request, res: Response) => {
    try {
      const aggregatedTicks = await aggregateEzethWstethLiquidity();
      res.status(200).json({
        message: "Aggregated ezETH wstETH pool API Endpoint",
        aggregatedTicks,
      });
    } catch (error) {
      console.error("Error processing Aggregated ezETH wstETH pool:", error);
      res
        .status(500)
        .json({ error: "Failed to process Aggregated ezETH wstETH pool" });
    }
  }
);

/////////////////////////////////////////
////////// SLIPPAGE ENDPOINTS ///////////
/////////////////////////////////////////

app.get(
  "/v1/slippage/ethereum/eth-usdc",
  async (req: Request, res: Response) => {
    try {
      const { amountIn } = req.query;

      if (!amountIn) {
        return res.status(400).json({ error: "Missing required parameters" });
      }

      const result = await calculateEthereumEthUsdcPoolSlippage(
        ETHEREUM_WETH_TOKEN.address,
        ETHEREUM_USDC_TOKEN.address,
        500,
        ethers.utils.parseUnits(amountIn as string, 18)
      );

      res.status(200).json({
        message: "Swap Ethereum ETH to USDC slippage API Endpoint",
        result,
      });
    } catch (error) {
      console.error("Error calculating Ethereum ETH to USDC slippage:", error);
      res
        .status(500)
        .json({ error: "Failed to calculate Ethereum ETH to USDC slippage" });
    }
  }
);

app.get(
  "/v1/slippage/ethereum/usdc-eth",
  async (req: Request, res: Response) => {
    try {
      const { amountIn } = req.query;

      if (!amountIn) {
        return res.status(400).json({ error: "Missing required parameters" });
      }

      const result = await calculateEthereumEthUsdcPoolSlippage(
        ETHEREUM_USDC_TOKEN.address,
        ETHEREUM_WETH_TOKEN.address,
        500,
        ethers.utils.parseUnits(amountIn as string, 6)
      );

      res.status(200).json({
        message: "Swap Ethereum USDC to ETH slippage API Endpoint",
        result,
      });
    } catch (error) {
      console.error("Error calculating Ethereum USDC to ETH slippage:", error);
      res
        .status(500)
        .json({ error: "Failed to calculate Ethereum USDC to ETH slippage" });
    }
  }
);

app.get("/v1/slippage/base/eth-usdc", async (req: Request, res: Response) => {
  try {
    const { amountIn } = req.query;

    if (!amountIn) {
      return res.status(400).json({ error: "Missing required parameters" });
    }

    const result = await calculateBaseEthUsdcPoolSlippage(
      BASE_WETH_TOKEN.address,
      BASE_USDC_TOKEN.address,
      500,
      ethers.utils.parseUnits(amountIn as string, 18)
    );

    res.status(200).json({
      message: "Swap Base ETH to USDC slippage API Endpoint",
      result,
    });
  } catch (error) {
    console.error("Error calculating Base ETH to USDC pool slippage:", error);
    res
      .status(500)
      .json({ error: "Failed to calculate Base ETH to USDC pool slippage" });
  }
});

app.get("/v1/slippage/base/usdc-eth", async (req: Request, res: Response) => {
  try {
    const { amountIn } = req.query;

    if (!amountIn) {
      return res.status(400).json({ error: "Missing required parameters" });
    }

    const result = await calculateBaseEthUsdcPoolSlippage(
      BASE_USDC_TOKEN.address,
      BASE_WETH_TOKEN.address,
      500,
      ethers.utils.parseUnits(amountIn as string, 6)
    );

    res.status(200).json({
      message: "Swap Base USDC to ETH slippage API Endpoint",
      result,
    });
  } catch (error) {
    console.error("Error calculating Base USDC to ETH slippage:", error);
    res
      .status(500)
      .json({ error: "Failed to calculate Base USDC to ETH slippage" });
  }
});

app.get(
  "/v1/slippage/optimism/eth-usdc",
  async (req: Request, res: Response) => {
    try {
      const { amountIn } = req.query;

      if (!amountIn) {
        return res.status(400).json({ error: "Missing required parameters" });
      }

      const result = await calculateOptimismEthUsdcPoolSlippage(
        OPTIMISM_WETH_TOKEN.address,
        OPTIMISM_USDC_TOKEN.address,
        500,
        ethers.utils.parseUnits(amountIn as string, 18)
      );

      res.status(200).json({
        message: "Swap Optimism ETH to USDC slippage API Endpoint",
        result,
      });
    } catch (error) {
      console.error(
        "Error calculating Optimism ETH to USDC pool slippage:",
        error
      );
      res.status(500).json({
        error: "Failed to calculate Optimism ETH to USDC pool slippage",
      });
    }
  }
);

app.get(
  "/v1/slippage/optimism/usdc-eth",
  async (req: Request, res: Response) => {
    try {
      const { amountIn } = req.query;

      if (!amountIn) {
        return res.status(400).json({ error: "Missing required parameters" });
      }

      const result = await calculateOptimismEthUsdcPoolSlippage(
        OPTIMISM_USDC_TOKEN.address,
        OPTIMISM_WETH_TOKEN.address,
        500,
        ethers.utils.parseUnits(amountIn as string, 6)
      );

      res.status(200).json({
        message: "Swap Optimism USDC to ETH slippage API Endpoint",
        result,
      });
    } catch (error) {
      console.error("Error calculating Optimism USDC to ETH slippage:", error);
      res
        .status(500)
        .json({ error: "Failed to calculate Optimism USDC to ETH slippage" });
    }
  }
);

app.get(
  "/v1/slippage/arbitrum/eth-usdc",
  async (req: Request, res: Response) => {
    try {
      const { amountIn } = req.query;

      if (!amountIn) {
        return res.status(400).json({ error: "Missing required parameters" });
      }

      const result = await calculateArbitrumEthUsdcPoolSlippage(
        ARBITRUM_WETH_TOKEN.address,
        ARBITRUM_USDC_TOKEN.address,
        500,
        ethers.utils.parseUnits(amountIn as string, 18)
      );

      res.status(200).json({
        message: "Swap Arbitrum ETH to USDC slippage API Endpoint",
        result,
      });
    } catch (error) {
      console.error(
        "Error calculating Arbitrum ETH to USDC pool slippage:",
        error
      );
      res.status(500).json({
        error: "Failed to calculate Arbitrum ETH to USDC pool slippage",
      });
    }
  }
);

app.get(
  "/v1/slippage/arbitrum/usdc-eth",
  async (req: Request, res: Response) => {
    try {
      const { amountIn } = req.query;

      if (!amountIn) {
        return res.status(400).json({ error: "Missing required parameters" });
      }

      const result = await calculateArbitrumEthUsdcPoolSlippage(
        ARBITRUM_USDC_TOKEN.address,
        ARBITRUM_WETH_TOKEN.address,
        500,
        ethers.utils.parseUnits(amountIn as string, 6)
      );

      res.status(200).json({
        message: "Swap Arbitrum USDC to ETH slippage API Endpoint",
        result,
      });
    } catch (error) {
      console.error("Error calculating Arbitrum USDC to ETH slippage:", error);
      res
        .status(500)
        .json({ error: "Failed to calculate Arbitrum USDC to ETH slippage" });
    }
  }
);

app.get(
  "/v1/slippage/ethereum/ezeth-weth",
  async (req: Request, res: Response) => {
    try {
      const { amountIn } = req.query;

      if (!amountIn) {
        return res.status(400).json({ error: "Missing required parameters" });
      }

      const result = await calculateEthereumEzethWethPoolSlippage(
        ETHEREUM_EZETH_TOKEN.address,
        ETHEREUM_WETH_TOKEN.address,
        100,
        ethers.utils.parseUnits(amountIn as string, 18)
      );

      res.status(200).json({
        message: "Swap Ethereum ezETH to WETH slippage API Endpoint",
        result,
      });
    } catch (error) {
      console.error(
        "Error calculating Ethereum ezETH to WETH slippage:",
        error
      );
      res
        .status(500)
        .json({ error: "Failed to calculate Ethereum ezETH to WETH slippage" });
    }
  }
);

app.get(
  "/v1/slippage/ethereum/weth-ezeth",
  async (req: Request, res: Response) => {
    try {
      const { amountIn } = req.query;

      if (!amountIn) {
        return res.status(400).json({ error: "Missing required parameters" });
      }

      const result = await calculateEthereumEzethWethPoolSlippage(
        ETHEREUM_WETH_TOKEN.address,
        ETHEREUM_EZETH_TOKEN.address,
        100,
        ethers.utils.parseUnits(amountIn as string, 6)
      );

      res.status(200).json({
        message: "Swap Ethereum WETH to ezETH slippage API Endpoint",
        result,
      });
    } catch (error) {
      console.error(
        "Error calculating Ethereum WETH to ezETH slippage:",
        error
      );
      res
        .status(500)
        .json({ error: "Failed to calculate Ethereum WETH to ezETH slippage" });
    }
  }
);

app.get("/v1/slippage/base/ezeth-weth", async (req: Request, res: Response) => {
  try {
    const { amountIn } = req.query;

    if (!amountIn) {
      return res.status(400).json({ error: "Missing required parameters" });
    }

    const result = await calculateBaseEzethWethPoolSlippage(
      BASE_EZETH_TOKEN.address,
      BASE_WETH_TOKEN.address,
      500,
      ethers.utils.parseUnits(amountIn as string, 18)
    );

    res.status(200).json({
      message: "Swap Base ezETH to WETH slippage API Endpoint",
      result,
    });
  } catch (error) {
    console.error("Error calculating Base ezETH to WETH slippage:", error);
    res
      .status(500)
      .json({ error: "Failed to calculate Base ezETH to WETH slippage" });
  }
});

app.get("/v1/slippage/base/weth-ezeth", async (req: Request, res: Response) => {
  try {
    const { amountIn } = req.query;

    if (!amountIn) {
      return res.status(400).json({ error: "Missing required parameters" });
    }

    const result = await calculateBaseEzethWethPoolSlippage(
      BASE_WETH_TOKEN.address,
      BASE_EZETH_TOKEN.address,
      500,
      ethers.utils.parseUnits(amountIn as string, 6)
    );

    res.status(200).json({
      message: "Swap Base WETH to ezETH slippage API Endpoint",
      result,
    });
  } catch (error) {
    console.error("Error calculating Base WETH to ezETH slippage:", error);
    res
      .status(500)
      .json({ error: "Failed to calculate Base WETH to ezETH slippage" });
  }
});

app.get(
  "/v1/slippage/optimism/ezeth-wsteth",
  async (req: Request, res: Response) => {
    try {
      const { amountIn } = req.query;

      if (!amountIn) {
        return res.status(400).json({ error: "Missing required parameters" });
      }

      const result = await calculateOptimismEzethWstethPoolSlippage(
        OPTIMISM_EZETH_TOKEN.address,
        OPTIMISM_WSTETH_TOKEN.address,
        100,
        ethers.utils.parseUnits(amountIn as string, 18)
      );

      res.status(200).json({
        message: "Swap Optimism ezETH to wstETH slippage API Endpoint",
        result,
      });
    } catch (error) {
      console.error(
        "Error calculating Optimism ezETH to wstETH slippage:",
        error
      );
      res.status(500).json({
        error: "Failed to calculate Optimism ezETH to wstETH slippage",
      });
    }
  }
);

app.get(
  "/v1/slippage/optimism/wsteth-ezeth",
  async (req: Request, res: Response) => {
    try {
      const { amountIn } = req.query;

      if (!amountIn) {
        return res.status(400).json({ error: "Missing required parameters" });
      }

      const result = await calculateOptimismEzethWstethPoolSlippage(
        OPTIMISM_WSTETH_TOKEN.address,
        OPTIMISM_EZETH_TOKEN.address,
        100,
        ethers.utils.parseUnits(amountIn as string, 6)
      );

      res.status(200).json({
        message: "Swap Optimism wstETH to ezETH slippage API Endpoint",
        result,
      });
    } catch (error) {
      console.error(
        "Error calculating Optimism wstETH to ezETH slippage:",
        error
      );
      res.status(500).json({
        error: "Failed to calculate Optimism wstETH to ezETH slippage",
      });
    }
  }
);

app.get(
  "/v1/slippage/arbitrum/ezeth-weth",
  async (req: Request, res: Response) => {
    try {
      const { amountIn } = req.query;

      if (!amountIn) {
        return res.status(400).json({ error: "Missing required parameters" });
      }

      const result = await calculateArbitrumEzethWethPoolSlippage(
        ARBITRUM_EZETH_TOKEN.address,
        ARBITRUM_WETH_TOKEN.address,
        100,
        ethers.utils.parseUnits(amountIn as string, 18)
      );

      res.status(200).json({
        message: "Swap Arbitrum ezETH to WETH slippage API Endpoint",
        result,
      });
    } catch (error) {
      console.error(
        "Error calculating Arbitrum ezETH to WETH slippage:",
        error
      );
      res
        .status(500)
        .json({ error: "Failed to calculate Arbitrum ezETH to WETH slippage" });
    }
  }
);

app.get(
  "/v1/slippage/arbitrum/weth-ezeth",
  async (req: Request, res: Response) => {
    try {
      const { amountIn } = req.query;

      if (!amountIn) {
        return res.status(400).json({ error: "Missing required parameters" });
      }

      const result = await calculateArbitrumEzethWethPoolSlippage(
        ARBITRUM_WETH_TOKEN.address,
        ARBITRUM_EZETH_TOKEN.address,
        100,
        ethers.utils.parseUnits(amountIn as string, 6)
      );

      res.status(200).json({
        message: "Swap Arbitrum WETH to ezETH slippage API Endpoint",
        result,
      });
    } catch (error) {
      console.error(
        "Error calculating Arbitrum WETH to ezETH slippage:",
        error
      );
      res
        .status(500)
        .json({ error: "Failed to calculate Arbitrum WETH to ezETH slippage" });
    }
  }
);

app.get(
  "/v1/slippage/aggregated/eth-usdc",
  async (req: Request, res: Response) => {
    try {
      const { amountIn } = req.query;

      if (!amountIn) {
        return res.status(400).json({ error: "Missing required parameters" });
      }

      const result = await calculateAggregatedEthUsdcPoolSlippage(
        ethers.utils.parseUnits(amountIn as string, 18)
      );

      res.status(200).json({
        message: "Swap Aggregated ETH USDC slippage API Endpoint",
        result,
      });
    } catch (error) {
      console.error("Error calculating Aggregated ETH USDC slippage:", error);
      res
        .status(500)
        .json({ error: "Failed to calculate Aggregated ETH USDC slippage" });
    }
  }
);

app.get(
  "/v1/slippage/aggregated/usdc-eth",
  async (req: Request, res: Response) => {
    try {
      const { amountIn } = req.query;

      if (!amountIn) {
        return res.status(400).json({ error: "Missing required parameters" });
      }

      const result = await calculateAggregatedUsdcEthPoolSlippage(
        ethers.utils.parseUnits(amountIn as string, 6)
      );

      res.status(200).json({
        message: "Swap Aggregated USDC ETH slippage API Endpoint",
        result,
      });
    } catch (error) {
      console.error("Error calculating Aggregated USDC ETH slippage:", error);
      res
        .status(500)
        .json({ error: "Failed to calculate Aggregated USDC ETH slippage" });
    }
  }
);

app.get(
  "/v1/slippage/aggregated/ezeth-weth",
  async (req: Request, res: Response) => {
    try {
      const { amountIn } = req.query;

      if (!amountIn) {
        return res.status(400).json({ error: "Missing required parameters" });
      }

      const result = await calculateAggregatedEzethWethPoolSlippage(
        ethers.utils.parseUnits(amountIn as string, 18)
      );

      res.status(200).json({
        message: "Swap Aggregated ezETH WETH slippage API Endpoint",
        result,
      });
    } catch (error) {
      console.error("Error calculating Aggregated ezETH WETH slippage:", error);
      res
        .status(500)
        .json({ error: "Failed to calculate Aggregated ezETH WETH slippage" });
    }
  }
);

app.get(
  "/v1/slippage/aggregated/weth-ezeth",
  async (req: Request, res: Response) => {
    try {
      const { amountIn } = req.query;

      if (!amountIn) {
        return res.status(400).json({ error: "Missing required parameters" });
      }

      const result = await calculateAggregatedWethEzethPoolSlippage(
        ethers.utils.parseUnits(amountIn as string, 18)
      );

      res.status(200).json({
        message: "Swap Aggregated WETH ezETH slippage API Endpoint",
        result,
      });
    } catch (error) {
      console.error("Error calculating Aggregated WETH ezETH slippage:", error);
      res
        .status(500)
        .json({ error: "Failed to calculate Aggregated WETH ezETH slippage" });
    }
  }
);

app.listen(port, () => {
  console.log(`Server is running on port ${port}! 🎉`);
});
