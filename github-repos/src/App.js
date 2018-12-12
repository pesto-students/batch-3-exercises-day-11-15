import React from 'react';
import { createStore } from 'redux';

import './App.css';

const fetchReposAction = name => ({
  type: 'GET_REPOS',
  name,
});

const initialState = { repos: [] };

const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_REPOS':

      return [
        ...state, {
          repos:
          fetch.get(`https://api.github.com/users/${action.name}/repos`)
            .then(data => data),
        },
      ];
    default:
      return state;
  }
};

const store = createStore(fetchReducer, initialState);


const App = () => (
  <div>
    <input type="text" />
    <button type="button">Get Repos</button>
    <ul>
          <li>Repo 1</li>
        </ul>
  </div>
);


export default App;
