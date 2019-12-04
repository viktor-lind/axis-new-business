import thunk from 'redux-thunk';
import { getUsers } from '../../api/getUsers';

const LOGIN_USER = 'LOGIN_USER';

const initialState = {
    loggedIn: false,
    username: '',
};

export function accessReducer(state = initialState, action)
{
    switch(action.type)
    {
        case LOGIN_USER:
        {
            return {
                ...state,
                loggedIn: action.loggedIn,
                username: action.username,
            };
        }
        default:
            return state;
    };
}

export const loginUserAction = ({ loggedIn, username }) =>
{
    return {
        type: LOGIN_USER,
        loggedIn: loggedIn,
        username: username,
    };
}

export function loginUser({ username, password })
{
    return async (dispatch) =>
    {
        const users = await getUsers();
        const userExists = users.find((user) =>
        {
            return user.password === password && user.username === username
        });

        const userIsLoggedIn = userExists ? true : false;

        dispatch(loginUserAction({ loggedIn: userIsLoggedIn, username }));
    };
}