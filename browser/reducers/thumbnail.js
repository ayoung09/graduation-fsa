const initialState = {
  students: [],
  instructors: [],
  images: {},
};

const RECEIVE_ALL_STUDENTS = 'RECEIVE_ALL_STUDENTS';
const RECEIVE_ALL_INSTRUCTORS = 'RECEIVE_ALL_INSTRUCTORS';
const RECEIVE_ALL_IMAGES = 'RECEIVE_ALL_IMAGES';

const thumbnailReducer = (prevState = initialState, action) => {
  const newState = Object.assign({}, prevState);

  switch (action.type) {
    case RECEIVE_ALL_STUDENTS:
      newState.students = action.students;
      break;
    case RECEIVE_ALL_INSTRUCTORS:
      newState.instructors = action.instructors;
      break;
    case RECEIVE_ALL_IMAGES:
      newState.images = action.images;
    default:
      return prevState;
  }
  return newState;
};


export const receiveAllStudents = students => ({
  type: RECEIVE_ALL_STUDENTS,
  students,
});

export const receiveAllInstructors = instructors => ({
  type: RECEIVE_ALL_INSTRUCTORS,
  instructors,
});

export const receiveAllImages = images => ({
  type: RECEIVE_ALL_IMAGES,
  images,
});

export default thumbnailReducer;
