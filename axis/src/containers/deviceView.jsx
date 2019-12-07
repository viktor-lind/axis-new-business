import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { getDevicesForActiveSite } from '../common/getSiteDevices';
import { setActiveSite } from '../redux/reducers/sites';
import Paper from '@material-ui/core/Paper';
import { DeviceContainer } from '../presentational/deviceContainer';

const StyledDiv = styled(Paper)`
    text-align: center;
    width: 90vw;
    position: relative;
    margin: auto;
`;

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
        <StyledDiv>
            <p>Devices</p>
            <DeviceContainer devices={siteDevices} /><br/>
            <Button onClick={resetActiveSite}>Back</Button>
        </StyledDiv>
    )
}

export const DeviceViewConnected = connect(mapStateToProps, mapDispatchToProps)(DeviceView);