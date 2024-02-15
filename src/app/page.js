import { UpcomingLivestreams } from "./components/UpcomingLivestreams";
import { LatestLivestream } from "./components/LatestLivestream";
import { SocialsCard } from "./components/SocialsCard";
import { InfoCard } from "./components/InfoCard";

export default async function Home() {
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
    <main className="flex flex-col w-full min-h-screen justify-center lg:items-center gap-3 p-3"
    // add checkered.png as background pattern
    style={{
      backgroundSize: "320px",
      backgroundAttachment: "fixed",
      // background image and linear gradient dark to light
      backgroundImage: "url('checkered.png')",
      // angle the background
    }}
    >
      <div className="flex flex-col gap-3">
        <section className="flex flex-col lg:flex-row gap-3 lg:items-stretch">
          <div className="flex flex-col gap-3">
            <InfoCard />
            <SocialsCard />
          </div>
          <div className="flex flex-col gap-3">
            <LatestLivestream video={video}/>
            <UpcomingLivestreams />
          </div>
        </section>
      </div>
    </main>
  );
}


