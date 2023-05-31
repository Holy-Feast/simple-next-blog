import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

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
    <Container>
      <PostTitle>Post {slug}</PostTitle>
      <PostContent>
        This is the content of post {slug}. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit.
      </PostContent>
    </Container>
  );
};

export default BlogPost;
