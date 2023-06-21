import React, { useEffect, useState } from 'react';
import { Container, Title } from './styles';

import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import PostListComponent from '../../components/PostsList';

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
            const response = await axios.get(
                'https://jsonplaceholder.typicode.com/posts'
            );
            setPosts(response.data);
        } catch (error) {
            console.log(error);
        }
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
                <PostListComponent
                    posts={posts}
                    isButtons={true}
                    openEditModalHandler={openEditModalHandler}
                    deletePost={deletePost}
                />
            ) : (
                <div>No posts</div>
            )}
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
        </Container>
    );
};

export default Blog;
