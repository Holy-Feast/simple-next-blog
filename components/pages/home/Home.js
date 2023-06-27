import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../../state/actions/actions';
import PostListComponent from '../../PostsList/PostsList';
import { Container, Title } from './styles';

const Home = ({ posts, fetchPosts }) => {
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <Container>
      <Title>Latest Posts</Title>
        <PostListComponent posts={posts} isButtons={false} />
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

const mapDispatchToProps = {
  fetchPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
