import { useState, useEffect, useRef, useCallback } from "react";

export function useAggregatedEthUsdcLp() {
  const [message, setMessage] = useState("");
  const [chartTicks, setChartTicks] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAggregatedEthUsdcLp = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/aggregated/getAggregatedEthUsdcPool");
      const contentType = response.headers.get("content-type");

      if (contentType && contentType.includes("application/json")) {
        const data = await response.json();
        if (response.ok) {
          setMessage(data.message);
          const processedChartTicks = JSON.parse(data.chartTicks).map(
            (tick: any) => ({
              tickIdx: tick.tickIdx,
              ethereumLiquidityActive: tick.ethereumLiquidityActive,
              baseLiquidityActive: tick.baseLiquidityActive,
              optimismLiquidityActive: tick.optimismLiquidityActive,
              arbitrumLiquidityActive: tick.arbitrumLiquidityActive,
              totalLiquidityActive: tick.totalLiquidityActive,
              totalLiquidityLockedToken0: tick.totalLiquidityLockedToken0,
              totalLiquidityLockedToken1: tick.totalLiquidityLockedToken1,
              price0: tick.price0,
              price1: tick.price1,
              isCurrent: tick.isCurrent,
            })
          );
          setChartTicks(processedChartTicks);
        } else {
          setMessage(data.error);
          console.log("Error fetching Aggregated ETH USDC data:", data);
        }
      } else {
        setMessage("Unexpected response from Aggregated ETH USDC API.");
        console.error(
          "Unexpected response from Aggregated ETH USDC API:",
          await response.text()
        );
        setLoading(false);
      }
    } catch (error) {
      setMessage("Failed to fetch Aggregated ETH USDC data.");
      console.error("Error fetching Aggregated ETH USDC data:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  return { loading, fetchAggregatedEthUsdcLp };
}
