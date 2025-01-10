import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeftRight, Calculator } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { SlippageResult } from "@/types";
import { PacmanLoader } from "react-spinners";
import { useTheme } from "next-themes";

const OptimismEzethWstethSwapSimulation = () => {
  const [optimismEzethWstethResult, setOptimismEzethWstethResult] =
    useState<SlippageResult | null>(null);
  const [optimismWstethEzethResult, setOptimismWstethEzethResult] =
    useState<SlippageResult | null>(null);
  const [swapEzethWsteth, setSwapEzethWsteth] = useState(true);
  const [loading, setLoading] = useState(false);
  const [ezethAmountIn, setEzethAmountIn] = useState("");
  const [wstethAmountIn, setWstethAmountIn] = useState("");
  const { theme } = useTheme();

  const handleSwapEzethWsteth = () => {
    setSwapEzethWsteth(!swapEzethWsteth);
    setOptimismEzethWstethResult(null);
    setOptimismWstethEzethResult(null);
    setEzethAmountIn("");
    setWstethAmountIn("");
  };

  const handleCalculateSwap = async () => {
    setLoading(true);
    try {
      if (swapEzethWsteth) {
        if (ezethAmountIn) {
          try {
            const response = await fetch(
              `/api/optimism/getOptimismEzethWstethSlippage?amountIn=${ezethAmountIn}`
            );
            const contentType = response.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
              const data = await response.json();
              if (response.ok) {
                setOptimismEzethWstethResult(data.result);
                console.log(
                  "Optimism EZETH-WSTETH Slippage Result:",
                  data.result
                );
              } else {
                console.log(
                  "Error fetching Optimism EZETH-WSTETH Slippage data:",
                  data
                );
              }
            }
          } catch (error) {
            console.error(
              "Error fetching Optimism EZETH-WSTETH slippage data:",
              error
            );
          }
        } else {
          console.log("Please enter an amount for Optimism EZETH");
        }
      } else {
        if (wstethAmountIn) {
          try {
            const response = await fetch(
              `/api/optimism/getOptimismWstethEzethSlippage?amountIn=${wstethAmountIn}`
            );
            const contentType = response.headers.get("content-type");

            if (contentType && contentType.includes("application/json")) {
              const data = await response.json();
              if (response.ok) {
                setOptimismWstethEzethResult(data.result);
                console.log(
                  "Optimism WSTETH-EZETH Slippage Result:",
                  data.result
                );
              } else {
                console.log(
                  "Error fetching Optimism WSTETH-EZETH Slippage data:",
                  data
                );
              }
            } else {
              console.error(
                "Unexpected response from Optimism WSTETH-EZETH Slippage API:",
                await response.text()
              );
            }
          } catch (error) {
            console.error("Error fetching WSTETH-EZETH slippage data:", error);
          }
        } else {
          console.log("Please enter an amount for WSTETH");
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
              swapEzethWsteth
                ? "/tokens/ezeth-token.svg"
                : "/tokens/steth-token.svg"
            }
            alt="token0"
            width={swapEzethWsteth ? 26 : 12}
            height={swapEzethWsteth ? 26 : 12}
          />
          <span className="font-bold text-sm sm:text-base">
            {swapEzethWsteth ? "ezETH" : "wstETH"}
          </span>
        </div>
        <Input
          className="w-full text-right pl-16 sm:pl-20 h-16 sm:h-24 font-semibold text-base sm:text-lg"
          type="number"
          min="0"
          step="any"
          value={swapEzethWsteth ? ezethAmountIn : wstethAmountIn}
          onWheel={(e) => e.currentTarget.blur()}
          onChange={(e) => {
            const value = e.target.value;
            if (parseFloat(value) >= 0 || value === "") {
              swapEzethWsteth
                ? setEzethAmountIn(value)
                : setWstethAmountIn(value);
            }
          }}
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-3 w-full items-center justify-center">
        <Button
          onClick={handleSwapEzethWsteth}
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
          {swapEzethWsteth
            ? optimismEzethWstethResult && (
                <>
                  <p>
                    <span className="font-semibold">wstETH Current Price:</span>{" "}
                    {optimismEzethWstethResult?.price?.toFixed(6)} ezETH
                  </p>
                  <p>
                    <span className="font-semibold">
                      wstETH Price After Swap:
                    </span>{" "}
                    {optimismEzethWstethResult?.priceAfter?.toFixed(6)} ezETH
                  </p>
                  <p>
                    <span className="font-semibold">Slippage:</span>{" "}
                    {optimismEzethWstethResult?.slippage?.toFixed(6)}%
                  </p>
                </>
              )
            : optimismWstethEzethResult && (
                <>
                  <p>
                    <span className="font-semibold">wstETH Current Price:</span>{" "}
                    {optimismWstethEzethResult?.price?.toFixed(6)} ezETH
                  </p>
                  <p>
                    <span className="font-semibold">
                      wstETH Price After Swap:
                    </span>{" "}
                    {optimismWstethEzethResult?.priceAfter?.toFixed(6)} ezETH
                  </p>
                  <p>
                    <span className="font-semibold">Slippage:</span>{" "}
                    {optimismWstethEzethResult?.slippage?.toFixed(6)}%
                  </p>
                </>
              )}
        </div>
      )}
    </div>
  );
};

export default OptimismEzethWstethSwapSimulation;
