"use client";
import { useEffect, useState } from "react";

export const VideoStatus = ({ video }) => {
  const [availableAt, setAvailableAt] = useState("");

  useEffect(() => {
    const date = new Date(video.available_at);
    setAvailableAt(date.toLocaleString());
  }, []);

  return (
    <p>
      {video.status === "live"
        ? "Live now 🔴"
        : `Streamed at ${availableAt} 📅`}
    </p>
  );
};
