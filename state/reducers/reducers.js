
import {
  ADD_POST,
  DELETE_POST,
  FETCH_POSTS_SUCCESS,
  FETCH_USERS_SUCCESS,
  SAVE_EDITED_POST,
  SET_AUTHORIZED,
} from '@/state/constants';

const initialState = {
  posts: [],
  isModalOpen: false,
  editedPost: {
    id: null,
    title: '',
    body: '',
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
      };
    case SAVE_EDITED_POST:
      return {
        ...state,
        posts: state.posts.map((post) =>
            post.id === action.payload.id ? { ...post, ...action.payload.updatedPostData } : post
        ),
      };
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case SET_AUTHORIZED:
      return {
        ...state,
        authorized: true,
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };
    default:
      return state;
  }
};

export default rootReducer;
