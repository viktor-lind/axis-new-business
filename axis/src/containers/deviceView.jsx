import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { DeviceContainer } from '../presentational/deviceContainer';

import { getDevicesForActiveSite } from '../common/getSiteDevices';
import { setActiveSite } from '../redux/reducers/sites';

const StyledDiv = styled(Paper)`
    text-align: center;
    width: 90vw;
    position: relative;
    margin: auto;
`;

const mapStateToProps = (state) =>
({
    userDevices: state.devices,
    activeSite: state.sites.activeSite,
});

const mapDispatchToProps = (dispatch) =>
({
    resetActiveSite: () => dispatch(setActiveSite({ siteId: null }))
});

let siteDevices = [];

const DeviceView = ({ userDevices, activeSite, resetActiveSite }) =>
{
    if (userDevices.devices.length > 0)
    {
        siteDevices = getDevicesForActiveSite({ devices: userDevices.devices, activeSite });
    }

    return (
        <StyledDiv>
            <p>Devices</p>
            <DeviceContainer devices={siteDevices} /><br/>
            <Button variant='outlined' onClick={resetActiveSite}>Back</Button>
        </StyledDiv>
    )
}

export const DeviceViewConnected = connect(mapStateToProps, mapDispatchToProps)(DeviceView);