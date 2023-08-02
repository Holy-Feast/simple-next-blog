import React, { useEffect, useState } from 'react';
import { Container, Title } from './styles';

import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import PostListComponent from '../../PostsList/PostsList';
import PostModal from '../../PostModal/PostModal';
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
