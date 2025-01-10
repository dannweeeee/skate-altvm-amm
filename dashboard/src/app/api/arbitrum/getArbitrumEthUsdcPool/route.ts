import { NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/v1/eth-pools/arbitrum`
    );
    const data = await response.data;

    if (response.status === 200) {
      console.log("Arbitrum ETH USDC Pool Response Data:", data);
      return NextResponse.json({
        message: data.message,
        chartTicks: data.chartTicks,
      });
    } else {
      console.log("Arbitrum ETH USDC Pool Error Data:", data);
      return NextResponse.json({ error: data.error }, { status: 500 });
    }
  } catch (error) {
    console.error("Error processing Arbitrum ETH USDC pool:", error);
    return NextResponse.json(
      { error: "Failed to process Arbitrum ETH USDC pool" },
      { status: 500 }
    );
  }
}
