import { getUsers } from '../../api/getUsers';

const LOGIN_USER = 'LOGIN_USER';
const LOGOUT_USER = 'LOGOUT_USER';
const LOGIN_FAILED = 'LOGIN_FAILED';

const initialState = {
    loggedIn: false,
    username: null,
    status: null,
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
                status: null,
            };
		}
		case LOGOUT_USER:
		{
			return {
				...state,
				loggedIn: false,
                username: null,
                status: null,
			};
        }
        case LOGIN_FAILED:
        {
            return {
                ...state,
                status: action.errorMessage,
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

export const logoutUser = () =>
{
	return {
		type: LOGOUT_USER,
	};
}

const loginFailed = ({ errorMessage }) =>
{
    return {
        type: LOGIN_FAILED,
        errorMessage: errorMessage,
    };
}

export function loginUser({ username, password })
{
    return async (dispatch) =>
    {
        try
        {
            const users = await getUsers();
            const userExists = users.find((user) =>
            {
                return user.password === password && user.username === username
            });
            
            if (!userExists)
            {
                alert('Wrong username and/or password');
            }
            else
            {
                const userIsLoggedIn = userExists ? true : false;
    
                dispatch(loginUserAction({ loggedIn: userIsLoggedIn, username }));
            }
        }
        catch (error)
        {
            dispatch(loginFailed({ errorMessage: error.message }));
        }
    };
}