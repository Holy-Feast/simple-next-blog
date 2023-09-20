import React from 'react';
import Typography from '@mui/material/Typography';
const SqlValidationMessage = ({ fieldState }) => {
    return (
        <>
            {fieldState?.error && (
                <Typography variant="caption" color="error">
                    {fieldState.error.message}
                </Typography>
            )}
        </>
    );
};
export default SqlValidationMessage;