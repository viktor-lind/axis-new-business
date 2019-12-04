import thunk from 'redux-thunk';

import { getSites } from '../../api/getSites';

const GET_SITES = 'GET_SITES';

const initialState = {
    sites: null,
}

export function sitesReducer(state = initialState, action)
{
    switch (action.type)
    {
        case GET_SITES:
        {
            return {
                ...state,
                sites: action.sites,
            }
        }
        default:
            return state;
    }
}

const saveSites = ({ sites }) =>
{
    return {
        type: GET_SITES,
        sites: sites,
    };
}

export function getSitesForUser({ username })
{
    return async (dispatch) =>
    {
        const sites = await getSites();

        const userSites = [];
        for(var i = 0; i < sites.length; i++)
        {
            if (sites[i].owner === username)
            {
                userSites.push(sites[i]);
            }
        }

        dispatch(saveSites({sites: userSites}));
    }
}