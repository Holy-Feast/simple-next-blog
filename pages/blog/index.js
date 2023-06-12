import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Container, Title, PostList, PostListItem } from './styles';

import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

import Layout from '../../components/Layout';
import axios from 'axios';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedPost, setEditedPost] = useState({
    id: null,
    title: '',
    body: '',
  });

  useEffect(() => {
    fetchPosts();
  }, []);
  const closeModalHandler = () => {
    setIsModalOpen(false);
  };
  
  const openEditModalHandler = (post) => {
    if (Object.keys(post).length) {
      setEditedPost({ id: post.id, title: post.title, body: post.body });
      setIsModalOpen(true);
      return;
    }
    setEditedPost({ title: '', body: '' });
    setIsModalOpen(true);
  };
  

  const updateEditedPostData = (event) => {
    setEditedPost((prevPost) => ({
      ...prevPost,
      [event.target.name]: event.target.value,
    }));
  };

  const saveEditedPost = () => {
    editPost(editedPost.id, { title: editedPost.title, body: editedPost.body });
    closeModalHandler();
  };
  const fetchPosts = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  
  const addPost = async () => {
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', editedPost);
      const createdPost = response.data;
      setPosts((prevPosts) => [...prevPosts, createdPost]);
      closeModalHandler();
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };
  
  const deletePost = async (postId) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };
  
  const editPost = async (postId, updatedPostData) => {
    try {
      await axios.put(`https://jsonplaceholder.typicode.com/posts/${postId}`, updatedPostData);
      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post.id === postId ? { ...post, ...updatedPostData } : post
        )
      );
    } catch (error) {
      console.error('Error editing post:', error);
    }
  };
  

  return (
    <Layout>
      <Container>
        <Title>Welcome to My Blog</Title>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => openEditModalHandler({})}
        >
          Add Post
        </Button>
        {posts.length ? (
          <PostList>
            {posts.map((post) => (
              <PostListItem key={post.id}>
                <Link href={`/blog/${post.id}`} passHref>
                  {post.title}
                </Link>
                <div>
                  <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    onClick={() => openEditModalHandler(post)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    size="small"
                    onClick={() => deletePost(post.id)}
                  >
                    Delete
                  </Button>
                  </div>
              </PostListItem>
            ))}
          </PostList>
        ) : (
          <div>No posts</div>
        )}
      </Container>
      <Modal
        open={isModalOpen}
        onClose={closeModalHandler}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div>
          <h2>Add Post</h2>
          <TextField
            label="Title"
            name="title"
            value={editedPost.title}
            onChange={updateEditedPostData}
          />

          <TextField
            label="Body"
            name="body"
            value={editedPost.body}
            onChange={updateEditedPostData}
            multiline
            rows={4}
          />

          <Button
            variant="outlined"
            color="secondary"
            onClick={editedPost.id ? saveEditedPost : addPost}
          >
            {editedPost.id ? 'Save Changes' : 'Add Post'}
          </Button>
        </div>
      </Modal>
    </Layout>
  );
};

export default Blog;
