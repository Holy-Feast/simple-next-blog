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
    case 'SAVE_EDITED_POST':
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.payload.id ? { ...post, ...action.payload.updatedPostData } : post
        ),
      };
    case 'ADD_POST':
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case 'DELETE_POST':
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };
    default:
      return state;
  }
};

export default rootReducer;
