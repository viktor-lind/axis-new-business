export function getDevicesForActiveSite({ activeSite, devices })
{
    const siteDevices = [];

    for(let i = 0; i < devices.length; i++)
    {
        if (activeSite === devices[i].site_id)
        {
            siteDevices.push(devices[i]);
        }
    }

    return siteDevices;
}