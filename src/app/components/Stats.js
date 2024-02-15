"use client";

import { useEffect, useState } from "react";
import { AnimatedNumbers } from "./AnimatedNumber";

export const Stats = ({data}) => {
  const [dataState, setDataState] = useState(data);

  // fetch every second
  useEffect(() => {
    const interval = setInterval(async () => {
      const res = await fetch("/api/stats", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-cache",
      });
      if (res.headers.get("Content-Type") !== "application/json") return
      const data = await res.json();
      setDataState(data);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-row flex-wrap justify-center">
      <div className="stat w-auto">
        <div className="stat-title text-neutral-content">Subscribers</div>
        <AnimatedNumbers
          number={dataState.est_sub}
          separators=","
        />
      </div>
      <div className="stat w-auto">
        <div className="stat-title text-neutral-content">Total Views</div>
        <AnimatedNumbers
          number={dataState.table[0].count}
          separators=","
        />
      </div>
    </div>
  );
};
