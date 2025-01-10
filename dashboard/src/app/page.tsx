"use client";
import { useState } from "react";
import PageContainer from "@/components/layout/page-container";
import { EthereumEthUsdcBarGraph } from "@/components/charts/ethereum/EthereumEthUsdcBarGraph";
import { BaseEthUsdcBarGraph } from "@/components/charts/base/BaseEthUsdcBarGraph";
import { OptimismEthUsdcBarGraph } from "@/components/charts/optimism/OptimismEthUsdcBarGraph";
import { ArbitrumEthUsdcBarGraph } from "@/components/charts/arbitrum/ArbitrumEthUsdcBarGraph";
import { EthereumEzethWethBarGraph } from "@/components/charts/ethereum/EthereumEzethWethBarGraph";
import { BaseEzethWethBarGraph } from "@/components/charts/base/BaseEzethWethBarGraph";
import { OptimismEzethWstethBarGraph } from "@/components/charts/optimism/OptimismEzethWstethBarGraph";
import { ArbitrumEzethWethBarGraph } from "@/components/charts/arbitrum/ArbitrumEzethWethBarGraph";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AggregatedEthUsdcBarGraph } from "@/components/charts/aggregated/AggregatedEthUsdcBarGraph";
import { Separator } from "@/components/ui/separator";
import { AggregatedEzethWethBarGraph } from "@/components/charts/aggregated/AggregatedEzethWethBarGraph";
import { AggregatedEzethWstethBarGraph } from "@/components/charts/aggregated/AggregatedEzethWstethBarGraph";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import EthereumUsdcEthSwapSimulation from "@/components/simulators/ethereum/UsdcEthSwapSimulation";
import BaseEthUsdcSwapSimulation from "@/components/simulators/base/EthUsdcSwapSimulation";
import OptimismUsdcEthSwapSimulation from "@/components/simulators/optimism/UsdcEthSwapSimulation";
import ArbitrumEthUsdcSwapSimulation from "@/components/simulators/arbitrum/EthUsdcSwapSimulation";
import EthereumEzethWethSwapSimulation from "@/components/simulators/ethereum/EzethWethSwapSimulation";
import BaseEzethWethSwapSimulation from "@/components/simulators/base/EzethWethSwapSimulation";
import OptimismEzethWstethSwapSimulation from "@/components/simulators/optimism/EzethWstethSwapSimulation";
import ArbitrumEzethWethSwapSimulation from "@/components/simulators/arbitrum/EzethWethSwapSimulation";
import AggregatedEthUsdcSwapSimulation from "@/components/simulators/aggregated/EthUsdcSwapSimulation";
import AggregatedEzethWethSwapSimulation from "@/components/simulators/aggregated/EzethWethSwapSimulation";

export default function Home() {
  return (
    <main>
      <PageContainer scrollable={true}>
        <div className="space-y-2">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-2xl font-bold tracking-tight">
              Liquidity Pool Aggregator
            </h2>
          </div>
          <Tabs defaultValue="ezeth" className="space-y-4">
            <TabsList>
              <TabsTrigger value="ezeth">ezETH/WETH</TabsTrigger>
              <TabsTrigger value="eth">ETH/USDC</TabsTrigger>
            </TabsList>
            <TabsContent value="ezeth" className="space-y-4">
              <div className="space-y-1">
                <h2 className="text-xl font-semibold tracking-tight">
                  Aggregated Pools
                </h2>
                <p className="text-sm text-muted-foreground">
                  ezETH Aggregated Liquidity Pools
                </p>
              </div>
              <Separator />
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-2/3">
                  <AggregatedEzethWethBarGraph />
                </div>
                <Card className="w-full md:w-1/3">
                  <CardHeader>
                    <CardTitle>Swap Simulator</CardTitle>
                    <CardDescription className="flex flex-wrap gap-1 items-center">
                      ezETH/WETH Pools on
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
                        src="/icons/arb.svg"
                        alt="Arbitrum Network"
                        width={15}
                        height={15}
                      />
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AggregatedEzethWethSwapSimulation />
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-1">
                <h2 className="text-xl font-semibold tracking-tight">
                  Liquidity Pools
                </h2>
                <p className="text-sm text-muted-foreground">
                  ezETH Liquidity Pools
                </p>
              </div>
              <Separator />

              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-2/3">
                  <EthereumEzethWethBarGraph />
                </div>
                <Card className="w-full md:w-1/3">
                  <CardHeader>
                    <CardTitle>Swap Simulator</CardTitle>
                    <CardDescription className="flex flex-wrap gap-1 items-center">
                      ezETH/WETH Pool on
                      <Image
                        src="/icons/eth.svg"
                        alt="Ethereum Network"
                        width={10}
                        height={10}
                      />
                      Ethereum
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <EthereumEzethWethSwapSimulation />
                  </CardContent>
                </Card>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-2/3">
                  <BaseEzethWethBarGraph />
                </div>
                <Card className="w-full md:w-1/3">
                  <CardHeader>
                    <CardTitle>Swap Simulator</CardTitle>
                    <CardDescription className="flex flex-wrap gap-1 items-center">
                      ezETH/WETH Pool on
                      <Image
                        src="/icons/base.svg"
                        alt="Base Network"
                        width={15}
                        height={15}
                      />
                      Base
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BaseEzethWethSwapSimulation />
                  </CardContent>
                </Card>
              </div>
              {/* <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full md:w-2/3">
                      <OptimismEzethWstethBarGraph />
                    </div>
                    <Card className="w-full md:w-1/3">
                      <CardHeader>
                        <CardTitle>Swap Simulator</CardTitle>
                        <CardDescription className="flex flex-wrap gap-1 items-center">
                          ezETH/wstETH Pool on
                          <Image
                            src="/icons/op.svg"
                            alt="Optimism Network"
                            width={15}
                            height={15}
                          />
                          Optimism
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <OptimismEzethWstethSwapSimulation />
                      </CardContent>
                    </Card>
                  </div> */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-2/3">
                  <ArbitrumEzethWethBarGraph />
                </div>
                <Card className="w-full md:w-1/3">
                  <CardHeader>
                    <CardTitle>Swap Simulator</CardTitle>
                    <CardDescription className="flex flex-wrap gap-1 items-center">
                      ezETH/WETH Pool on
                      <Image
                        src="/icons/arb.svg"
                        alt="Arbitrum Network"
                        width={15}
                        height={15}
                      />
                      Arbitrum
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ArbitrumEzethWethSwapSimulation />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="eth" className="space-y-4">
              <div className="space-y-1">
                <h2 className="text-xl font-semibold tracking-tight">
                  Aggregated Pools
                </h2>
                <p className="text-sm text-muted-foreground">
                  ETH/USDC Aggregated Liquidity Pools
                </p>
              </div>
              <Separator />
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-2/3">
                  <AggregatedEthUsdcBarGraph />
                </div>
                <Card className="w-full md:w-1/3">
                  <CardHeader>
                    <CardTitle>Swap Simulator</CardTitle>
                    <CardDescription className="flex flex-wrap gap-1 items-center">
                      ETH/USDC Pools on
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
                  </CardHeader>
                  <CardContent>
                    <AggregatedEthUsdcSwapSimulation />
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-1">
                <h2 className="text-xl font-semibold tracking-tight">
                  Liquidity Pools
                </h2>
                <p className="text-sm text-muted-foreground">
                  ETH Liquidity Pools
                </p>
              </div>
              <Separator />

              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-2/3">
                  <EthereumEthUsdcBarGraph />
                </div>
                <Card className="w-full md:w-1/3">
                  <CardHeader>
                    <CardTitle>Swap Simulator</CardTitle>
                    <CardDescription className="flex flex-wrap gap-1 items-center">
                      USDC/ETH Pool on
                      <Image
                        src="/icons/eth.svg"
                        alt="Ethereum Network"
                        width={10}
                        height={10}
                      />
                      Ethereum
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <EthereumUsdcEthSwapSimulation />
                  </CardContent>
                </Card>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-2/3">
                  <BaseEthUsdcBarGraph />
                </div>
                <Card className="w-full md:w-1/3">
                  <CardHeader>
                    <CardTitle>Swap Simulator</CardTitle>
                    <CardDescription className="flex flex-wrap gap-1 items-center">
                      ETH/USDC Pool on
                      <Image
                        src="/icons/base.svg"
                        alt="Base Network"
                        width={15}
                        height={15}
                      />
                      Base
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BaseEthUsdcSwapSimulation />
                  </CardContent>
                </Card>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-2/3">
                  <OptimismEthUsdcBarGraph />
                </div>
                <Card className="w-full md:w-1/3">
                  <CardHeader>
                    <CardTitle>Swap Simulator</CardTitle>
                    <CardDescription className="flex flex-wrap gap-1 items-center">
                      USDC/ETH Pool on
                      <Image
                        src="/icons/op.svg"
                        alt="Optimism Network"
                        width={15}
                        height={15}
                      />
                      Optimism
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <OptimismUsdcEthSwapSimulation />
                  </CardContent>
                </Card>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-2/3">
                  <ArbitrumEthUsdcBarGraph />
                </div>
                <Card className="w-full md:w-1/3">
                  <CardHeader>
                    <CardTitle>Swap Simulator</CardTitle>
                    <CardDescription className="flex flex-wrap gap-1 items-center">
                      ETH/USDC Pool on
                      <Image
                        src="/icons/arb.svg"
                        alt="Arbitrum Network"
                        width={15}
                        height={15}
                      />
                      Arbitrum
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ArbitrumEthUsdcSwapSimulation />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </PageContainer>
    </main>
  );
}
