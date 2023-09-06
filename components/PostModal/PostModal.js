import React, { useEffect } from 'react';
import Modal from '@mui/material/Modal';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import { useForm, Controller } from 'react-hook-form';
import Typography from '@mui/material/Typography'; // Import Typography for displaying error message
import { Form } from './styled';

const PostModal = ({ isModalOpen, closeModalHandler, editedPost, handleEditPostAsync, handleAddPost }) => {
  const { control, handleSubmit, reset } = useForm();

  // Reset the form whenever the editedPost prop changes
  useEffect(() => {
    reset(editedPost);
  }, [editedPost, reset]);

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
      <Form
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2>Add Post</h2>
        <Controller
          name="title"
          control={control}
          rules={{
            required: 'Title is required', // Add a required validation rule
            pattern: {
              value: sqlInjectionPattern,
              message: 'Invalid characters found', // Error message for SQL injection prevention
            },
          }}
          render={({ field, fieldState }) => (
            <>
              <Input
                {...field}
                label="Title"
                error={!!fieldState?.error}
                style={{
                  width: '80%',
                  borderColor: fieldState?.error ? 'red' : 'inherit'
                }} // Turn the border red if there is an error
              />
              {fieldState?.error && (
                <Typography variant="caption" color="error">
                  {fieldState?.error?.message}
                </Typography>
              )}
            </>
          )}
        />

        <Controller
          name="body"
          control={control}
          rules={{
            required: 'Body is required', // Add a required validation rule
            pattern: {
              value: sqlInjectionPattern,
              message: 'Invalid characters found', // Error message for SQL injection prevention
            },
          }}
          render={({ field, fieldState }) => (
            <>
              <Input
                {...field}
                label="Body"
                multiline
                rows={4}
                error={!!fieldState?.error}
                style={{
                  width: '80%',
                  borderColor: fieldState?.error ? 'red' : 'inherit'
                }} // Turn the border red if there is an error
              />
              {fieldState?.error && (
                <Typography variant="caption" color="error">
                  {fieldState?.error?.message}
                </Typography>
              )}
            </>
          )}
        />

        <Button type="submit" variant="outlined" color="primary"
          style={{
            width: '60%'
          }}
        >
          {editedPost.id ? 'Save Changes' : 'Add Post'}
        </Button>
      </Form>
    </Modal>
  );
};

export default PostModal;
