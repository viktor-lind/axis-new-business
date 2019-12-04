import React from 'react';

import { SiteCard } from './siteCard';

export const SiteContainer = ({ sites }) =>
{
    const siteCards = Object.values(sites).map(site =>
    {
        return <SiteCard key={site.id} siteCard={site} />
    });

    return siteCards;
}