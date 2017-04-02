'use strict';
import React from 'react';
import {Router, Route, IndexRedirect, browserHistory} from 'react-router';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import axios from 'axios';

import store from './store';

import AppFrame from './components/AppFrame';
import Profile from './components/Profile';

const onAppEnter = () => {
  axios.get('/api/profiles')
}

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={AppFrame} onEnter={onAppEnter}>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
);
