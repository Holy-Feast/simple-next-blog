import React from 'react';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm, Controller } from 'react-hook-form';

const PostModal = ({ isModalOpen, closeModalHandler, editedPost, handleEditPostAsync, handleAddPost }) => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    if (editedPost.id) {
      handleEditPostAsync(data);
    } else {
      handleAddPost(data);
    }
  };
  const sqlInjectionPattern = /^[\w\s.,!?-]*$/; 
  return (
    <Modal
      open={isModalOpen}
      onClose={closeModalHandler}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px',
          padding: '36px',
          borderRadius: '33px',
          background: '#0F111A',
          boxShadow: 'inset 23px 23px 46px #090b10, inset -23px -23px 46px #151724',
        }}
      >
        <h2>Add Post</h2>
        <Controller
          name="title"
          control={control}
          defaultValue={editedPost.title}
          rules={{
            required: 'Title is required', // Add a required validation rule
            pattern: {
              value: sqlInjectionPattern,
              message: 'Invalid characters found', // Error message for SQL injection prevention
            },
          }}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              label="Title"
              error={!!fieldState?.error}
              helperText={fieldState?.error?.message}
              style={{ borderColor: fieldState?.error ? 'red' : 'inherit' }} // Turn the border red if there is an error
            />
          )}
        />

        <Controller
          name="body"
          control={control}
          defaultValue={editedPost.body}
          rules={{
            required: 'Body is required', // Add a required validation rule
            pattern: {
              value: sqlInjectionPattern,
              message: 'Invalid characters found', // Error message for SQL injection prevention
            },
          }}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              label="Body"
              multiline
              rows={4}
              error={!!fieldState?.error}
              helperText={fieldState?.error?.message}
              style={{ borderColor: fieldState?.error ? 'red' : 'inherit' }} // Turn the border red if there is an error
            />
          )}
        />

        <Button type="submit" variant="outlined" color="secondary">
          {editedPost.id ? 'Save Changes' : 'Add Post'}
        </Button>
      </form>
    </Modal >
  );
};

export default PostModal;
