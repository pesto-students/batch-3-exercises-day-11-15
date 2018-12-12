/*
  Exercise:

  Make `withMouse` a "higher-order component" that sends the mouse position
  to the component as props (hint: use `event.clientX` and `event.clientY`).

*/
import React from 'react';
import PropTypes from 'prop-types';

const withMouse = (App) => {
  class HOC extends React.Component{
    constructor(props){
      super.props();
      state :{}
    }
    mouse = {
      x:1,
      y:2
    }
    onMouseMove = () => {
     
    }
    render() {
      return (
        <App
        mouse = {this.mouse}
        onMouseMove = {this.onMouseMove}
        />
      )
    }
  }
  return HOC;
}

class App extends React.Component {
  render() {
    const { mouse } = this.props;

    return (
      <div className="container">
        {mouse ? (
          <h1>
            The mouse position is ({mouse.x}, {mouse.y})
          </h1>
        ) : (
          <h1>We don&#39;t know the mouse position yet :(</h1>
        )}
      </div>
    );
  }
}

App.propTypes = {
  mouse: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired,
};

const AppWithMouse = withMouse(App);

export default AppWithMouse;
