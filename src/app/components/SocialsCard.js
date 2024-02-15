export const SocialsCard = () => {
  return (
    <div className="card bg-neutral text-neutral-content">
      <div className="card-body items-center text-center">
        <h2 className="card-title">Social Medias</h2>
        <div className="divider m-2" />
        <div className="grid grid-cols-2 gap-3 w-full">
          <a className="btn btn-accent"
          href="https://www.youtube.com/@Dokibird"
          target="_blank"
          >Youtube</a>
          <a className="btn btn-accent"
          href="https://www.x.com/dokibird"
          target="_blank"
          >Twitter</a>
          <a className="btn btn-accent"
          href="https://www.twitch.tv/dokibird"
          target="_blank"
          >Twitch</a>
          <a className="btn btn-accent"
          href="https://www.tiktok.com/@dokibird"
          target="_blank"
          >TikTok</a>
          <a className="btn btn-accent"
          href="https://streamlabs.com/dokibird/tip"
          target="_blank"
          >Streamlabs</a>
          <a className="btn btn-accent"
          href="https://dokimerch.com/"
          target="_blank"
          >Merch</a>
        </div>
      </div>
    </div>
  );
};
