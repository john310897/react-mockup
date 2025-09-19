import React, { useState, useEffect } from 'react';
const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    // const interval = setInterval(() => {
      // setSeconds((prev) => prev + 1);
    // }, 1000);
    return () => {
      // clearInterval(interval);
    };
  }, []);
  return (
    <>
      <h3>seconds {seconds}</h3>
    </>
  );
};

export default Timer;
