const initialState = {
  students: [],
  instructors: [],
  profiles: {},
  currentProfile: "",
};

const RECEIVE_ALL_STUDENTS = 'RECEIVE_ALL_STUDENTS';
const RECEIVE_ALL_INSTRUCTORS = 'RECEIVE_ALL_INSTRUCTORS';
const RECEIVE_ALL_PROFILES = 'RECEIVE_ALL_PROFILES';
const SET_CURRENT_PROFILE = 'SET_CURRENT_PROFILE';

export default profileReducer = (prevState = initialState, action) => {
  const newState = Object.assign({}, prevState);

  switch (action.type) {
    case RECEIVE_ALL_STUDENTS:
      newState.students = action.students;
      break;
    case RECEIVE_ALL_INSTRUCTORS:
      newState.instructors = action.instructors;
      break;
    case RECEIVE_ALL_PROFILES:
      newState.profiles = action.profiles;
      break;
    case SET_CURRENT_PROFILE:
      newState.currentProfile = action.profile;
      break;
    default:
      return prevState;
  }
  return newState;
};



