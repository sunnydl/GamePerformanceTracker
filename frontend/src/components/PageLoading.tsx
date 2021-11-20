import React from 'react'
import { CircularProgress, Box } from '@mui/material'

export default function PageLoading() {
    return (
        <Box sx={{ display: 'flex' }}>
            <CircularProgress />
        </Box>
    )
}
