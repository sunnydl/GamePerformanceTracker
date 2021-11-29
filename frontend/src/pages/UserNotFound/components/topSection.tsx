import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

/**
 * Returns a functional component of the top part of UserNotFound page that 
 * tell the error message with an error image.
 * 
 * @returns {JSX.Element} The functional component.
 */

export default function TopSection() {
    return (
        <main data-testid="topSection" >
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    pb: 2,
                }}
            >
                <Container maxWidth="sm">
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="text.primary"
                        gutterBottom
                    >
                        Oh no!
                        We can't find that user!
                    </Typography>
                </Container>
                <Stack
                    sx={{ pt: 0 }}
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                >
                    <Avatar 
                        src={`${process.env.PUBLIC_URL}/UserNotFound.jpg`} 
                        sx={{ width: 150, height: 150 }} 
                        style={{alignSelf: 'center'}}/>
                </Stack>
            </Box>
        </main>
    );
}
