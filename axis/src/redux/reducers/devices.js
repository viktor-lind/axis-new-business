import { getAllDevices } from '../../api/getDevices';

const GET_DEVICES = 'GET_DEVICES';
const GET_DEVICES_ERROR = 'GET_DEVICES_ERROR';
const SET_INITIAL_STATE = 'SET_INITIAL_STATE';

const initialState = {
    devices: null,
    status: {
        error: false,
        message: null,
    },
};

export function devicesReducer(state = initialState, action)
{
    switch (action.type)
    {
        case GET_DEVICES:
        {
            return {
                ...state,
                devices: action.devices,
                status: {
                    ...state.status,
                    error: false,
                    message: null,
                },
            }
        }
        case GET_DEVICES_ERROR:
        {
            return {
                ...state,
                devices: null,
                status: {
                    ...state.status,
                    error: true,
                    message: action.errorMessage,
                },
            };
        }
        case SET_INITIAL_STATE:
            {
                return {
                    ...initialState,
                };
            }
        default:
            return state;
    }
}

//When user is logging out, reset state to initial state
export const setInitialDevicesState = () =>
{
    return {
        type: SET_INITIAL_STATE,
    };
}

//Save devices to store
const saveDevices = ({ devices }) =>
{
    return {
        type: GET_DEVICES,
        devices: devices,
    };
}

//If devices fetch fails, save error message
const getDevicesError = ({ errorMessage }) =>
{
    return {
        type: GET_DEVICES_ERROR,
        errorMessage: errorMessage,
    };
}

//Thunk that calls api function to get all devices
export function getDevices()
{
    return async (dispatch) =>
    {
        try
        {
            const devices = await getAllDevices();
            
            if (devices.length > 0)
            {
                dispatch(saveDevices({devices: devices}));
            }
            else
            {
                dispatch(getDevicesError({ errorMessage: 'No devices' }));
            }
        }
        catch (error)
        {
            dispatch(getDevicesError({ errorMessage: error.message }));
        }

    }
}