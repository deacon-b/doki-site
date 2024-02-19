const AnimatedDigit = ({ index, ...props }) => {
  const numbers = [...Array(10).keys()];

  return (
    <div className="h-9 overflow-hidden" {...props}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          transition: "all 1s",
          transform: `translateY(-${index * 36}px)`,
        }}
      >
        {numbers.map((number, i) => (
          <div className="text-3xl font-bold text-center" key={i}>
            {number}
          </div>
        ))}
      </div>
    </div>
  );
};

export const AnimatedNumbers = ({ number, separators = ",", ...props }) => {
  const numbers = number.toLocaleString('en-US').split("");
  // use AnimatedDigit, separated by commas
  return (
    <div className="flex-row flex-wrap inline-flex justify-center items-center" {...props}>
      {numbers.map((number, i) => (
        <>
          {number != "," ? (
            <AnimatedDigit index={number} key={i} />
          ) : (
            <div key={i} className="text-3xl font-bold text-center">
              {number}
            </div>
          )}
        </>
      ))}
    </div>
  );
};
