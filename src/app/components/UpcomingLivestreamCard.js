"use client";

import { useEffect, useState } from "react";

export const UpcomingLivestreamCard = ({ video, ...props }) => {
  const [availableAt, setAvailableAt] = useState("");

  useEffect(() => {
    const date = new Date(video.available_at);
    setAvailableAt(date.toLocaleString());
  }, []);

  const addToCalendar = () => {
    const title = video.title;
    const description = "Livestream with " + video.channel_name;
    const startDateTime = video.available_at; // Assuming this is in ISO format
    const endDateTime = ""; // You can calculate end time based on duration if available

    addEventToCalendar(title, description, startDateTime, endDateTime);
  };

  const addEventToCalendar = (title, description, startDateTime, endDateTime) => {
    // Construct the calendar event in iCalendar format
    const calendarEvent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${title}
DESCRIPTION:${description}
DTSTART:${startDateTime}
DTEND:${endDateTime}
END:VEVENT
END:VCALENDAR`;

    // Convert the calendar event to a data URI
    const calendarURL = 'data:text/calendar;charset=utf8,' + encodeURIComponent(calendarEvent);

    // Open the calendar URL in a new tab/window
    window.open(calendarURL, '_blank');
  };

  return (
    <div className="card bg-base-100 shadow-xl w-42 text-base-content" {...props} onClick={addToCalendar}>
      <div className="card-body">
        <h2 className="card-title text-sm">{video.title}</h2>
        <p>{availableAt} 📅</p>
      </div>
    </div>
  );
};
