import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory, browserHistory } from 'react-router';
import configureStore from './store';
import routes from './routes';

const store = configureStore();

import './assets/css/main.scss';

ReactDOM.render((
  <Provider store={store}>
    <Router history={hashHistory} routes={routes(store)} />
  </Provider>
), document.getElementById('app'));
