import { UpcomingLivestreams } from "./components/UpcomingLivestreams";
import { LatestLivestream } from "./components/LatestLivestream";
import { SocialsCard } from "./components/SocialsCard";
import { InfoCard } from "./components/InfoCard";

export default function Home() {
  // fetch form https://holodex.net/api/v2/live
  return (
    <main className="flex flex-col w-full min-h-screen justify-center lg:items-center gap-3 p-3"
    // add checkered.png as background pattern
    style={{
      backgroundSize: "320px",
      backgroundAttachment: "fixed",
      // background image and linear gradient dark to light
      backgroundImage: "linear-gradient(rgba(255,255,255,0.05), rgba(0,0,0,0.5)), url('/checkered.png')",
      // angle the background
    }}
    >
      <div className="flex flex-col gap-3">
        <section className="flex flex-col lg:flex-row gap-3 lg:items-stretch">
          <div className="flex flex-col flex-1 basis-1/2 gap-3">
            <InfoCard />
            <SocialsCard />
          </div>
          <div className="flex flex-col flex-1 basis-1/2 gap-3">
            <LatestLivestream />
            <UpcomingLivestreams />
          </div>
        </section>
      </div>
    </main>
  );
}


