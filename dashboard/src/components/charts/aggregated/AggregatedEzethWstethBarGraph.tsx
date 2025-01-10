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

import { useAggregatedEzethWstethLp } from "../../../hooks/aggregated/useAggregatedEzethWstethLp";
import { PacmanLoader } from "react-spinners";
import { useTheme } from "next-themes";

export function AggregatedEzethWstethBarGraph() {
  const { message, chartTicks, loading } = useAggregatedEzethWstethLp();
  console.log("AGGREGATED CHART TICKS", chartTicks);
  const { theme } = useTheme();

  const chartData = chartTicks.map((tick: any) => {
    return {
      tickIdx: tick.tickIdx,
      optimismLiquidityActive: tick.optimismLiquidityActive,
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
    optimismLiquidityActive: {
      label: "Optimism Liquidity",
      color: "#FF0000",
    },
    totalLiquidityActive: {
      label: "Total Active Liquidity",
    },
    totalLiquidityLockedToken0: {
      label: "Total ezETH Locked",
    },
    totalLiquidityLockedToken1: {
      label: "Total WETH Locked",
    },
    price0: {
      label: "ezETH Price",
    },
    price1: {
      label: "WETH Price",
    },
    isCurrent: {
      label: "Current Tick",
    },
  } satisfies ChartConfig;

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>ezETH/wstETH</CardTitle>
          <CardDescription className="flex gap-1">
            <Image
              src="/icons/op.svg"
              alt="Optimism Network"
              width={15}
              height={15}
            />
          </CardDescription>
        </div>
        <div className="flex mr-10">
          <Image src="icons/uniswap.svg" alt="Uniswap" width={30} height={30} />
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
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
                wrapperStyle={{ width: 400 }}
              />
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
            </BarChart>
          </ChartContainer>
        )}
      </CardContent>
    </Card>
  );
}
