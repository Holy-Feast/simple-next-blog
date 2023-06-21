import React from 'react';
import { useRouter } from 'next/router';

import { Container, PostTitle, PostContent } from './styles';

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
      <Container>
        <PostTitle>Post {slug}</PostTitle>
        <PostContent>
          This is the content of post {slug}. Lorem ipsum dolor sit amet amet,
          consectetur adipiscing elit.
        </PostContent>
      </Container>
  );
};

export default BlogPost;
