import React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import SummonerSearchBar from '../../components/SummonerSearchBar';

/**
 * Returns a functional component that displays a page for the user to
 * search for a summoner.
 *
 * @returns {JSX.Element} The functional component.
 */
export default function Search() {
    return (
        <main data-testid='search'>
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    pb: 2,
                }}
            >
                <Container maxWidth='sm'>
                    <Typography
                        component='h1'
                        variant='h2'
                        align='center'
                        color='text.primary'
                        gutterBottom
                    >
                        Game Performance Tracker
                    </Typography>
                    <Typography
                        variant='h5'
                        align='center'
                        color='text.secondary'
                        paragraph
                    >
                        Please search for a player before trying to access
                        this content.
                    </Typography>
                    <Stack
                        sx={{ pt: 2 }}
                        direction='row'
                        spacing={2}
                        justifyContent='center'
                    >
                        <SummonerSearchBar />
                    </Stack>
                </Container>
            </Box>
        </main>
    );
}
