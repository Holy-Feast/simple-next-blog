import React from 'react';
import Link from 'next/link';
import { PostList, PostListItem } from './styles';
import Button from '@mui/material/Button';

const PostListComponent = ({ posts, isButtons, openEditModalHandler, deletePost }) => {
  return (
    <PostList>
      {posts.map((post) => (
        <PostListItem key={post.id}>
          <Link href={`/blog/${post.id}`} passHref>
            {post.title}
          </Link>
          {isButtons ?? 
          <div>
            <Button
              variant="outlined"
              color="primary"
              size="small"
              onClick={() => openEditModalHandler(post)}
            >
              Edit
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              size="small"
              onClick={() => deletePost(post.id)}
            >
              Delete
            </Button>
          </div>
          }
        </PostListItem>
      ))}
    </PostList>
  );
};

export default PostListComponent;
