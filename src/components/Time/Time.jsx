import React, { useEffect, useState } from "react";
import cl from "./Time.module.scss";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const Time = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    let interval;
    function getCurrentTime() {
      setCurrentTime(new Date());
    }

    interval = setInterval(() => getCurrentTime(), 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={cl.time}>
      <h2>
        Current UTC time: {prependZero(currentTime.getUTCHours())}:
        {prependZero(currentTime.getUTCMinutes())}:
        {prependZero(currentTime.getUTCSeconds())}
      </h2>
      <p>
        {days[currentTime.getUTCDay()]}, {currentTime.getUTCDate()}{" "}
        {months[currentTime.getUTCMonth()]} {currentTime.getUTCFullYear()}
      </p>
    </div>
  );
};

function prependZero(item) {
  if (item < 10) {
    return "0" + item;
  } else {
    return item;
  }
}
