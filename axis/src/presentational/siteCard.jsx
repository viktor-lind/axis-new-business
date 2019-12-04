import React from 'react';
import style from 'styled-components';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
//import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const StyledExpansionPanel = style(ExpansionPanel)`
	width: 30vw;
	max-width: 30vw;
`;

const StyledExpansionPanelSummary = style(ExpansionPanelSummary)`
`;

const StyledTypography = style(Typography)`
	display: block;
	flex-direction: column;
`;

export const SiteCard = ({ siteCard }) =>
{
    return (
        <StyledExpansionPanel>
            <StyledExpansionPanelSummary
				  //expandIcon={<ExpandMoreIcon />}
        	>
				<StyledTypography variant='h6' display='block' noWrap>{siteCard.title}</StyledTypography>
				<StyledTypography display='block' noWrap>{'id: ' + siteCard.id}</StyledTypography>
        	</StyledExpansionPanelSummary>
			<ExpansionPanelDetails>
			<StyledTypography>
				{'Devices: 5'}
			</StyledTypography>
			</ExpansionPanelDetails>
        </StyledExpansionPanel>
    )
}