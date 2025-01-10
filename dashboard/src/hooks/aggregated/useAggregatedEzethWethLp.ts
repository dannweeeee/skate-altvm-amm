import { useState, useEffect, useRef, useCallback } from "react";

export function useAggregatedEzethWethLp() {
  const [message, setMessage] = useState("");
  const [chartTicks, setChartTicks] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAggregatedEzethWethLp = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "/api/aggregated/getAggregatedEzethWethPool"
      );
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
          console.log("Error fetching Aggregated ezETH WETH data:", data);
        }
      } else {
        setMessage("Unexpected response from Aggregated ezETH WETH API.");
        console.error(
          "Unexpected response from Aggregated ezETH WETH API:",
          await response.text()
        );
        setLoading(false);
      }
    } catch (error) {
      setMessage("Failed to fetch Aggregated ezETH WETH data.");
      console.error("Error fetching Aggregated ezETH WETH data:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  return { loading, fetchAggregatedEzethWethLp };
}
