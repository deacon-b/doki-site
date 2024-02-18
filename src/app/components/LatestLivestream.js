import Image from "next/image";
import { VideoStatus } from "./VideoStatus";

export const LatestLivestream = async () => {
  const res = await fetch(
    "https://holodex.net/api/v2/videos?channel_id=UComInW10MkHJs-_vi4rHQCQ&type=stream&status=live,past&limit=1",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-APIKEY": process.env.HOLODEX_API_KEY,
      },
    }
  );
  const data = await res.json();
  const video = data[0];
  return (
    <div className="card bg-base-100 shadow-xl image-full">
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

