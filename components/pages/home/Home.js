import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '@/state/actions/actions';
import PostListComponent from '../../PostsList/PostsList';
import { Container, Title } from './styled';

const Home = () => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <Container>
      <Title>Latest Posts</Title>
      <PostListComponent posts={posts} isButtons={false} />
    </Container>
  );
};

export default Home;
