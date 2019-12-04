import React from 'react';
import style from 'styled-components';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';

const StyledExpansionPanel = style(ExpansionPanel)`
	width: 30vw;
	max-width: 30vw;
`;

const StyledExpansionPanelSummary = style(ExpansionPanelSummary)`
	.MuiExpansionPanelSummary-content {
		display: block;
	}
`;

const StyledExpansionPanelDetails = style(ExpansionPanelDetails)`
display: block !important;
	.MuiExpansionPanelDetails-root {
		display: block;
	}
`;

const StyledTypography = style(Typography)`
`;

export const SiteCard = ({ siteCard, setActiveSite }) =>
{
    return (
        <StyledExpansionPanel>
            <StyledExpansionPanelSummary
				  expandIcon={<ExpandMoreIcon />}
        	>
				<StyledTypography variant='h6' display='block' noWrap>{siteCard.title}</StyledTypography>
				<StyledTypography display='block' noWrap>{'id: ' + siteCard.id}</StyledTypography>
        	</StyledExpansionPanelSummary>
			<StyledExpansionPanelDetails>
				<StyledTypography>
					{'Devices: 5'}
				</StyledTypography>
				<Button variant='outlined' onClick={setActiveSite.bind(this, siteCard.id)}>Show Devices</Button>
			</StyledExpansionPanelDetails>
        </StyledExpansionPanel>
    )
}