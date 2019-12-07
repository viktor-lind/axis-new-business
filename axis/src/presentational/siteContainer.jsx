import React from 'react';
import styled from 'styled-components';

import { SiteCard } from './siteCard';

const StyledDiv = styled.div`
    display: inline-flex;
    text-align: center;
`;

export const SiteContainer = ({ sites, setActiveSite }) =>
{
    const siteCards = Object.values(sites).map(site =>
    {
        return <SiteCard key={site.id} siteCard={site} setActiveSite={setActiveSite} />
    });

    return (
        <StyledDiv>
            {siteCards}
        </StyledDiv>
    )
}