import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

import Layout from '../components/Layout';
import { Container, Title, PostList, PostListItem } from '../styles/main';

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
    <Layout>
      <Container>
        <Title>Latest Posts</Title>
        <PostList>
          {posts.length ? (
            posts.map((post) => (
              <PostListItem key={post.id}>
                <Link href={`/blog/${post.id}`} passHref>
                  {post.title}
                </Link>
              </PostListItem>
            ))
          ) : (
            <div>No posts</div>
          )}
        </PostList>
      </Container>
    </Layout>
  );
};

export default Home;
