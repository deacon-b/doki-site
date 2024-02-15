export const UpcomingLivestreams = async () => {
  const res = await fetch(
    "https://holodex.net/api/v2/videos?channel_id=UComInW10MkHJs-_vi4rHQCQ&type=stream,placeholder&status=upcoming&sort=available_at&order=asc&limit=5",
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
        <div className="grid grid-cols-2 gap-3">
          {data.map((video, index) => (
            <UpcomingLivestreamCard video={video} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
const UpcomingLivestreamCard = ({ video, ...props }) => {
  return (
    <div className="card bg-base-100 shadow-xl w-42 text-base-content" {...props}>
      <div className="card-body">
        <h2 className="card-title text-sm">{video.title}</h2>
        <p>{new Date(video.available_at).toLocaleString("en-US")} 📅</p>
      </div>
    </div>
  );
};
