import { NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/v1/ezeth-pools/optimism`
    );
    const data = await response.data;

    if (response.status === 200) {
      console.log("Optimism ezETH wstETH Pool Response Data:", data);
      return NextResponse.json({
        message: data.message,
        chartTicks: data.chartTicks,
      });
    } else {
      console.log("Optimism ezETH wstETH Pool Error Data:", data);
      return NextResponse.json({ error: data.error }, { status: 500 });
    }
  } catch (error) {
    console.error("Error processing Optimism ezETH wstETH pool:", error);
    return NextResponse.json(
      { error: "Failed to process Optimism ezETH wstETH pool" },
      { status: 500 }
    );
  }
}
