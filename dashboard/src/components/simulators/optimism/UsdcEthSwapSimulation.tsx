import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeftRight, Calculator } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { SlippageResult } from "@/types";
import { PacmanLoader } from "react-spinners";
import { useTheme } from "next-themes";

const OptimismUsdcEthSwapSimulation = () => {
  const [optimismUsdcEthResult, setOptimismUsdcEthResult] =
    useState<SlippageResult | null>(null);
  const [optimismEthUsdcResult, setOptimismEthUsdcResult] =
    useState<SlippageResult | null>(null);
  const [swapUsdcEth, setSwapUsdcEth] = useState(true);
  const [loading, setLoading] = useState(false);
  const [ethAmountIn, setEthAmountIn] = useState("");
  const [usdcAmountIn, setUsdcAmountIn] = useState("");
  const { theme } = useTheme();

  const handleSwapUsdcEth = () => {
    setSwapUsdcEth(!swapUsdcEth);
    setOptimismUsdcEthResult(null);
    setOptimismEthUsdcResult(null);
    setEthAmountIn("");
    setUsdcAmountIn("");
  };

  const handleCalculateSwap = async () => {
    setLoading(true);
    try {
      if (swapUsdcEth) {
        if (usdcAmountIn) {
          try {
            const response = await fetch(
              `/api/optimism/getOptimismUsdcEthSlippage?amountIn=${usdcAmountIn}`
            );
            const contentType = response.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
              const data = await response.json();
              if (response.ok) {
                setOptimismUsdcEthResult(data.result);
                console.log("Optimism USDC-ETH Slippage Result:", data.result);
              } else {
                console.log(
                  "Error fetching Optimism USDC-ETH Slippage data:",
                  data
                );
              }
            }
          } catch (error) {
            console.error("Error fetching USDC-ETH slippage data:", error);
          }
        } else {
          console.log("Please enter an amount for USDC");
        }
      } else {
        if (ethAmountIn) {
          try {
            const response = await fetch(
              `/api/optimism/getOptimismEthUsdcSlippage?amountIn=${ethAmountIn}`
            );
            const contentType = response.headers.get("content-type");

            if (contentType && contentType.includes("application/json")) {
              const data = await response.json();
              if (response.ok) {
                setOptimismEthUsdcResult(data.result);
                console.log("Optimism ETH-USDC Slippage Result:", data.result);
              } else {
                console.log(
                  "Error fetching Optimism ETH-USDC Slippage data:",
                  data
                );
              }
            } else {
              console.error(
                "Unexpected response from Optimism ETH-USDC Slippage API:",
                await response.text()
              );
            }
          } catch (error) {
            console.error("Error fetching ETH-USDC slippage data:", error);
          }
        } else {
          console.log("Please enter an amount for ETH");
        }
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-5 items-center justify-center">
      <div className="relative w-full">
        <div className="absolute left-5 top-1/2 flex -translate-y-1/2 items-center gap-2">
          <Image
            src={
              swapUsdcEth ? "/tokens/usdc-token.svg" : "/tokens/eth-token.svg"
            }
            alt="token0"
            width={22}
            height={22}
          />
          <span className="font-bold text-sm sm:text-base">
            {swapUsdcEth ? "USDC" : "ETH"}
          </span>
        </div>
        <Input
          className="w-full text-right pl-16 sm:pl-20 h-16 sm:h-24 font-semibold text-base sm:text-lg"
          type="number"
          min="0"
          step="any"
          value={swapUsdcEth ? usdcAmountIn : ethAmountIn}
          onWheel={(e) => e.currentTarget.blur()}
          onChange={(e) => {
            const value = e.target.value;
            if (parseFloat(value) >= 0 || value === "") {
              swapUsdcEth ? setUsdcAmountIn(value) : setEthAmountIn(value);
            }
          }}
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-3 w-full items-center justify-center">
        <Button
          onClick={handleSwapUsdcEth}
          className="text-xs w-full sm:w-auto"
        >
          <ArrowLeftRight className="h-4 w-4 mr-2" /> Switch Token
        </Button>
        <Button
          onClick={handleCalculateSwap}
          className="text-xs w-full sm:w-auto"
        >
          <Calculator className="h-4 w-4 mr-2" /> Calculate Slippage
        </Button>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-full min-h-[100px]">
          <PacmanLoader color={theme === "dark" ? "#fff" : "#000"} size={15} />
        </div>
      ) : (
        <div className="text-left w-full text-sm sm:text-base">
          {swapUsdcEth
            ? optimismUsdcEthResult && (
                <>
                  <p>
                    <span className="font-semibold">ETH Current Price:</span>{" "}
                    {optimismUsdcEthResult?.price?.toFixed(6)} USDC
                  </p>
                  <p>
                    <span className="font-semibold">ETH Price After Swap:</span>{" "}
                    {optimismUsdcEthResult?.priceAfter?.toFixed(6)} USDC
                  </p>
                  <p>
                    <span className="font-semibold">Slippage:</span>{" "}
                    {(optimismUsdcEthResult?.slippage * -1)?.toFixed(6)}%
                  </p>
                </>
              )
            : optimismEthUsdcResult && (
                <>
                  <p>
                    <span className="font-semibold">ETH Current Price:</span>{" "}
                    {(optimismEthUsdcResult?.price * 1e24)?.toFixed(6)} USDC
                  </p>
                  <p>
                    <span className="font-semibold">ETH Price After Swap:</span>{" "}
                    {(optimismEthUsdcResult?.priceAfter * 1e24)?.toFixed(6)}{" "}
                    USDC
                  </p>
                  <p>
                    <span className="font-semibold">Slippage:</span>{" "}
                    {optimismEthUsdcResult?.slippage?.toFixed(6)}%
                  </p>
                </>
              )}
        </div>
      )}
    </div>
  );
};

export default OptimismUsdcEthSwapSimulation;
