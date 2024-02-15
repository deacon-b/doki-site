'use client';

export const UpcomingLivestreamCard = ({ video, ...props }) => {
  const [date, ] = useState(video.available_at);

  return (
    <div className="card bg-base-100 shadow-xl w-42 text-base-content" {...props}>
      <div className="card-body">
        <h2 className="card-title text-sm">{video.title}</h2>
        <p>{new Date(date).toLocaleString()} 📅</p>
      </div>
    </div>
  );
};
