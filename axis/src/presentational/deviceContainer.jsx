import React from 'react';

import { DeviceCard } from './deviceCard';

export const DeviceContainer = ({ devices }) =>
{
    const deviceCards = Object.values(devices).map(device =>
    {
        return <DeviceCard key={device.id} deviceCard={device} />
    });

    return deviceCards;
}