import React from 'react';
import { connect } from 'react-redux';

import { SiteContainer } from '../presentational/siteContainer';
import { getSitesForUser } from '../redux/reducers/sites';
import { setActiveSite } from '../redux/reducers/sites';
import { getDevices } from '../redux/reducers/devices';

const mapStateToProps = (state) =>
({
    username: state.access.username,
    userSites: state.sites,
});

const mapDispatchToProps = (dispatch) =>
({
    getSites: (username) => dispatch(getSitesForUser({ username })),
    getAllDevices: () => dispatch(getDevices()),
    setActiveSite: (siteId) => dispatch(setActiveSite({ siteId })),
});

export const SiteView = ({ username, getSites, userSites, setActiveSite, getAllDevices }) =>
{
    React.useEffect(() =>
    {
        getSites(username);
        getAllDevices();
    }, [])

    if(userSites.sites != null)
    {
        return <SiteContainer sites={userSites.sites} setActiveSite={setActiveSite}/>
    }
    else
    {
        return <p>Loading sites</p>
    }
}

export const SiteViewConnected = connect(mapStateToProps, mapDispatchToProps)(SiteView)