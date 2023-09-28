import React, { useEffect, useCallback } from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { useForm, Controller } from 'react-hook-form';
import InputField from '../InputField/InputField';
import { Form } from './styled';

const EditPostModal = ({ isModalOpen, closeModalHandler, editedPost, handleEditPostAsync }) => {
  const { control, handleSubmit, reset } = useForm();

  // Reset the form whenever the editedPost prop changes
  useEffect(() => {
    reset(editedPost);
  }, [editedPost, reset]);

  const onSubmit = useCallback((data) => {
      handleEditPostAsync(data);
  }, [handleEditPostAsync]);

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
        <h2>Edit Post</h2>
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
            <InputField
              label="Title"
              name="title"
              control={control}
              rules={{
                required: 'Title is required',
                pattern: {
                  value: sqlInjectionPattern,
                  message: 'Invalid characters found',
                },
              }}
              field={field}
              fieldState={fieldState}
            />
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
            <InputField
              label="Body"
              name="body"
              control={control}
              rules={{
                required: 'Body is required',
                pattern: {
                  value: sqlInjectionPattern,
                  message: 'Invalid characters found',
                },
              }}
              fieldState={fieldState}
              field={field}
              multiline
              rows={4}
            />
          )}
        />

        <Button type="submit" variant="outlined" color="primary"
          style={{
            width: '60%'
          }}
        >
          Save Changes
        </Button>
      </Form>
    </Modal>
  );
};

export default EditPostModal;
