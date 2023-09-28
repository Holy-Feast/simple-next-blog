import React, { useEffect, useState } from 'react';
import { Container, Title } from './styled';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import PostListComponent from '../../PostsList/PostsList';
import AddPostModal from '../../PostModal/AddPostModal'; // New modal component for adding posts
import EditPostModal from '../../PostModal/EditPostModal'; // New modal component for editing posts
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

    const closeModalHandler = () => {
        setIsAddModalOpen(false);
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

    const renderAddPostButton = () => {
        if (authorized) {
            return (
                <Button variant="outlined" color="secondary" onClick={openAddModalHandler}>
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
                <AddPostModal
                    isModalOpen={isAddModalOpen}
                    closeModalHandler={closeModalHandler}
                    editedPost={{}}
                    handleAddPost={handleAddPost}
                />
                <EditPostModal
                    isModalOpen={isEditModalOpen}
                    closeModalHandler={closeModalHandler}
                    editedPost={editedPost}
                    handleEditPostAsync={handleEditPostAsync}
                />
        </Container>
    );
};

export default Blog;
