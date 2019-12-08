import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Paper from '@material-ui/core/Paper';
import { SiteContainer } from '../presentational/siteContainer';

import { getSitesForUser } from '../redux/reducers/sites';
import { setActiveSite } from '../redux/reducers/sites';
import { getDevices } from '../redux/reducers/devices';

const StyledDiv = styled(Paper)`
    text-align: center;
    width: 90vw;
    min-height: 60vh;
    position: relative;
    margin: auto;
`;

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

let siteContent = <React.Fragment />;

export const SiteView = ({ username, getSites, userSites, setActiveSite, getAllDevices }) =>
{
    React.useEffect(() =>
    {
        getSites(username);
        getAllDevices();
    }, []);

    if(userSites.sites != null)
    {
        if (userSites.sites.length > 0)
        { 
            siteContent = (
                <React.Fragment>
                    <p>Sites</p>
                    <SiteContainer sites={userSites.sites} setActiveSite={setActiveSite}/>
                </React.Fragment>
            );
        }
        else
        {
            siteContent = <p>No site registered for user</p>;
        }
    }
    else
    {
        siteContent = <p>Loading sites</p>;
    }

    return (
        <StyledDiv>
            {siteContent}
        </StyledDiv>
    );
}

export const SiteViewConnected = connect(mapStateToProps, mapDispatchToProps)(SiteView);