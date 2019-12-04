import React from 'react';
import { connect } from 'react-redux';

import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { TextFieldComponent } from '../presentational/textField';

import { loginUser } from '../redux/reducers/access';

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

export const LoginFormConnected = connect(null, mapDispatchToProps)(LoginForm);