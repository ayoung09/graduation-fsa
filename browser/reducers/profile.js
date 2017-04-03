const initialState = {
  profiles: {},
  currentProfile: "",
};

const RECEIVE_ALL_PROFILES = 'RECEIVE_ALL_PROFILES';
const SET_CURRENT_PROFILE = 'SET_CURRENT_PROFILE';

const profileReducer = (prevState = initialState, action) => {
  const newState = Object.assign({}, prevState);

  switch (action.type) {
    case RECEIVE_ALL_PROFILES:
      newState.profiles = action.profiles;
      break;
    case SET_CURRENT_PROFILE:
      newState.currentProfile = action.profileName;
      break;
    default:
      return prevState;
  }
  return newState;
};


export const receiveAllProfiles = profiles => ({
  type: RECEIVE_ALL_PROFILES,
  profiles,
});

export const setCurrentProfile = profileName => ({
  type: SET_CURRENT_PROFILE,
  profileName,
});


export default profileReducer;
