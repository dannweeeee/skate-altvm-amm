import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const amountIn = searchParams.get("amountIn");

    if (!amountIn) {
      return NextResponse.json(
        { error: "Missing amountIn parameter" },
        { status: 400 }
      );
    }

    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/v1/slippage/optimism/ezeth-wsteth`,
      {
        params: {
          amountIn: amountIn.toString(),
        },
      }
    );

    const data = response.data;

    if (response.status === 200) {
      console.log("Optimism ezETH wstETH Slippage Response Data:", data);
      return NextResponse.json({
        message: data.message,
        result: data.result,
      });
    } else {
      console.log("Optimism ezETH wstETH Slippage Error Data:", data);
      return NextResponse.json({ error: data.error }, { status: 500 });
    }
  } catch (error) {
    console.error(
      "Error calculating Optimism ezETH wstETH pool slippage:",
      error
    );
    return NextResponse.json(
      { error: "Failed to calculate Optimism ezETH wstETH pool slippage" },
      { status: 500 }
    );
  }
}
