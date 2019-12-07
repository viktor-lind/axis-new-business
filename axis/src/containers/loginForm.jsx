import React from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { TextFieldComponent } from '../presentational/textField';

import { loginUser } from '../redux/reducers/access';

const StyledPaper = styled(Paper)`
    display: inline-grid;
    width: 30vw;
    text-align: center;
    padding: 10vw;
    position: fixed;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
`;

const StyledButton = styled(Button)`
    width: 70%;
    margin: auto !important;
`;

const mapDispatchToProps = (dispatch) =>
({
    loginUser: ({username, password}) => dispatch(loginUser({username, password})),
})

export const LoginForm = ({ loginUser }) =>
{
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const loginUserOnClick = () =>
    {
        loginUser({username, password})
    };

    return (
        <StyledPaper>
            <TextFieldComponent
                type='username'
                label='Username'
                value={username}
                onChange={(event) => setUsername(event.target.value)}
            />
            <TextFieldComponent
                type='password'
                label='Password'
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
            <StyledButton variant='outlined' onClick={loginUserOnClick}>Login</StyledButton>
        </StyledPaper>
    );
}

export const LoginFormConnected = connect(null, mapDispatchToProps)(LoginForm);