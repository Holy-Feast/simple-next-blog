import React, { useEffect } from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { useForm, Controller } from 'react-hook-form';
import InputField from '../InputField/InputField';
import { Form } from './styled';

const PostModal = ({ title, isModalOpen, closeModalHandler, postToEdit, handleSubmitForm, submitButtonText }) => {
  const { control, handleSubmit, reset } = useForm({defaultValues: {title: '', body: ''}});

  // Reset the form whenever the editedPost prop changes
  useEffect(() => {
      if (postToEdit){
          reset(postToEdit);
      }
  }, [postToEdit, reset]);

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
        <Form onSubmit={handleSubmit(handleSubmitForm)}>
        <h2>{title}</h2>
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
            {submitButtonText}
        </Button>
      </Form>
    </Modal>
  );
};

export default PostModal;
