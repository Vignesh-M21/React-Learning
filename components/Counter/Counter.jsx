import React, { useState, useRef, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const requestRef = useRef(null);
  const previousTimestamp = useRef(null);
  const elapsedRef = useRef(0);

  const update = (timestamp) => {
    if (!previousTimestamp.current) {
      previousTimestamp.current = timestamp;
    }

    const delta = timestamp - previousTimestamp.current;
    elapsedRef.current += delta;

    if (elapsedRef.current >= 1000) {
      const steps = Math.floor(elapsedRef.current / 1000);
      setCount((prev) => prev + steps);
      elapsedRef.current -= steps * 1000;
    }

    previousTimestamp.current = timestamp;

    if (isRunning) {
      requestRef.current = requestAnimationFrame(update);
    }
  };

  const start = () => {
    if (!isRunning) {
      setIsRunning(true);
      previousTimestamp.current = null;
      requestRef.current = requestAnimationFrame(update);
    }
  };

  const pause = () => {
    setIsRunning(false);
    cancelAnimationFrame(requestRef.current);
  };

  const reset = () => {
    setIsRunning(false);
    cancelAnimationFrame(requestRef.current);
    setCount(0);
    elapsedRef.current = 0;
    previousTimestamp.current = null;
  };

  useEffect(() => {
    return () => cancelAnimationFrame(requestRef.current); // cleanup
  }, []);

  return (
    <div style={{ textAlign: "center", padding: 20 }}>
      <h1 style={{ fontSize: 36 }}>Count: {count}</h1>
      <div style={{ marginTop: 20 }}>
        <button onClick={start} style={{ marginRight: 10 }}>
          Start
        </button>
        <button onClick={pause} style={{ marginRight: 10 }}>
          Pause
        </button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
