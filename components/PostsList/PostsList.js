import React from 'react';
import Link from 'next/link';
import { PostList, PostListItem } from './styles';
import Button from '@mui/material/Button';

const PostListComponent = (props) => {
  if (!props.posts.length) {
    return (
      <div>No posts</div>
    )
  }
  return (
    <PostList>
      {props.posts.map((post) => (
        <PostListItem key={post.id}>
          <Link href={`/blog/${post.id}`} passHref>
            {post.title}
          </Link>
          {props.isButtons && (
            <div>
              <Button
                variant="outlined"
                color="primary"
                size="small"
                onClick={() => props.openEditModalHandler(post)}
              >
                Edit
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                size="small"
                onClick={() => props.deletePost(post.id)}
              >
                Delete
              </Button>
            </div>
          )}
        </PostListItem>
      ))}
    </PostList>
  );
};

export default PostListComponent;
