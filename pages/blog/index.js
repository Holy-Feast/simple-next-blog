import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import Layout from '../../components/Layout';

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

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <Layout>
      <Container>
        <Title>Welcome to My Blog</Title>
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
