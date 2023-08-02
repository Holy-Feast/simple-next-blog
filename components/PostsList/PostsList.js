import React from 'react';
import Link from 'next/link';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 'fit-content',
  border: 'none',
  width: '100%',
  lineHeight: '60px',
  borderRadius: '33px',
  background: 'linear-gradient(145deg, #0e0f17, #10121c)',
  boxShadow:  '17px 17px 48px #090b10, -17px -17px 48px #151724',
}));
const PostListComponent = (props) => {
  if (!props.posts.length) {
    return (
      <div>No posts</div>
    )
  }
  return (
    <Grid gap={2}>
      <Grid item sx={{
                p: 2,
                display: 'grid',
                gridTemplateColumns: { md: '1fr 1fr' },
                gap: 5,
              }}>
        {props.posts.map((post) => (
          <Item variant="outlined" key={post.id}>
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
          </Item>
        ))}
      </Grid>
    </Grid>
  );
};

export default PostListComponent;
