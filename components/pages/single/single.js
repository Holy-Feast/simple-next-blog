import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../../../state/actions/actions';
import { Container, PostTitle, PostContent } from './styled';

const BlogPost = () => {

  const router = useRouter();
  const { slug } = router.query;
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  // Find the post with the specified ID
  const post = posts.find((post) => post.id === slug);

  if (!post) {
    // Handle case when post is not found
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <PostTitle>{post.title}</PostTitle>
      <PostContent>
        {post.body}
      </PostContent>
    </Container>
  );
};

export default BlogPost;
