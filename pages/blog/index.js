import React from 'react';
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
  const posts = [
    { slug: 'post-1', title: 'Post 1' },
    { slug: 'post-2', title: 'Post 2' },
  ];

  return (
    <Layout>
      <Container>
        <Title>Welcome to My Blog</Title>
        <PostList>
          {posts.map((post) => (
            <PostListItem key={post.slug}>
              <Link href={`/blog/${post.slug}`} passHref>
                {post.title}
              </Link>
            </PostListItem>
          ))}
        </PostList>
      </Container>
    </Layout>
  );
};

export default Home;
