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

    // Separate state variables for add and edit modals
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editedPost, setEditedPost] = useState(null);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);
    const closeAddModalHandler = () => {
        setIsAddModalOpen(false);
    };

    const closeEditModalHandler = () => {
        setIsEditModalOpen(false);
    };

    const openAddModalHandler = () => {
        setIsAddModalOpen(true);
    };
    const openEditModalHandler = (post) => {
        setEditedPost(post);
        setIsEditModalOpen(true);

    };
    const handleEditPostAsync = (data) => {
        dispatch(editPostAsync(data.id, { title: data.title, body: data.body }));
        closeEditModalHandler();
    };

    const handleAddPost = async (data) => {
        try {
            await dispatch(addPostAsync(data));
            closeAddModalHandler();
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

    const renderAddPostButton = () => {
        if (authorized) {
            return (
                <Button variant="outlined" color="secondary" onClick={openEditModalHandler}>
                    Add Post
                </Button>
            );
        }
        return null;
    };

    return (
        <Container>
            <Title>Welcome to My Blog</Title>
            {renderAddPostButton()}
            <PostListComponent
                posts={posts}
                isButtons={authorized}
                handleEditPostAsync={handleEditPostAsync}
                deletePost={handleDeletePost}
                openEditModalHandler={openEditModalHandler}
            />
                <PostModal
                    title={'Add post'}
                    isModalOpen={isAddModalOpen}
                    closeModalHandler={closeAddModalHandler}
                    editedPost={{}}
                    handleAddPost={handleAddPost} // Ensure that you pass the function here
                    button={'Add post'}
                />
                <PostModal
                    title={'Edit post'}
                    isModalOpen={isEditModalOpen}
                    closeModalHandler={closeEditModalHandler}
                    editedPost={editedPost}
                    handleEditPostAsync={handleEditPostAsync}
                    button={'Save post'}
                />
        </Container>
    );
};

export default Blog;
