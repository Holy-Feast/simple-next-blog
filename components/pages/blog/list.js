import React, { useEffect, useState } from 'react';
import { Container, Title } from './styled';

import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import PostListComponent from '../../PostsList/PostsList';
import PostModal from '../../PostModal/PostModal';
import {
    fetchPosts,
    editPostAsync,
    addPostAsync,
    deletePostAsync,
} from '@/state/actions/actions';
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
        if (Object.keys(post).length > 1) {
            setEditedPost(post);
            
        } else {
            setEditedPost({ title: '', body: '' });
        }
        setIsModalOpen(true);
    };
    const handleEditPostAsync = (data) => {
        dispatch(editPostAsync(data.id, { title: data.title, body: data.body }));
        closeModalHandler();
    };

    const handleAddPost = async (data) => {
        try {
            await dispatch(addPostAsync(data));
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
            {authorized && (
                <Button variant="outlined" color="secondary" onClick={() => openEditModalHandler({})}>
                    Add Post
                </Button>
            )}
            <PostListComponent
                posts={posts}
                isButtons={authorized}
                openEditModalHandler={openEditModalHandler}
                deletePost={handleDeletePost}
            />
            <PostModal
                isModalOpen={isModalOpen}
                closeModalHandler={closeModalHandler}
                editedPost={editedPost}
                handleEditPostAsync={handleEditPostAsync}
                handleAddPost={handleAddPost}
            />
        </Container>
    );
};

export default Blog;
