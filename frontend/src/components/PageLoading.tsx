import React from 'react';
import { CircularProgress, Box } from '@mui/material';

/**
 * Returns a functional component of the loading animation
 *
 * @returns {JSX.Element} The functional component.
 */
export default function PageLoading() {
    return (
        <Box
            sx={{
                display: 'flex',
                position: 'absolute',
                bottom: '50%',
                left: '50%',
                transform: 'translate(-50%, 50%)',
            }}
        >
            <CircularProgress size={128} />
        </Box>
    );
}
