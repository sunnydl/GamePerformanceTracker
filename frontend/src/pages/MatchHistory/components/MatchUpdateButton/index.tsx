import React from 'react'
import { Button, Box } from '@mui/material'
import { useLocation } from 'react-router-dom';
import { useAppDispatch } from '../../../../redux/hooks'
import { fetchMatchesData } from '../../../../redux/slices/matches';
import { FetchOperations } from '../../../../enums';
import { setLoading } from '../../../../redux/slices/loading';

export default function MatchUpdateButton() {
    const dispatch = useAppDispatch();
    const location = useLocation();
    
    const getUpdatedMatchData = () => {
        dispatch(setLoading(true));
        dispatch(fetchMatchesData(location.search, 10, FetchOperations.UPDATE))
        .then(() => {
            dispatch(setLoading(false));
        });
    }

    return (
        <Box>
            <Button
                onClick={getUpdatedMatchData}
            >Update</Button>
        </Box>
    )
}
