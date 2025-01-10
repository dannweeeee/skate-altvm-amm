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

import { useOptimismEthUsdcLp } from "../../../hooks/optimism/useOptimismEthUsdcLp";
import { PacmanLoader } from "react-spinners";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";

// Import JSON file
import optimismEthUsdcChartData from "../../../../../data/optimism/OptimismEthUsdcChartTicks.json";

export function OptimismEthUsdcBarGraph() {
  const { loading, fetchOptimismEthUsdcLp } = useOptimismEthUsdcLp();
  const { theme } = useTheme();

  const chartData = optimismEthUsdcChartData.map((tick: any) => {
    return {
      tickIdx: tick.tickIdx,
      liquidityActive: tick.liquidityActive,
      liquidityLockedToken0: tick.liquidityLockedToken0,
      liquidityLockedToken1: tick.liquidityLockedToken1,
      price0: tick.price0,
      price1: tick.price1,
      isCurrent: tick.isCurrent,
      liquidityActiveChart: tick.liquidityActiveChart,
    };
  });

  const chartConfig = {
    tickIdx: {
      label: "Tick Index",
    },
    liquidityActive: {
      label: "Active Liquidity",
    },
    liquidityLockedToken0: {
      label: "ETH Locked",
    },
    liquidityLockedToken1: {
      label: "USDC Locked",
    },
    price0: {
      label: "ETH Price",
    },
    price1: {
      label: "USDC Price",
    },
    isCurrent: {
      label: "Current Tick",
    },
    liquidityActiveChart: {
      label: "Active Liquidity",
    },
  } satisfies ChartConfig;

  const handleRefresh = () => {
    fetchOptimismEthUsdcLp();
  };

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0">
        <div className="flex flex-row justify-between items-center px-6 py-5">
          <div className="flex flex-col justify-center gap-1">
            <CardTitle>USDC/ETH</CardTitle>
            <CardDescription className="flex gap-1">
              <Image
                src="/icons/op.svg"
                alt="Optimism Network"
                width={15}
                height={15}
              />
              Optimism
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
          <div className="flex justify-center items-center h-[280px]">
            <PacmanLoader
              color={theme === "dark" ? "#fff" : "#000"}
              size={25}
            />
          </div>
        ) : (
          <ChartContainer
            config={chartConfig}
            className="aspect-auto h-[280px] w-full"
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
              <Bar dataKey="liquidityActive" barSize={5} fill="#FF0000">
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
