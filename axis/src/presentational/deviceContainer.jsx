import React from 'react';
import styled from 'styled-components';

import { DeviceCard } from './deviceCard';

const StyledDiv = styled.div`
    display: inline-flex;
    text-align: center;
`;

export const DeviceContainer = ({ devices }) =>
{
    const deviceCards = Object.values(devices).map(device =>
    {
        return <DeviceCard key={device.id} deviceCard={device} />
    });

    return (
        <StyledDiv>
            {deviceCards.length > 0 ? deviceCards : 'No devices'}
        </StyledDiv>
    )
}