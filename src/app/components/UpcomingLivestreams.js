import { UpcomingLivestreamCard } from "./UpcomingLivestreamCard";

export const UpcomingLivestreams = async () => {
  const res = await fetch(
    "https://holodex.net/api/v2/videos?channel_id=UComInW10MkHJs-_vi4rHQCQ&type=stream,placeholder&status=upcoming&sort=available_at&order=asc",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-APIKEY": process.env.HOLODEX_API_KEY,
      },
    }
  );
  const data = await res.json();
  data.pop();
  return (
    <div className="card bg-neutral text-neutral-content">
      <div className="card-body">
        <h2 className="card-title">Upcoming Livestreams</h2>
        <div className="divider" />
        {data.length ? <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {data.map((video, index) => (
            <UpcomingLivestreamCard video={video} key={index} />
          ))}
        </div> : <p>All caught up!</p>}
      </div>
    </div>
  );
};

