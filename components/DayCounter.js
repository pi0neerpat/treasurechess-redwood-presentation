import React from "react";
import Counter from "./Counter";
import useOdometer from "use-odometer";

const DayCounter = () => {
  const [count, setCount] = React.useState();

  const targetRef = React.useRef(null);
  useOdometer(targetRef, count, {
    format: "(,ddd).dddddd",
  });

  const daysIn2Seconds = 1 / (2 * 60 * 60 * 24);

  React.useEffect(() => {
    const now = new Date();
    const then = new Date("02/14/2021");
    const elapsedSeconds = now.getTime() - then.getTime();
    const elapsedDays = elapsedSeconds / (1000 * 60 * 60 * 24);
    setCount(elapsedDays);
  }, []);
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setCount(count + daysIn2Seconds);
    }, 2000);
    return () => clearTimeout(timer);
  });

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <p className="target" ref={targetRef} />
      <p
        style={{
          marginLeft: "10px",
        }}
      >
        days
      </p>
    </div>
  );
};

export default DayCounter;
