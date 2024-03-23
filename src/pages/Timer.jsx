import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/Stopwatch.module.css';

function Stopwatch() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [milliseconds, setMilliseconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [inputTime, setInputTime] = useState('');
  const [editMode, setEditMode] = useState(false); // Add edit mode state
  const intervalIdRef = useRef(null);

  useEffect(() => {
    return () => clearInterval(intervalIdRef.current);
  }, []);

  const handleInputChange = (e) => {
    setInputTime(e.target.value);
    handleStartTimer()
  };

  const handleStartStop = () => {
    if (isRunning) {
      clearInterval(intervalIdRef.current);
      setIsRunning(false);
    } else {
      handleStartTimer();
    }
  };

  const resetStopwatch = () => {
    clearInterval(intervalIdRef.current);
    setIsRunning(false);
    setInputTime('');
    setMinutes(0);
    setSeconds(0);
    setMilliseconds(0);
  };

  const handleStartTimer = () => {
    let totalMilliseconds;
    if (parseInt(inputTime) <= 60) {
      totalMilliseconds = inputTime * 1000; // Input is in seconds
    } else {
      totalMilliseconds = inputTime * 60000; // Input is in minutes
    }
    const totalSeconds = Math.floor(totalMilliseconds / 1000);
    setMinutes(Math.floor(totalSeconds / 60));
    setSeconds(totalSeconds % 60);
    setMilliseconds(0);
    setIsRunning(true);
    intervalIdRef.current = setInterval(tick, 10);
  };

  const tick = () => {
    setMilliseconds(prevMilliseconds => {
      let updatedMilliseconds = prevMilliseconds - 1;
      if (updatedMilliseconds < 0) {
        setSeconds(prevSeconds => {
          let updatedSeconds = prevSeconds - 1;
          if (updatedSeconds < 0) {
            setMinutes(prevMinutes => {
              if (prevMinutes === 0) {
                clearInterval(intervalIdRef.current);
                setIsRunning(false);
                return 0;
              }
              return prevMinutes - 1;
            });
            updatedSeconds = 59;
          }
          return updatedSeconds;
        });
        updatedMilliseconds = 99;
      }
      return updatedMilliseconds;
    });
  };

  const handleTimerClick = () => {
    if (!editMode) {
      setEditMode(true); // Enter edit mode
    } else {
      if (inputTime !== '') {
        handleStartTimer();
      }
    }
  };

  return (
    <div className={styles.stopwatch}>
      <div className={styles.stopwatchinn}>
        {editMode ? (
          <input
            type="text"
            value={inputTime}
            onChange={handleInputChange}
            className={styles.inputext}
            // placeholder="Enter time in minutes or seconds"
            autoFocus // Auto-focus the input field
            onBlur={() => setEditMode(false)} // Exit edit mode on blur
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleStartTimer();
              }
            }}
          />
        ) : (
          <span className={styles.display} onClick={handleTimerClick}>
            <span className={styles.secondstimer}>{minutes < 10 ? `0${minutes}` : minutes}<span className={styles.s}>m</span></span> <span className={styles.colon}>:</span>
            <span className={styles.secondstimer}>{seconds < 10 ? `0${seconds}` : seconds}<span className={styles.s}>s</span></span> <span className={styles.colon}>:</span>
            <span className={styles.secondstimer}>{milliseconds < 10 ? `0${milliseconds}` : milliseconds}<span className={styles.s}>ms</span></span>
          </span>
        )}
        <div className={styles.controls}>
          <button onClick={handleStartStop}>{isRunning ? 'Stop' : 'Start'}</button>
          <button onClick={resetStopwatch}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default Stopwatch;
