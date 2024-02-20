"use client";

import { useEffect, useState } from "react";

export const UpcomingLivestreamCard = ({ video, ...props }) => {
  const [availableAt, setAvailableAt] = useState("");

  useEffect(() => {
    const date = new Date(video.available_at);
    setAvailableAt(date.toLocaleString());
  }, []);

  const createGoogleCalendarEvent = () => {
    const startDate = encodeURIComponent(video.available_at);
    const endDate = encodeURIComponent(
      new Date(video.available_at).setHours(
        new Date(video.available_at).getHours() + 1
      )
    );
    const title = encodeURIComponent(video.title);
    const location = encodeURIComponent(video.channel.name); // Use channel name as location
    const descriptionUrl = `https://www.youtube.com/channel/${video.channel.id}`;
    const details = encodeURIComponent(`Join the livestream at ${descriptionUrl}`); // Use channel URL in the description

    const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&details=${details}&location=${location}`;

    window.open(googleCalendarUrl, "_blank");
  };

  return (
      <a
        href="#" 
        onClick={createGoogleCalendarEvent}
        className="card bg-base-100 shadow-xl w-42 text-base-content"
        {...props}
      >
        <div className="card-body">
          <h2 className="card-title text-sm">{video.title}</h2>
          <p>{availableAt} 📅</p>
        </div>
      </a>
  );
};
