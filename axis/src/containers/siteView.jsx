import React from 'react';
import { connect } from 'react-redux';

import { SiteContainer } from '../presentational/siteContainer';
import { getSitesForUser } from '../redux/reducers/sites';

const mapStateToProps = (state) =>
({
    username: state.access.username,
    userSites: state.sites,
});

const mapDispatchToProps = (dispatch) =>
({
    getSites: (username) => {dispatch(getSitesForUser({ username }))}
});

export const SiteView = ({ username, getSites, userSites }) =>
{
    React.useEffect(() =>
    {
        getSites(username);
    }, [])

    if(userSites.sites != null)
    {
        return <SiteContainer sites={userSites.sites} />
    }
    else
    {
        return <p>Loading sites</p>
    }
}

export const SiteViewConnected = connect(mapStateToProps, mapDispatchToProps)(SiteView)