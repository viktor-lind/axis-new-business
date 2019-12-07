import { getAllDevices } from '../../api/getDevices';

const GET_DEVICES = 'GET_DEVICES';
const GET_DEVICES_ERROR = 'GET_DEVICES_ERROR';

const initialState = {
    devices: null,
    status: {
        error: false,
        message: null,
    },
}

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
        default:
            return state;
    }
}

const saveSites = ({ devices }) =>
{
    return {
        type: GET_DEVICES,
        devices: devices,
    };
}

const getDevicesError = ({ errorMessage }) =>
{
    return {
        type: GET_DEVICES_ERROR,
        errorMessage: errorMessage,
    };
}

export function getDevices()
{
    return async (dispatch) =>
    {
        try
        {
            const devices = await getAllDevices();

            dispatch(saveSites({devices: devices}));
        }
        catch (error)
        {
            dispatch(getDevicesError({ errorMessage: error.message }));
        }

    }
}