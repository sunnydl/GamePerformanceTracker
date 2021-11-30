import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import SummonerSearchBar from '../../components/SummonerSearchBar';

export default function Search() {
    return (
        <React.Fragment>
            <CssBaseline />
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
        </React.Fragment>
    );
}
