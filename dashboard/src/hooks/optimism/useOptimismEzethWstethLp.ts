import { useState, useEffect, useRef } from "react";

export function useOptimismEzethWstethLp() {
  const [message, setMessage] = useState("");
  const [chartTicks, setChartTicks] = useState([]);
  const [loading, setLoading] = useState(false);
  const hasFetched = useRef(false);

  useEffect(() => {
    if (hasFetched.current) return;

    async function fetchOptimismEzethWstethLp() {
      try {
        setLoading(true);
        const response = await fetch("/api/optimism/getOptimismEzethWstethPool");
        const contentType = response.headers.get("content-type");

        if (contentType && contentType.includes("application/json")) {
          const data = await response.json();
          if (response.ok) {
            setMessage(data.message);
            const processedChartTicks = JSON.parse(data.chartTicks).map(
              (tick: any) => ({
                tickIdx: tick.tickIdx,
                liquidityActive: tick.liquidityActive,
                liquidityLockedToken0: tick.liquidityLockedToken0,
                liquidityLockedToken1: tick.liquidityLockedToken1,
                price0: tick.price0,
                price1: tick.price1,
                isCurrent: tick.isCurrent,
                liquidityActiveChart: tick.liquidityActiveChart,
              })
            );
            setChartTicks(processedChartTicks);
            console.log("Processed Chart Ticks:", processedChartTicks);
            setLoading(false);
          } else {
            setMessage(data.error);
            console.log("Error fetching Optimism ezETH wstETH LP data:", data);
            setLoading(false);
          }
        } else {
          setMessage("Unexpected response from Optimism ezETH wstETH LP API.");
          console.error(
            "Unexpected response from Optimism ezETH wstETH LP API:",
            await response.text()
          );
          setLoading(false);
        }
      } catch (error) {
        setMessage("Failed to fetch Optimism ezETH wstETH LP data.");
        console.error("Error fetching Optimism ezETH wstETH LP data:", error);
        setLoading(false);
      }
    }

    fetchOptimismEzethWstethLp();
    hasFetched.current = true;
  }, []);

  return { message, chartTicks, loading };
}
