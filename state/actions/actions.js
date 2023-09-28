import axios from 'axios';

export const fetchPosts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        process.env.BLOG_API_URL
      );
      const posts = response.data;
      dispatch({ type: 'FETCH_POSTS_SUCCESS', payload: posts });
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        process.env.USERS_API_URL
      );
      const users = response.data;
      dispatch({ type: 'FETCH_USERS_SUCCESS', payload: users });
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

export const editPostAsync = (id, editedPost) => {
  return async (dispatch) => {
    try {
      await axios.put(process.env.BLOG_API_URL + id, editedPost);
      dispatch(saveEditedPost(id, editedPost));
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };
};

export const addPostAsync = (newPost) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(process.env.BLOG_API_URL, newPost);
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
      await axios.delete(process.env.BLOG_API_URL + postId);
      dispatch(deletePost(postId));
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };
};
