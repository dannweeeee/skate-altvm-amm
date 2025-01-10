import { NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/v1/aggregated-pools/ezeth-wsteth`
    );
    const data = await response.data;

    if (response.status === 200) {
      console.log("Aggregated ezETH wstETH Pool Response Data:", data);
      return NextResponse.json({
        message: data.message,
        chartTicks: data.aggregatedTicks,
      });
    } else {
      console.log("Aggregated ezETH wstETH Pool Error Data:", data);
      return NextResponse.json({ error: data.error }, { status: 500 });
    }
  } catch (error) {
    console.error("Error processing Aggregated ezETH wstETH pool:", error);
    return NextResponse.json(
      { error: "Failed to process Aggregated ezETH wstETH pool" },
      { status: 500 }
    );
  }
}
