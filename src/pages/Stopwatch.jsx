import React, { useState, useEffect } from 'react';
import styles from '../styles/Stopwatch.module.css';

function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [milliseconds, setMilliseconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  let intervalId = null;

  useEffect(() => {
    return () => clearInterval(intervalId);
  }, []);

  const startStopwatch = () => {
    if (!isRunning) {
      intervalId = setInterval(tick, 10);
    } else {
      clearInterval(intervalId);
    }
    setIsRunning(prevState => !prevState);
  };

  const resetStopwatch = () => {
    clearInterval(intervalId);
    setSeconds(0);
    setMilliseconds(0);
    setIsRunning(false);
  };

  const tick = () => {
    setMilliseconds(prevMilliseconds => {
      let updatedMilliseconds = prevMilliseconds + 1;
      if (updatedMilliseconds === 100) {
        setSeconds(prevSeconds => prevSeconds + 1);
        updatedMilliseconds = 0;
      }
      return updatedMilliseconds;
    });
  };

  return (
    <div className={styles.stopwatch}>
      {/* <h2>Stopwatch</h2> */}
      <div className={styles.display}>
        <span className={styles.secondstimer}>{seconds < 10 ? `0${seconds}` : seconds}<span className={styles.s}>s</span></span> <span className={styles.colon}>:</span>
        <span className={styles.secondstimer}>{milliseconds < 10 ? `0${milliseconds}` : milliseconds}<span className={styles.s}>s</span></span>
      </div>
      <div className={styles.controls}>
        <button onClick={startStopwatch}>{isRunning ? 'Stop' : 'Start'}</button>
        <button onClick={resetStopwatch}>Reset</button>
      </div>
    </div>
  );
}

export default Stopwatch;
