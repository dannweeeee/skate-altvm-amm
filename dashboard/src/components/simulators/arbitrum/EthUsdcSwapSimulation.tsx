import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeftRight, Calculator } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { SlippageResult } from "@/types";
import { PacmanLoader } from "react-spinners";
import { useTheme } from "next-themes";

const ArbitrumEthUsdcSwapSimulation = () => {
  const [arbitrumUsdcEthResult, setArbitrumUsdcEthResult] =
    useState<SlippageResult | null>(null);
  const [arbitrumEthUsdcResult, setArbitrumEthUsdcResult] =
    useState<SlippageResult | null>(null);
  const [swapEthUsdc, setSwapEthUsdc] = useState(true);
  const [loading, setLoading] = useState(false);
  const [ethAmountIn, setEthAmountIn] = useState("");
  const [usdcAmountIn, setUsdcAmountIn] = useState("");
  const { theme } = useTheme();

  const handleSwapUsdcEth = () => {
    setSwapEthUsdc(!swapEthUsdc);
    setArbitrumUsdcEthResult(null);
    setArbitrumEthUsdcResult(null);
    setEthAmountIn("");
    setUsdcAmountIn("");
  };

  const handleCalculateSwap = async () => {
    setLoading(true);
    try {
      if (swapEthUsdc) {
        if (ethAmountIn) {
          try {
            const response = await fetch(
              `/api/arbitrum/getArbitrumEthUsdcSlippage?amountIn=${ethAmountIn}`
            );
            const contentType = response.headers.get("content-type");

            if (contentType && contentType.includes("application/json")) {
              const data = await response.json();
              if (response.ok) {
                setArbitrumEthUsdcResult(data.result);
                console.log("Arbitrum ETH-USDC Slippage Result:", data.result);
              } else {
                console.log(
                  "Error fetching Arbitrum ETH-USDC Slippage data:",
                  data
                );
              }
            } else {
              console.error(
                "Unexpected response from Arbitrum ETH-USDC Slippage API:",
                await response.text()
              );
            }
          } catch (error) {
            console.error("Error fetching ETH-USDC slippage data:", error);
          }
        } else {
          console.log("Please enter an amount for ETH");
        }
      } else {
        if (usdcAmountIn) {
          try {
            const response = await fetch(
              `/api/arbitrum/getArbitrumUsdcEthSlippage?amountIn=${usdcAmountIn}`
            );
            const contentType = response.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
              const data = await response.json();
              if (response.ok) {
                setArbitrumUsdcEthResult(data.result);
                console.log("Arbitrum USDC-ETH Slippage Result:", data.result);
              } else {
                console.log(
                  "Error fetching Arbitrum USDC-ETH Slippage data:",
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
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4 items-center justify-center w-full">
      <div className="relative w-full">
        <div className="absolute left-2 sm:left-5 top-1/2 flex -translate-y-1/2 items-center gap-2">
          <Image
            src={
              swapEthUsdc ? "/tokens/eth-token.svg" : "/tokens/usdc-token.svg"
            }
            alt="token0"
            width={22}
            height={22}
          />
          <span className="font-bold text-sm sm:text-base">
            {swapEthUsdc ? "ETH" : "USDC"}
          </span>
        </div>
        <Input
          className="w-full text-right pl-16 sm:pl-20 h-16 sm:h-24 font-semibold text-base sm:text-lg"
          type="number"
          min="0"
          step="any"
          value={swapEthUsdc ? ethAmountIn : usdcAmountIn}
          onWheel={(e) => e.currentTarget.blur()}
          onChange={(e) => {
            const value = e.target.value;
            if (parseFloat(value) >= 0 || value === "") {
              swapEthUsdc ? setEthAmountIn(value) : setUsdcAmountIn(value);
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
          {swapEthUsdc
            ? arbitrumEthUsdcResult && (
                <>
                  <p>
                    <span className="font-semibold">ETH Current Price:</span>{" "}
                    {(1 / arbitrumEthUsdcResult?.price)?.toFixed(6)} USDC
                  </p>
                  <p>
                    <span className="font-semibold">ETH Price After Swap:</span>{" "}
                    {(1 / arbitrumEthUsdcResult?.priceAfter)?.toFixed(6)} USDC
                  </p>
                  <p>
                    <span className="font-semibold">Slippage:</span>{" "}
                    {(arbitrumEthUsdcResult?.slippage * -1)?.toFixed(6)}%
                  </p>
                </>
              )
            : arbitrumUsdcEthResult && (
                <>
                  <p>
                    <span className="font-semibold">ETH Current Price:</span>{" "}
                    {((1 / arbitrumUsdcEthResult?.price) * 1e24)?.toFixed(6)}{" "}
                    USDC
                  </p>
                  <p>
                    <span className="font-semibold">ETH Price After Swap:</span>{" "}
                    {((1 / arbitrumUsdcEthResult?.priceAfter) * 1e24)?.toFixed(
                      6
                    )}{" "}
                    USDC
                  </p>
                  <p>
                    <span className="font-semibold">Slippage:</span>{" "}
                    {arbitrumUsdcEthResult?.slippage?.toFixed(6)}%
                  </p>
                </>
              )}
        </div>
      )}
    </div>
  );
};

export default ArbitrumEthUsdcSwapSimulation;
