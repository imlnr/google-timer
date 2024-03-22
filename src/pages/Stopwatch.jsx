import React, { Component } from 'react';
import styles from '../styles/Stopwatch.module.css';

class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      milliseconds: 0,
      isRunning: false,
    };
    this.intervalId = null;
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  startStopwatch = () => {
    if (!this.state.isRunning) {
      this.intervalId = setInterval(this.tick, 10);
    } else {
      clearInterval(this.intervalId);
    }
    this.setState((prevState) => ({
      isRunning: !prevState.isRunning,
    }));
  };

  resetStopwatch = () => {
    clearInterval(this.intervalId);
    this.setState({
      seconds: 0,
      milliseconds: 0,
      isRunning: false,
    });
  };

  tick = () => {
    this.setState((prevState) => {
      let { seconds, milliseconds } = prevState;
      milliseconds += 1;
      if (milliseconds === 100) {
        milliseconds = 0;
        seconds += 1;
      }
      return {
        seconds,
        milliseconds,
      };
    });
  };

  render() {
    const { seconds, milliseconds, isRunning } = this.state;
    return (
      <div className={styles.stopwatch}>
        <h2>Stopwatch</h2>
        <div className={styles.display}>
          <span>{seconds < 10 ? `0${seconds}` : seconds}</span>:
          <span>
            {milliseconds < 10 ? `0${milliseconds}` : milliseconds}
          </span>
        </div>
        <div className={styles.controls}>
          <button onClick={this.startStopwatch}>
            {isRunning ? 'Stop' : 'Start'}
          </button>
          <button onClick={this.resetStopwatch}>Reset</button>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
