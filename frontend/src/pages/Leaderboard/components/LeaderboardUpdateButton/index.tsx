import React from 'react'
import { Button, Box } from '@mui/material'
import { useAppSelector, useAppDispatch } from '../../../../redux/hooks'
import { fetchLeaderboardData } from '../../../../redux/slices/leaderboard'
import { setLeaderboardLoading } from '../../../../redux/slices/loading'

import { FetchOperations } from '../../../../enums'

/**
 * Returns a functional component of the update button for data
 * 
 * @returns {JSX.Element} A functional component.
 */
export default function LeaderboardUpdateButton() {
    const dispatch = useAppDispatch();
    const { tier, division, queueType } = useAppSelector((state) => state.leaderboard);

    const getUpdatedLeaderboardData = () => {
        dispatch(setLeaderboardLoading(true));
        dispatch(fetchLeaderboardData(tier, division, queueType, FetchOperations.UPDATE))
        .then(() => {
            dispatch(setLeaderboardLoading(false));
        });
    }

    return (
        <Box>
            <Button
                onClick={getUpdatedLeaderboardData}
                variant="contained"
                size="large"
            >Update</Button>
        </Box>
    )
}
