import React from 'react';

import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { TextFieldComponent } from '../presentational/textField';
import { loginUser } from '../api/loginUser';

export const LoginForm = ({ users }) =>
{
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const loginUserOnClick = () =>
    {
        loginUser({users, username, password})
    };

    return (
        <Container>
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
            <Button onClick={loginUserOnClick}>Login</Button>
        </Container>
    );
}