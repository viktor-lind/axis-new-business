import { getSites } from '../../api/getSites';

const GET_SITES = 'GET_SITES';
const SET_ACTIVE_SITE = 'SET_ACTIVE_SITE';
const GET_SITES_ERROR = 'GET_SITES_ERROR';

const initialState = {
    sites: null,
    activeSite: null,
    status: {
        error: false,
        message: null,
    },
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
                status: {
                    ...state.status,
                    error: false,
                    message: null,
                },
            };
        }
        case SET_ACTIVE_SITE:
        {
            return {
                ...state,
                activeSite: action.activeSite,
            };
        }
        case GET_SITES_ERROR:
        {
            return {
                ...state,
                sites: null,
                activeSite: null,
                status: {
                    ...state.status,
                    error: true,
                    message: action.errorMessage,
                },
            };
        }
        default:
            return state;
    };
}

export const setActiveSite = ({ siteId }) =>
{
    return {
        type: SET_ACTIVE_SITE,
        activeSite: siteId,
    };
}


const saveSites = ({ sites }) =>
{
    return {
        type: GET_SITES,
        sites: sites,
    };
}

const getSitesError = ({ errorMessage }) =>
{
    return {
        type: GET_SITES_ERROR,
        errorMessage: errorMessage,
    };
}

export function getSitesForUser({ username })
{
    return async (dispatch) =>
    {
        try
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
        catch (error)
        {
            dispatch(getSitesError({ errorMessage: error.message }));
        }
    };
}