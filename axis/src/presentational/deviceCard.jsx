import React from 'react';
import styled from 'styled-components';

import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';

import image from '../assets/camera.png';

const StyledCard = styled(Card)`
	text-align: left;
	max-width: 25vw;
	padding: 1vw;
	margin: 1vw;
`;

const StyledImage = styled.img`
	width: 100%;
`;

const StorageWrapper = styled.div`
	border: solid 0.5px grey;
	padding: 8px;
	margin-bottom: 5px;
	margin-top: 5px;
`;

export const DeviceCard = ({ deviceCard }) =>
{
	const storages = deviceCard.storages.map((storage, i) =>
	{
		return (
			<StorageWrapper key={i}>
				<Typography variant="body2" color="textSecondary" component="p">
					{storage.id}
				</Typography>
				<Typography variant="body2" color="textSecondary" component="p">
					{'Status: ' + storage.state}
				</Typography>				
			</StorageWrapper>
		);
	});

    return (
		<StyledCard>
			<Typography gutterBottom variant="h5" component="h2">
				{deviceCard.title}
		  	</Typography>
			<StyledImage src={image} />
			<CardContent style={{padding: 0}}>
				<Typography variant="body1" component="p">
					{deviceCard.description}
				</Typography>
				<Typography variant="body1" component="p">
					{'Connected: ' + deviceCard.connected}
				</Typography>
				<Typography variant="body2" color="textSecondary" component="p">
					{'Enabled: ' + deviceCard.enabled}
				</Typography>
				<Typography variant="body2" color="textSecondary" component="p">
					{'Id: ' + deviceCard.id}
				</Typography>
				<Typography variant="body2" color="textSecondary" component="p">
					{'Model: ' + deviceCard.model}
				</Typography>
				<Typography variant="body2" color="textSecondary" component="p">
					{'Version: ' + deviceCard.version}
				</Typography>
				<Typography variant="body2" color="textSecondary" component="p">
					{'Timezone: ' + deviceCard.timezone}
				</Typography>
				<Typography align='center'>Storages</Typography>
					{storages.length > 0 ? storages : 'No storages.'}
			</CardContent>
		</StyledCard>
    );
}