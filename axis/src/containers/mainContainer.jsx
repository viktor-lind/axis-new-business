import * as React from 'react';
import { connect } from 'react-redux';

import { LoginView } from './loginView';

const mapStateToProps = (state) =>
({
    access: state.access,
});

const MainContainer = ({ access }) =>
{
    if (!access.loggedIn)
    { 
	    return (
		    <LoginView />
	    );
    }
    else
    {
        return <p>Logged in</p>
    }
}

export const MainContainerConnected = connect(mapStateToProps)(MainContainer);
