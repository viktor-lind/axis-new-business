import thunk from 'redux-thunk';
import { getUsers } from '../../api/getUsers';

const LOGIN_USER = 'LOGIN_USER';

export function accessReducer(state = {}, action)
{
    switch(action.type)
    {
        case LOGIN_USER:
        {
            return {
                ...state,
                loggedIn: action.payload,
            };
        }
        default:
            return state;
    };
}

export const loginUserAction = ({ payload }) =>
{
    return {
        type: LOGIN_USER,
        payload: payload,
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
       
        dispatch(loginUserAction({ payload: userIsLoggedIn }));
    };
}