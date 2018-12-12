import React from 'react';
import { userReducer } from './reducers.js';
import { createStore } from 'redux';
import './App.css';

const store = createStore(userReducer);


const handleSubmit = event => {
  store.dispatch({
    type : 'GET_REPO',
  });
}
const handleChange = event => {
  store.dispatch({
    type : 'TEXT_CHANGED',
    gitUserName : event.target.value,
  })
};

const GitForm = () => (
  <React.Fragment>
    <input type="text" onChange={this.handleChange} name="gitUserName" />
    <button onClick={this.handleSubmit}>Fetch Data</button>
  </React.Fragment>
);

class App extends React.Component {
  render() {
    return <GitForm />;
  }
}

export default App;
