import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

interface FeaturePanelProps {
    image: string,
    name: string
}

function FeaturePanel({ image, name }: FeaturePanelProps) {
    return (
        <Card
            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
        >
            <CardMedia
                component="img"
                image={image}
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography align="center" gutterBottom variant="h6" component="h2">
                    {name}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default FeaturePanel;