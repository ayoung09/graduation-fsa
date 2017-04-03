'use strict';

import React from 'react';
import {Router, Route, IndexRedirect, browserHistory} from 'react-router';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import axios from 'axios';

import store from './store.jsx';
import { receiveAllProfiles, setCurrentProfile } from './reducers/profile';
import { receiveAllStudents, receiveAllInstructors, receiveAllImages } from './reducers/thumbnail';

import AppFrame from './components/AppFrame.jsx';
import Profile from './components/Profile.jsx';


const onAppEnter = () => {
  Promise.all([
    axios.get('/api/profiles'),
    axios.get('/api/thumbnails')
  ])
    .then(responses => responses.map(res => res.data))
    .then(([profiles, thumbnails]) => {
      store.dispatch(receiveAllProfiles(profiles));
      store.dispatch(receiveAllStudents(thumbnails.students));
      store.dispatch(receiveAllInstructors(thumbnails.instructors));
      store.dispatch(receiveAllImages(thumbnails.images));
    })
    .catch(err => {console.log(err);});
};

const onProfileEnter = (nextRouterState) => {
  const profileName = nextRouterState.params.profileName;
  store.dispatch(setCurrentProfile(profileName));
};

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={AppFrame} onEnter={onAppEnter}>
        <Route path="/profiles/:profileName" component={Profile} onEnter={onProfileEnter} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
);
