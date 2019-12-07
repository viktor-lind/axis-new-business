import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

const StyledTextField = styled(TextField)`
    margin-left: auto !important;
    margin-right: auto !important;
    margin-bottom: 5px !important;
    width: 70%;
`;

export const TextFieldComponent = ({ type, label, value, onChange }) =>
{
    return (
        <StyledTextField type={type} variant='outlined' className='textField' label={label} value={value} onChange={onChange} />
    );
}