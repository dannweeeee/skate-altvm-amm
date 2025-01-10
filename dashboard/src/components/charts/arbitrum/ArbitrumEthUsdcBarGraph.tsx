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

import { useArbitrumEthUsdcLp } from "../../../hooks/arbitrum/useArbitrumEthUsdcLp";
import { PacmanLoader } from "react-spinners";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";

// Import JSON file
import arbitrumEthUsdcChartData from "../../../../../data/arbitrum/ArbitrumEthUsdcChartTicks.json";

export function ArbitrumEthUsdcBarGraph() {
  const { loading, fetchArbitrumEthUsdcLp } = useArbitrumEthUsdcLp();
  const { theme } = useTheme();

  const chartData = arbitrumEthUsdcChartData.map((tick: any) => {
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
    fetchArbitrumEthUsdcLp();
  };

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0">
        <div className="flex flex-row justify-between items-center px-6 py-5">
          <div className="flex flex-col justify-center gap-1">
            <CardTitle>ETH/USDC</CardTitle>
            <CardDescription className="flex gap-1">
              <Image
                src="/icons/arb.svg"
                alt="Arbitrum Network"
                width={15}
                height={15}
              />
              Arbitrum
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
              <Bar dataKey="liquidityActive" barSize={5} fill="lightblue">
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
