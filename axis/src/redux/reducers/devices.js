import thunk from 'redux-thunk';

import { getAllDevices } from '../../api/getDevices';

const GET_DEVICES = 'GET_DEVICES';

const initialState = {
    devices: null,
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
            }
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

export function getDevices()
{
    return async (dispatch) =>
    {
        const devices = await getAllDevices();

        dispatch(saveSites({devices: devices}));
    }
}