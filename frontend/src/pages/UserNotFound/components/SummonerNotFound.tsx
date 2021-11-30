import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useLocation } from 'react-router-dom';

/**
 * Returns a functional component of the UserNotFound page that provide
 * the description about the user not found.
 *
 * @returns {JSX.Element} The functional component.
 */

export default function SummonerNotFound() {
    const location = useLocation();
    const search = location.search;
    const params = new URLSearchParams(search);
    const summonerName = params.get('summonerName');
    const region = params.get('region') ?? 'NA'; // Defaults to NA region

    return (
        <main data-testid='NotFound'>
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    pb: 2,
                }}
            >
                <Container maxWidth='sm'>
                    <Typography
                        variant='h4'
                        align='center'
                        color='text.primary'
                        paragraph
                    >
                        Search Again?
                    </Typography>
                    <Typography
                        variant='h5'
                        align='center'
                        color='text.secondary'
                        paragraph
                    >
                        We couldn’t find a match for user {summonerName} in
                        region {region}. Please verify that user {summonerName}{' '}
                        belongs to the specified region. For more information on
                        regions, please follow the link below.
                    </Typography>
                </Container>
            </Box>
        </main>
    );
}
