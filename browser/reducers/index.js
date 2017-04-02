import { combineReducers } from 'redux';

import thumbnailReducer from './thumbnail';
import profileReducer from './profile';

const rootReducer = combineReducers({
  thumbnails: thumbnailReducer,
  profiles: profileReducer,
});

export default rootReducer;
