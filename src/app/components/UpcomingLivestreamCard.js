"use client";

import { useEffect, useState } from "react";

export const UpcomingLivestreamCard = ({ video, ...props }) => {
  const [streamDay, setStreamDay] = useState(0);
  const [streamMonth, setStreamMonth] = useState(0);
  const [streamYear, setStreamYear] = useState(0);
  const [streamTime, setStreamTime] = useState("");

  var monthNames = ["JAN", "FEB", "Mar", "Apr", "May","June","July", "Aug", "Sep", "Oct", "Nov","Dec"];

  useEffect(() => {
    const date = new Date(video.available_at);
    setStreamDay(date.getDay());
    setStreamMonth(date.getMonth());
    setStreamYear(date.getFullYear());
    setStreamTime(date.toLocaleTimeString([], {timeStyle: 'short'}))
  }, []);

  return (
    <div className="card bg-base-100 shadow-xl w-42 text-base-content"
        {...props}>
      <div className="card-body relative overflow-hidden">
        <h2 className="font-black w-4/5 text-nowrap truncate text-xl mix-blend-difference text-yellow-700">{video.title}</h2>

        <p className="absolute -rotate-[20deg] left-0 top-[-10%] font-black text-8xl mix-blend-soft-light">
          {streamYear}
        </p>

        <p className="absolute rotate-[30deg] left-[50%] top-[-10%] font-black text-8xl mix-blend-soft-light">
          /
        </p>
        <p className="absolute -rotate-[60deg] left-[50%] top-[-10%] font-black text-8xl mix-blend-soft-light">
          /
        </p>

        <p className="absolute -rotate-[20deg] right-16 top-4 font-black text-6xl mix-blend-soft-light">
          {monthNames[streamMonth]} {streamDay}
        </p>

        <p className="absolute -rotate-[20deg] right-1 top-11 font-black text-4xl mix-blend-hard-light">
          {streamTime}
        </p>
      </div>
    </div>
  );
};
