import React from 'react';
import Link from 'next/link';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import {PostGrid, PostListItem} from "@/components/PostsList/styled";

const PostListComponent = (props) => {
  if (!props.posts.length) {
    return (
      <div>No posts</div>
    )
  }
  return (
    <Grid gap={2}>
      <PostGrid item>
        {props.posts.map((post) => (
          <PostListItem variant="outlined" key={post.id}>
            <Link href={`/blog/${post.id}`} passHref>
              {post.title}
            </Link>
            {props.isButtons && (
              <div>
                <Button
                  variant="outlined"
                  color="primary"
                  size="small"
                  style={{
                    marginRight: '12px',
                  }}
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
      </PostGrid>
    </Grid>
  );
};

export default PostListComponent;
