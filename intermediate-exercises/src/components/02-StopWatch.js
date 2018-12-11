import React, { Component } from 'react';

/*
 * Exercise 2:
 *
 *  Create a `StopWatch` component that has a Start/Stop button and a Clear
 *  button.
 *
 *  Pressing Start will start a timer and the lapsed time in
 *  milliseconds should be displayed above the buttons.
 *
 *  Once started the Start button should change to Stop. Clicking Stop
 *  will stop the timer but lapsed time will be preserved.
 *
 *  Clicking Start again will resume the timer from where it left off.
 *
 *  Clicking Clear will stop the timer if it's running and reset the lapsed time to 0.
 */

class StopWatch extends Component {
  constructor(props) {
    super(props);

    this.state = { timer: 0, lastTime: null };
    this.startTimer = this.startTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.time = null;
  }

  startTimer() {
    this.time = setInterval(() => this.setState({ timer: this.state.timer + 1 }), 1);
  }

  resetTimer() {
    clearInterval(this.time);
    this.setState({
      timer: 0,
    });
  }

  pauseTimer() {
    clearInterval(this.time);
    this.setState({
      lastTime: this.time,
    });
  }

  render() {
    return (
      <div>
        <h4>Stop Watch</h4>
        <div>
          <h2>{this.state.timer} ms</h2>
          <button onClick={this.startTimer} type="button">
            Start
          </button>
          <button onClick={this.pauseTimer} type="button">
            Pause
          </button>
          <button onClick={this.resetTimer} type="button">
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default StopWatch;
