import React from 'react';

import { SiteCard } from './siteCard';

export const SiteContainer = ({ sites, setActiveSite }) =>
{
    const siteCards = Object.values(sites).map(site =>
    {
        return <SiteCard key={site.id} siteCard={site} setActiveSite={setActiveSite} />
    });

    return siteCards;
}