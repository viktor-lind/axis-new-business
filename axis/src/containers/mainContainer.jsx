import * as React from 'react';
import { connect } from 'react-redux';

import { LoginView } from './loginView';
import { SiteViewConnected } from './siteView';
import { DeviceViewConnected } from './deviceView';

const mapStateToProps = (state) =>
({
    access: state.access.loggedIn,
    activeSite: state.sites.activeSite,
});

const MainContainer = ({ access, activeSite }) =>
{
    if (!access)
    { 
	    return (
		    <LoginView />
	    );
    }
    else if (activeSite != null)
    {
        return (
            <DeviceViewConnected />
        )
    }
    else
    {
        return <SiteViewConnected />
    }
}

export const MainContainerConnected = connect(mapStateToProps)(MainContainer);
