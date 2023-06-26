const initialState = {
  posts: [],
  openModal: false,
  editedPost: {
    id: null,
    title: '',
    body: '',
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_POSTS_SUCCESS':
      return {
        ...state,
        posts: action.payload,
      };
    case 'SET_AUTHORIZED':
      return {
        ...state,
        authorized: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
