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

const StyledTypography = style(Typography)`
	display: block;
	flex-direction: column;
`;

export const DeviceCard = ({ deviceCard }) =>
{
    return (
        <StyledExpansionPanel>
            <StyledExpansionPanelSummary
				  expandIcon={<ExpandMoreIcon />}
        	>
				<StyledTypography variant='h5' display='block' noWrap>{deviceCard.title}</StyledTypography>
				<StyledTypography variant='h6' display='block' noWrap>{deviceCard.description}</StyledTypography>
				<StyledTypography display='block' noWrap>{'id: ' + deviceCard.id}</StyledTypography>
        	</StyledExpansionPanelSummary>
			<ExpansionPanelDetails>
			<StyledTypography>
				{'Devices: 5'}
			</StyledTypography>
			</ExpansionPanelDetails>
        </StyledExpansionPanel>
    )
}