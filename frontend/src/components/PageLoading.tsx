import React from 'react';
import { CircularProgress, Box } from '@mui/material';

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
