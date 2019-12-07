import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Button from '@material-ui/core/Button';

import { LoginView } from './loginView';
import { SiteViewConnected } from './siteView';
import { DeviceViewConnected } from './deviceView';

import { logoutUser } from '../redux/reducers/access';

const StyledBar = styled.div`
    width: 100vw;
    height: 3vh;
    background-color: #fc3;
`;

const mapStateToProps = (state) =>
({
    access: state.access.loggedIn,
    activeSite: state.sites.activeSite,
});

const mapDispatchToProps = (dispatch) =>
({
    logoutUser: () => dispatch(logoutUser()),
})

let mainContent = <React.Fragment />;

const MainContainer = ({ access, activeSite, logoutUser }) =>
{
    if (activeSite != null)
    {
        mainContent = <DeviceViewConnected />;
    }
    else
    {
        mainContent = <SiteViewConnected />;
    }

    if (!access)
    { 
	    return <LoginView />;
    }
    else
    {
        return (
            <div style={{textAlign: 'center'}}>
                <StyledBar />
                <Button variant='outlined' onClick={logoutUser}>Logout</Button>
                {mainContent}
            </div>
        )
    }
}

export const MainContainerConnected = connect(mapStateToProps, mapDispatchToProps)(MainContainer);
