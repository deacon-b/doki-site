import { NextResponse } from "next/server";

// To handle a GET request to /api
export async function GET(request) {
  const res = await fetch(
    "https://api.socialcounts.org/youtube-live-subscriber-count/UComInW10MkHJs-_vi4rHQCQ",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
    }
  );
  const data = await res.json();
  return NextResponse.json(data, { status: 200 });
}

export const revalidate = 0;