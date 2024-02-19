import Image from "next/image";
import { VideoStatus } from "./VideoStatus";

export const LatestLivestream = async () => {
  const res = await fetch(
    "https://holodex.net/api/v2/videos?channel_id=UComInW10MkHJs-_vi4rHQCQ&type=stream&status=live,past&limit=10",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-APIKEY": process.env.HOLODEX_API_KEY,
      },
    }
  );
  const data = await res.json();
  const video = data.find((video) => video.topic_id !== "shorts");
  return (
    <div className="card bg-black shadow-xl image-full w-full lg:max-w-[640px] h-[360px] flex-shrink"
    >
      <figure>
        <Image
          src={`https://i.ytimg.com/vi/${video.id}/maxresdefault.jpg`}
          alt="Dokibird"
          className="object-cover w-full"
          width={640}
          height={360}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{video.title}</h2>
        <VideoStatus video={video} />
        <div className="card-actions justify-end">
          <a
            href={`https://www.youtube.com/watch?v=${video.id}`}
            className="btn btn-accent"
          >
            Watch now
          </a>
        </div>
      </div>
    </div>
  );
};

