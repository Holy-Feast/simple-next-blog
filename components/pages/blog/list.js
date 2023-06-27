import React, { useEffect, useState } from 'react';
import { Container, Title } from './styles';

import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import PostListComponent from '../../PostsList/PostsList';
import {
    fetchPosts,
    editPostAsync,
    addPostAsync,
    deletePostAsync,
} from '../../../state/actions/actions';
const Blog = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts);
    const authorized = useSelector((state) => state.authorized);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editedPost, setEditedPost] = useState({
        id: null,
        title: '',
        body: '',
    });

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    const closeModalHandler = () => {
        setIsModalOpen(false);
    };

    const openEditModalHandler = (post) => {
        if (Object.keys(post).length) {
            setEditedPost({ id: post.id, title: post.title, body: post.body });
            setIsModalOpen(true);
        } else {
            setEditedPost({ title: '', body: '' });
            setIsModalOpen(true);
        }
    };

    const updateEditedPostData = (event) => {
        setEditedPost((prevPost) => ({
            ...prevPost,
            [event.target.name]: event.target.value,
        }));
    };

    const handleEditPostAsync = () => {
        dispatch(editPostAsync(editedPost.id, { title: editedPost.title, body: editedPost.body }));
        closeModalHandler();
    };

    const handleAddPost = async () => {
        try {
            await dispatch(addPostAsync(editedPost));
            closeModalHandler();
        } catch (error) {
            console.error('Error adding post:', error);
        }
    };

    const handleDeletePost = async (postId) => {
        try {
            await dispatch(deletePostAsync(postId));
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };

    return (
        <Container>
            <Title>Welcome to My Blog</Title>
            <Button variant="outlined" color="secondary" onClick={() => openEditModalHandler({})}>
                Add Post
            </Button>
            <PostListComponent
                posts={posts}
                isButtons={authorized}
                openEditModalHandler={openEditModalHandler}
                deletePost={handleDeletePost}
            />
            <Modal
                open={isModalOpen}
                onClose={closeModalHandler}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '16px',
                        padding: '36px',
                        borderRadius: '12px',
                        backgroundColor: '#323232',
                    }}
                >
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
                        onClick={editedPost.id ? handleEditPostAsync : handleAddPost}
                    >
                        {editedPost.id ? 'Save Changes' : 'Add Post'}
                    </Button>
                </div>
            </Modal>
        </Container>
    );
};

export default Blog;
