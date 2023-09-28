import React from 'react';
import Input from '@mui/material/Input';
import SqlValidationMessage from '../SqlValidationMessage/SqlValidationMessage';
const InputField = ({ field, label, name, control, rules, fieldState }) => {
    return (
      <>
        <Input
          {...field}
          label={label}
          control={control}
          error={!!fieldState?.error}
          style={{
            width: '80%',
            borderColor: fieldState?.error ? 'red' : 'inherit'
          }}
        />
        <SqlValidationMessage fieldState={fieldState} />
      </>
    );
  };

export default InputField;
