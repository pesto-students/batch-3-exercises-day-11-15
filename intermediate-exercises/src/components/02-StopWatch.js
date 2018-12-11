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
  constructor(props){
    super(props);
    this.state = {
      time:0,
      running:false}
      this.startTimer = this.startTimer.bind(this);
      this.clearTimer = this.clearTimer.bind(this);
  }
  startTimer= () => {
    this.setState(state => {
      if (state.running) {
        clearInterval(this.timer);
      } else {
        const startTime = Date.now() - this.state.time;
        this.timer = setInterval(() => {
          this.setState({ time: Date.now() - startTime });
        });
      }
      return { running: !state.running };
    });
  };
  clearTimer = () => {
    this.setState({ time: 0, running: false });
  };
  render() {
    return (
      <div>
        <h1>Stop Watch</h1>
        <p>{this.state.time}</p>
        <button onClick = {this.startTimer}>{this.state.running?"Stop":"Start"}</button>
        <button onClick = {this.clearTimer}>Clear</button>
        </div>
    );
  }
}

export default StopWatch;
