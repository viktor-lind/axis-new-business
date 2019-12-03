import React from 'react';
import TextField from '@material-ui/core/TextField';

export const TextFieldComponent = ({ type, label, value, onChange }) =>
{
    return (
        <TextField label={label} value={value} onChange={onChange} />
    );
}