"use client";

import * as React from "react";
import { Bar, BarChart, Cell } from "recharts";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../ui/chart";

import { useAggregatedEthUsdcLp } from "../../../hooks/aggregated/useAggregatedEthUsdcLp";
import { PacmanLoader } from "react-spinners";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";

// Import JSON file
import aggregatedEthUsdcChartData from "../../../../../data/aggregated/AggregatedEthUsdcChartTicks.json";

export function AggregatedEthUsdcBarGraph() {
  const { loading, fetchAggregatedEthUsdcLp } = useAggregatedEthUsdcLp();
  const { theme } = useTheme();

  const chartData = aggregatedEthUsdcChartData.map((tick: any) => {
    return {
      tickIdx: tick.tickIdx,
      ethereumLiquidityActive: tick.ethereumLiquidityActive,
      optimismLiquidityActive: tick.optimismLiquidityActive,
      baseLiquidityActive: tick.baseLiquidityActive,
      arbitrumLiquidityActive: tick.arbitrumLiquidityActive,
      totalLiquidityActive: tick.totalLiquidityActive,
      totalLiquidityLockedToken0: tick.totalLiquidityLockedToken0,
      totalLiquidityLockedToken1: tick.totalLiquidityLockedToken1,
      price0: tick.price0,
      price1: tick.price1,
      isCurrent: tick.isCurrent,
    };
  });

  const chartConfig = {
    tickIdx: {
      label: "Tick Index",
    },
    ethereumLiquidityActive: {
      label: "Ethereum Liquidity",
      color: "#A9A9AF",
    },
    baseLiquidityActive: {
      label: "Base Liquidity",
      color: "#90D5FF",
    },
    optimismLiquidityActive: {
      label: "Optimism Liquidity",
      color: "#FF0000",
    },
    arbitrumLiquidityActive: {
      label: "Arbitrum Liquidity",
      color: "#E5E5E5",
    },
    totalLiquidityActive: {
      label: "Total Active Liquidity",
    },
    totalLiquidityLockedToken0: {
      label: "Total USDC Locked",
    },
    totalLiquidityLockedToken1: {
      label: "Total ETH Locked",
    },
    price0: {
      label: "USDC Price",
    },
    price1: {
      label: "ETH Price",
    },
    isCurrent: {
      label: "Current Tick",
    },
  } satisfies ChartConfig;

  const handleRefresh = () => {
    fetchAggregatedEthUsdcLp();
  };

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0">
        <div className="flex flex-row justify-between items-center px-6 py-5">
          <div className="flex flex-col justify-center gap-1">
            <CardTitle>ETH/USDC</CardTitle>
            <CardDescription className="flex gap-1">
              <Image
                src="/icons/eth.svg"
                alt="Ethereum Network"
                width={10}
                height={10}
              />
              <Image
                src="/icons/base.svg"
                alt="Base Network"
                width={15}
                height={15}
              />
              <Image
                src="/icons/op.svg"
                alt="Optimism Network"
                width={15}
                height={15}
              />
              <Image
                src="/icons/arb.svg"
                alt="Arbitrum Network"
                width={15}
                height={15}
              />
            </CardDescription>
          </div>
          <div className="flex items-center">
            <Image
              src="icons/uniswap.svg"
              alt="Uniswap"
              width={30}
              height={30}
            />
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6 relative">
        <Button className="absolute top-2 right-2 z-10" onClick={handleRefresh}>
          <RotateCcw
            className={`${theme === "dark" ? "text-black" : "text-white"}`}
            height={16}
            width={16}
          />
        </Button>
        {loading ? (
          <div className="flex justify-center items-center h-[550px]">
            <PacmanLoader
              color={theme === "dark" ? "#fff" : "#000"}
              size={25}
            />
          </div>
        ) : (
          <ChartContainer
            config={chartConfig}
            className="aspect-auto h-[550px] w-full"
          >
            <BarChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <ChartTooltip
                content={<ChartTooltipContent hideLabel />}
                wrapperStyle={{ width: 350 }}
              />
              <Bar
                dataKey="ethereumLiquidityActive"
                barSize={5}
                stackId="a"
                fill="#3D3E3F"
              >
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.isCurrent ? "#36454F" : "#A9A9AF"}
                  />
                ))}
              </Bar>
              <Bar
                dataKey="baseLiquidityActive"
                barSize={5}
                stackId="a"
                fill="#90D5FF"
              >
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.isCurrent ? "#0052FF" : "#90D5FF"}
                  />
                ))}
              </Bar>
              <Bar
                dataKey="optimismLiquidityActive"
                barSize={5}
                stackId="a"
                fill="#FF0000"
              >
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.isCurrent ? "#FF0000" : "#FAA0A0"}
                  />
                ))}
              </Bar>
              <Bar
                dataKey="arbitrumLiquidityActive"
                barSize={5}
                stackId="a"
                fill="lightblue"
              >
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.isCurrent ? "darkblue" : "lightblue"}
                  />
                ))}
              </Bar>
            </BarChart>
          </ChartContainer>
        )}
      </CardContent>
    </Card>
  );
}
