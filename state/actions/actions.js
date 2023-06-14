import axios from 'axios';

export const fetchPosts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );
      const posts = response.data;
      dispatch({ type: 'FETCH_POSTS_SUCCESS', payload: posts });
    } catch (error) {
      console.log(error);
    }
  };
};
