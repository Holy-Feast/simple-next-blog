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
export const saveEditedPost = (id, updatedPostData) => {
  return {
    type: 'SAVE_EDITED_POST',
    payload: {
      id,
      updatedPostData,
    },
  };
};
export const addPost = (post) => {
  return {
    type: 'ADD_POST',
    payload: post,
  };
};

export const deletePost = (postId) => {
  return {
    type: 'DELETE_POST',
    payload: postId,
  };
};

export const addPostAsync = (newPost) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost);
      const createdPost = response.data;
      dispatch(addPost(createdPost));
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };
};

export const deletePostAsync = (postId) => {
  return async (dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      dispatch(deletePost(postId));
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };
};
