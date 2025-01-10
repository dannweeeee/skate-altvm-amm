import { useState, useEffect, useRef } from "react";

export function useAggregatedEzethWstethLp() {
  const [message, setMessage] = useState("");
  const [chartTicks, setChartTicks] = useState([]);
  const [loading, setLoading] = useState(false);
  const hasFetched = useRef(false);

  useEffect(() => {
    if (hasFetched.current) return;

    async function fetchAggregatedEzethWstethLp() {
      try {
        setLoading(true);
        const response = await fetch(
          "/api/aggregated/getAggregatedEzethWstethPool"
        );
        const contentType = response.headers.get("content-type");

        if (contentType && contentType.includes("application/json")) {
          const data = await response.json();
          if (response.ok) {
            setMessage(data.message);
            const processedChartTicks = JSON.parse(data.chartTicks).map(
              (tick: any) => ({
                tickIdx: tick.tickIdx,
                optimismLiquidityActive: tick.optimismLiquidityActive,
                totalLiquidityActive: tick.totalLiquidityActive,
                totalLiquidityLockedToken0: tick.totalLiquidityLockedToken0,
                totalLiquidityLockedToken1: tick.totalLiquidityLockedToken1,
                price0: tick.price0,
                price1: tick.price1,
                isCurrent: tick.isCurrent,
              })
            );
            setChartTicks(processedChartTicks);
            console.log("Processed Chart Ticks:", processedChartTicks);
            setLoading(false);
          } else {
            setMessage(data.error);
            console.log("Error fetching Aggregated ezETH wstETH data:", data);
            setLoading(false);
          }
        } else {
          setMessage("Unexpected response from Aggregated ezETH wstETH API.");
          console.error(
            "Unexpected response from Aggregated ezETH wstETH API:",
            await response.text()
          );
          setLoading(false);
        }
      } catch (error) {
        setMessage("Failed to fetch Aggregated ezETH wstETH data.");
        console.error("Error fetching Aggregated ezETH wstETH data:", error);
        setLoading(false);
      }
    }

    fetchAggregatedEzethWstethLp();
    hasFetched.current = true;
  }, []);

  return { message, chartTicks, loading };
}
