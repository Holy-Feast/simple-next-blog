import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostListComponent from '../../PostsList/PostsList';
import { Container, Title } from './styles';

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await axios.get(
                'https://jsonplaceholder.typicode.com/posts?_limit=10'
            );
            setPosts(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Container>
            <Title>Latest Posts</Title>
            {posts.length ? (
                <PostListComponent
                posts={posts}
                isButtons={false}
            />
            ) : (
                <div>No posts</div>
            )}
        </Container>
    );
};

export default Home;
