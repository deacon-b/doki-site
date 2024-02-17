"use client";

import { useEffect, useState } from "react";

export const UpcomingLivestreamCard = ({ video, ...props }) => {
  const [availableAt, setAvailableAt] = useState("");

  useEffect(() => {
    const date = new Date(video.available_at);
    setAvailableAt(date.toLocaleString());
  }, []);

  return (
    <div
      className="card bg-base-100 shadow-xl w-42 text-base-content"
      {...props}
    >
      <div className="card-body">
        <h2 className="card-title text-sm">{video.title}</h2>
        <p>{availableAt} 📅</p>
      </div>
    </div>
  );
};
