import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeftRight, Calculator } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { SlippageResult } from "@/types";
import { PacmanLoader } from "react-spinners";
import { useTheme } from "next-themes";

const BaseEzethWethSwapSimulation = () => {
  const [baseEzethWethResult, setBaseEzethWethResult] =
    useState<SlippageResult | null>(null);
  const [baseWethEzethResult, setBaseWethEzethResult] =
    useState<SlippageResult | null>(null);
  const [swapEzethWeth, setSwapEzethWeth] = useState(true);
  const [loading, setLoading] = useState(false);
  const [ezethAmountIn, setEzethAmountIn] = useState("");
  const [wethAmountIn, setWethAmountIn] = useState("");
  const { theme } = useTheme();

  const handleSwapEzethWeth = () => {
    setSwapEzethWeth(!swapEzethWeth);
    setBaseEzethWethResult(null);
    setBaseWethEzethResult(null);
    setEzethAmountIn("");
    setWethAmountIn("");
  };

  const handleCalculateSwap = async () => {
    setLoading(true);
    try {
      if (swapEzethWeth) {
        if (ezethAmountIn) {
          try {
            const response = await fetch(
              `/api/base/getBaseEzethWethSlippage?amountIn=${ezethAmountIn}`
            );
            const contentType = response.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
              const data = await response.json();
              if (response.ok) {
                setBaseEzethWethResult(data.result);
                console.log("Base EZETH-WETH Slippage Result:", data.result);
              } else {
                console.log(
                  "Error fetching Base EZETH-WETH Slippage data:",
                  data
                );
              }
            }
          } catch (error) {
            console.error("Error fetching EZETH-WETH slippage data:", error);
          }
        } else {
          console.log("Please enter an amount for EZETH");
        }
      } else {
        if (wethAmountIn) {
          try {
            const response = await fetch(
              `/api/base/getBaseWethEzethSlippage?amountIn=${wethAmountIn}`
            );
            const contentType = response.headers.get("content-type");

            if (contentType && contentType.includes("application/json")) {
              const data = await response.json();
              if (response.ok) {
                setBaseWethEzethResult(data.result);
                console.log("Base WETH-EZETH Slippage Result:", data.result);
              } else {
                console.log(
                  "Error fetching Base WETH-EZETH Slippage data:",
                  data
                );
              }
            } else {
              console.error(
                "Unexpected response from Base WETH-EZETH Slippage API:",
                await response.text()
              );
            }
          } catch (error) {
            console.error("Error fetching WETH-EZETH slippage data:", error);
          }
        } else {
          console.log("Please enter an amount for WETH");
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
              swapEzethWeth
                ? "/tokens/ezeth-token.svg"
                : "/tokens/eth-token.svg"
            }
            alt="token0"
            width={swapEzethWeth ? 26 : 22}
            height={swapEzethWeth ? 26 : 22}
          />
          <span className="font-bold text-sm sm:text-base">
            {swapEzethWeth ? "ezETH" : "WETH"}
          </span>
        </div>
        <Input
          className="w-full text-right pl-16 sm:pl-20 h-16 sm:h-24 font-semibold text-base sm:text-lg"
          type="number"
          min="0"
          step="any"
          value={swapEzethWeth ? ezethAmountIn : wethAmountIn}
          onWheel={(e) => e.currentTarget.blur()}
          onChange={(e) => {
            const value = e.target.value;
            if (parseFloat(value) >= 0 || value === "") {
              swapEzethWeth ? setEzethAmountIn(value) : setWethAmountIn(value);
            }
          }}
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-3 w-full items-center justify-center">
        <Button
          onClick={handleSwapEzethWeth}
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
          {swapEzethWeth
            ? baseEzethWethResult && (
                <>
                  <p>
                    <span className="font-semibold">WETH Current Price:</span>{" "}
                    {baseEzethWethResult?.price?.toFixed(6)} ezETH
                  </p>
                  <p>
                    <span className="font-semibold">
                      WETH Price After Swap:
                    </span>{" "}
                    {baseEzethWethResult?.priceAfter?.toFixed(6)} ezETH
                  </p>
                  <p>
                    <span className="font-semibold">Slippage:</span>{" "}
                    {(baseEzethWethResult?.slippage * -1)?.toFixed(6)}%
                  </p>
                </>
              )
            : baseWethEzethResult && (
                <>
                  <p>
                    <span className="font-semibold">WETH Current Price:</span>{" "}
                    {baseWethEzethResult?.price?.toFixed(6)} ezETH
                  </p>
                  <p>
                    <span className="font-semibold">
                      WETH Price After Swap:
                    </span>{" "}
                    {baseWethEzethResult?.priceAfter?.toFixed(6)} ezETH
                  </p>
                  <p>
                    <span className="font-semibold">Slippage:</span>{" "}
                    {baseWethEzethResult?.slippage?.toFixed(6)}%
                  </p>
                </>
              )}
        </div>
      )}
    </div>
  );
};

export default BaseEzethWethSwapSimulation;
