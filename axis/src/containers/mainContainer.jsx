import * as React from 'react';
import { connect } from 'react-redux';

import { LoginView } from './loginView';
import { SiteViewConnected } from './siteView';

const mapStateToProps = (state) =>
({
    access: state.access.loggedIn,
});

const MainContainer = ({ access }) =>
{
    if (!access)
    { 
	    return (
		    <LoginView />
	    );
    }
    else
    {
        return <SiteViewConnected />
    }
}

export const MainContainerConnected = connect(mapStateToProps)(MainContainer);
