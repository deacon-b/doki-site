export const Avatar = ({ src, alt }) => {
  return (
    <div className="avatar">
      <div className="w-36 rounded-full">
        <img src={src} />
      </div>
    </div>
  );
};
