import React from 'react';
import TextField from '@mui/material/TextField';
const InputField = ({ field, label, name, control, rules, fieldState }) => {
    return (
      <>
        <TextField
          {...field}
          label={label}
          control={control}
          error={!!fieldState?.error}
          style={{
            width: '80%',
          }}
          helperText={fieldState?.error?.message}
        />
      </>
    );
  };

export default InputField;
