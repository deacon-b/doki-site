import { Avatar } from "./Avatar";
import { Stats } from "./Stats";

export const InfoCard = async () => {
  const res = await fetch(
    "https://api.socialcounts.org/youtube-live-subscriber-count/UComInW10MkHJs-_vi4rHQCQ",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache",
    }
  );
  const data = await res.json();
  return (
    <div className="card bg-neutral text-neutral-content bg-card"
    >
      <div className="card-body gap-3 items-center text-center">
        <Avatar
          src="https://yt3.googleusercontent.com/ytc/AIf8zZQ4MVaAjgVVSkTy5zKZAvHeS29JOWeq2Khhswp-PA=s176-c-k-c0x00ffffff-no-rj"
          alt="Dokibird" />
        <a
          href="https://www.youtube.com/@Dokibird"
          className="text-5xl font-bold hover:link"
        >
          Dokibird
        </a>
        <p>Let's keep laughing together 🏆 Nothing can stop us at all</p>
        <div className="divider" />
        <Stats data={data}/>
      </div>
    </div>
  );
};
