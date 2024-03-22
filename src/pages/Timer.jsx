import React, { Component } from 'react';
import styles from '../styles/Timer.module.css';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      inputSeconds: '',
      isRunning: false,
    };
    this.intervalId = null;
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  handleInputChange = (e) => {
    this.setState({ inputSeconds: e.target.value });
  };

  startTimer = () => {
    const { inputSeconds, isRunning } = this.state;
    if (!isRunning && inputSeconds !== '') {
      this.intervalId = setInterval(this.tick, 1000);
      this.setState({ isRunning: true });
    }
  };

  stopTimer = () => {
    clearInterval(this.intervalId);
    this.setState({ isRunning: false });
  };

  resetTimer = () => {
    clearInterval(this.intervalId);
    this.setState({
      seconds: 0,
      inputSeconds: '',
      isRunning: false,
    });
  };

  tick = () => {
    this.setState((prevState) => ({
      seconds: prevState.seconds + 1,
    }));
  };

  render() {
    const { seconds, inputSeconds, isRunning } = this.state;
    return (
      <div className={styles.timer}>
        <h2>Timer</h2>
        <div className={styles.display}>
          <input
            type="number"
            value={inputSeconds}
            onChange={this.handleInputChange}
            placeholder="Enter time in seconds"
          />
          <button onClick={this.startTimer} disabled={isRunning}>
            Start
          </button>
          <button onClick={this.stopTimer} disabled={!isRunning}>
            Stop
          </button>
          <button onClick={this.resetTimer}>Reset</button>
        </div>
        <div className={styles.timerDisplay}>
          <span>{seconds}</span>
        </div>
      </div>
    );
  }
}

export default Timer;
