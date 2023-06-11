import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

import Layout from '../../components/Layout';
import axios from 'axios';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const PostList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const PostListItem = styled.li`
  margin-bottom: 10px;
`;

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [newPost, setNewPost] = useState({ title: '', body: '' });
  const [editedPost, setEditedPost] = useState({
    id: null,
    title: '',
    body: '',
  });

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      );
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);
  const openModalHandler = () => {
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };
  const openEditModalHandler = (post) => {
    if (post) {
      setEditedPost({ id: post.id, title: post.title, body: post.body });
      return;
    }
    setOpenModal(true);
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

  const addPost = async () => {
    try {
      const response = await axios.post(
        'https://jsonplaceholder.typicode.com/posts',
        editedPost
      );
      const createdPost = response.data;
      setPosts((prevPosts) => [...prevPosts, createdPost]);
      closeModalHandler();
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };

  const deletePost = async (postId) => {
    try {
      await axios.delete(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  const editPost = async (postId, updatedPostData) => {
    try {
      await axios.put(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
        updatedPostData
      );
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
          onClick={() => openEditModalHandler()}
        >
          Add Post
        </Button>
        <PostList>
          {posts.length ? (
            posts.map((post) => (
              <PostListItem key={post.id}>
                <Link href={`/blog/${post.id}`} passHref>
                  {post.title}
                </Link>
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
              </PostListItem>
            ))
          ) : (
            <div>No posts</div>
          )}
        </PostList>
      </Container>
      <Modal
        open={openModal}
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

export default Home;
