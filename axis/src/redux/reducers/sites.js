import thunk from 'redux-thunk';

import { getSites } from '../../api/getSites';

const GET_SITES = 'GET_SITES';
const SET_ACTIVE_SITE = 'SET_ACTIVE_SITE';

const initialState = {
    sites: null,
    activeSite: null,
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
        case SET_ACTIVE_SITE:
        {
            return {
                ...state,
                activeSite: action.activeSite,
            }
        }
        default:
            return state;
    }
}

export const setActiveSite = ({ siteId }) =>
{
    return {
        type: SET_ACTIVE_SITE,
        activeSite: siteId,
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