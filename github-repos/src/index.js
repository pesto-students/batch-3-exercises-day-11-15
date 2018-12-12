import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';

ReactDOM.render(
  <Provider><App /></Provider>
  , document.getElementById('root'),
);
registerServiceWorker();
