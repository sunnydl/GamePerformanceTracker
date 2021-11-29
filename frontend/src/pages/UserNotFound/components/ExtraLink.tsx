import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';

/**
 * Returns a functional component of the UserNotFound page that has
 * the button provide extra resources about the region.
 * 
 * @returns {JSX.Element} The functional component.
 */

export default function ExtraLink(){
    return (
        <main data-testid="ExtraLink" >
            <Container sx={{ pt: 5, pb: 20 }} maxWidth="md">
                <Stack
                    sx={{ pt: 0 }}
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                >
                    <Button 
                        data-testid="extralink-button"
                        variant="contained" 
                        component={Link} to={{pathname: "https://leagueoflegends.fandom.com/wiki/Servers"}} target="_blank"
                    >
                        Learn More
                    </Button>
                </Stack>
            </Container>
        </main>
    );
}
