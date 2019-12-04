import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

import { getDevicesForActiveSite } from '../common/getSiteDevices';
import { setActiveSite } from '../redux/reducers/sites';

import { DeviceContainer } from '../presentational/deviceContainer';

const mapStateToProps = (state) =>
({
    allDevices: state.devices,
    activeSite: state.sites.activeSite,
});

const mapDispatchToProps = (dispatch) =>
({
    resetActiveSite: () => dispatch(setActiveSite({ siteId: null }))
});

const DeviceView = ({ allDevices, activeSite, resetActiveSite }) =>
{
    const siteDevices = getDevicesForActiveSite({ devices: allDevices.devices, activeSite });

    return (
        <React.Fragment>
            <p>Devices</p>
            <DeviceContainer devices={siteDevices} />
            <Button onClick={resetActiveSite}>Back</Button>
        </React.Fragment>
    )
}

export const DeviceViewConnected = connect(mapStateToProps, mapDispatchToProps)(DeviceView);