import { useState, useEffect, useRef } from "react";

function StopWatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setTimeElapsed(Date.now() - startTimeRef.current);
      }, 10);
    }

    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, [isRunning]);

  const start = () => {
    setIsRunning(true);
    startTimeRef.current = Date.now() - timeElapsed;
  };

  const stop = () => {
    setIsRunning(false);
  };

  const reset = () => {
    setIsRunning(false);
    setTimeElapsed(0);
  };

  const padZero = (num) => {
    return num < 10? '0' + num : num;
}

  const formatTime = () => {

    // let hours = Math.floor(timeElapsed / (1000 * 60 * 60));
    let minutes = Math.floor(timeElapsed / (1000 * 60) % 60);
    let seconds = Math.floor(timeElapsed / (1000) % 60);
    let milliseconds = Math.floor((timeElapsed % 1000) / 10);

    // for pading with zeros we could typecast to string the use the padStart function

    minutes = String(minutes).padStart(2, "0")

    return `${minutes}:${padZero(seconds)}:${padZero(milliseconds)}`;
  };

  return (
    <div className="stopwatch">
      <div className="display">{formatTime()}</div>
      <div className="controls">
        <button className="start-button" onClick={start}>
          Start
        </button>
        <button className="stop-button" onClick={stop}>
          Stop
        </button>
        <button className="reset-button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default StopWatch;
