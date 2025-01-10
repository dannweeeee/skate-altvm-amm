import { useState, useEffect, useRef, useCallback } from "react";

export function useArbitrumEzethWethLp() {
  const [message, setMessage] = useState("");
  const [chartTicks, setChartTicks] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchArbitrumEzethWethLp = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/arbitrum/getArbitrumEzethWethPool");
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
        } else {
          setMessage(data.error);
          console.log("Error fetching Arbitrum ezETH WETH LP data:", data);
        }
      } else {
        setMessage("Unexpected response from Arbitrum ezETH WETH LP API.");
        console.error(
          "Unexpected response from Arbitrum ezETH WETH LP API:",
          await response.text()
        );
        setLoading(false);
      }
    } catch (error) {
      setMessage("Failed to fetch Arbitrum ezETH WETH LP data.");
      console.error("Error fetching Arbitrum ezETH WETH LP data:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  return { loading, fetchArbitrumEzethWethLp };
}
