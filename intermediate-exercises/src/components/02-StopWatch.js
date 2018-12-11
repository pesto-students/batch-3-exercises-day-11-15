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

function pausePlay(that) {
  if (!that.state.running) {
    that.setState({
      running: true,
    });
    that.intrvalId = window.setInterval(() => {
      that.setState({
        currentTime : that.state.currentTime + 1,
      });
    }, 1000);
  }
  if(that.state.running){
    clearInterval(that.intrvalId);
    that.setState({
      running: false,
      currentTime : that.state.currentTime,
    });
  }
}

function clear(that){
  that.setState({
    running: false,
    currentTime: 0,
  });
}

class StopWatch extends Component {
  state = {
    running: false,
    currentTime: 0,
  };
  render() {
    return (
      <React.Fragment>
        <div>Stop Watch</div>
        <p>{this.state.currentTime}</p>
        <button onClick={() => pausePlay(this)}>
          {this.state.running ? `Stop` : `Start`}
        </button>
        <button onClick={()=>clear(this)}>Clear</button>
      </React.Fragment>
    );
  }
}

export default StopWatch;
