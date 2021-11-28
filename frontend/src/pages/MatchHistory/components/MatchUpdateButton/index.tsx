import React from 'react'
import { Button, Box } from '@mui/material'
import { useLocation } from 'react-router-dom';
import { useAppDispatch } from '../../../../redux/hooks'
import { fetchMatchesData } from '../../../../redux/slices/matches';
import { FetchOperations } from '../../../../enums';
import { setOverallLoading } from '../../../../redux/slices/loading';

/**
 * Returns a functional component of the update button for data
 * 
 * @returns {JSX.Element} A functional component.
 */
export default function MatchUpdateButton() {
    const dispatch = useAppDispatch();
    const location = useLocation();
    
    const getUpdatedMatchData = () => {
        dispatch(setOverallLoading(true));
        dispatch(fetchMatchesData(location.search, 10, FetchOperations.UPDATE))
        .then(() => {
            dispatch(setOverallLoading(false));
        });
    }

    return (
        <Box>
            <Button
                onClick={getUpdatedMatchData}
                variant="contained"
                size="large"
            >Update</Button>
        </Box>
    )
}
