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
  const previewImg = `https://i.ytimg.com/vi/${video.id}/maxresdefault.jpg`
  
  return (
    <div style={{'--image-url': `url(${previewImg})`, 'background-size': `auto 105%`}} 
        className="card bg-neutral min-h-96 bg-[image:var(--image-url)] bg-origin-border bg-center backdrop-brightness-50">
      <div className='card-body backdrop-brightness-75'>
        <h2 className="font-bold w-4/5 text-nowrap truncate text-xl">{video.title} </h2>
        <VideoStatus video={video} />
        <div className="card-actions justify-end">
          <a href={`https://www.youtube.com/watch?v=${video.id}`} className="btn btn-accent">
            Watch now
          </a>
        </div>
      </div>
    </div>
  );
};


