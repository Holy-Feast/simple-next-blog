import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import Comp from '../../components/Comp';
import Layout from '../../components/Layout';
const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const PostTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const PostContent = styled.p`
  font-size: 16px;
  line-height: 1.5;
`;

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <Layout>
      <Container>
        <PostTitle>Post {slug}</PostTitle>
        <Comp />
        <PostContent>
          This is the content of post {slug}. Lorem ipsum dolor sit amet amet,
          consectetur adipiscing elit.
        </PostContent>
      </Container>
    </Layout>
  );
};

export default BlogPost;
