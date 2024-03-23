import React, { useState, useEffect } from 'react';

function Timer() {
  const [time, setTime] = useState(300); // 5 minutes in seconds
  const [inputVisible, setInputVisible] = useState(false);
  const [newTime, setNewTime] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const toggleInputVisibility = () => {
    setInputVisible(prev => !prev);
  };

  const handleInputChange = event => {
    setNewTime(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setTime(parseInt(newTime) * 60);
    setInputVisible(false);
  };

  const formatTime = seconds => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div>
      <div onClick={toggleInputVisibility}>
        {inputVisible ? (
          <form onSubmit={handleSubmit}>
            <input
              type="number"
              value={newTime}
              onChange={handleInputChange}
              placeholder="Enter time in minutes"
            />
            <button type="submit">Set Timer</button>
          </form>
        ) : (
          <div>{formatTime(time)}</div>
        )}
      </div>
    </div>
  );
}

export default Timer;
