import { getSites } from '../../api/getSites';

const GET_SITES = 'GET_SITES';
const SET_ACTIVE_SITE = 'SET_ACTIVE_SITE';
const GET_SITES_ERROR = 'GET_SITES_ERROR';
const SET_INITIAL_STATE = 'SET_INITIAL_STATE';

const initialState = {
    sites: null,
    activeSite: null,
    status: {
        error: false,
        message: null,
    },
};

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
        case SET_INITIAL_STATE:
        {
            return {
                ...initialState,
            };
        }
        default:
            return state;
    };
}

//When user is logging out, reset state to initial state
export const setInitialSitesState = () =>
{
    return {
        type: SET_INITIAL_STATE,
    };
}

//Save site id for active site
export const setActiveSite = ({ siteId }) =>
{
    return {
        type: SET_ACTIVE_SITE,
        activeSite: siteId,
    };
}

//Save fetched sites to store
const saveSites = ({ sites }) =>
{
    return {
        type: GET_SITES,
        sites: sites,
    };
}

//Action to save error message if getSites failed
const getSitesError = ({ errorMessage }) =>
{
    return {
        type: GET_SITES_ERROR,
        errorMessage: errorMessage,
    };
}

//Thunk that calls api function for getting all sites and only saves sites for current user
export function getSitesForUser({ username })
{
    return async (dispatch) =>
    {
        try
        {
            const sites = await getSites();

            if (sites != null && sites.length > 0)
            {
                
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
            else
            {
                dispatch(getSitesError({ errorMessage: 'Could not get sites' })); 
            }
        }
        catch (error)
        {
            dispatch(getSitesError({ errorMessage: error.message }));
        }
    };
}