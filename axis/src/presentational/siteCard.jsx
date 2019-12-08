import React from 'react';
import styled from 'styled-components';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const StyledCard = styled(Card)`
	text-align: center;
	margin: auto 2vw auto 2vw;
	width: 25vw;
`;

export const SiteCard = ({ siteCard, setActiveSite, siteDevices }) =>
{
    return (
		<StyledCard>
		  <CardContent>
			<Typography gutterBottom variant="h5" component="h2">
			  {siteCard.title}
			</Typography>
		  </CardContent>
		<CardActions>
		  <Button size="medium" variant='outlined' onClick={setActiveSite.bind(this, siteCard.id)}>
			Show Devices
		  </Button>
		</CardActions>
	  </StyledCard>
    )
}