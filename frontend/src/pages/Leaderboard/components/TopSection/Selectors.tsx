import React, { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../../../redux/hooks';
import { setLeaderboardFilter  } from '../../../../redux/slices/leaderboard';

import { Select, MenuItem, FormControl, InputLabel, Button } from '@mui/material';

import { tiers, divisions, queueTypes, high_tiers } from '../enums';

import {
    SelectorsWrapper,
    SelectWrapper,
} from './style'

/**
 * Returns a functional component of the leaderboard page that displays 
 * three different options that the end user can sort the leaderboard
 * information by.
 * 
 * @returns {JSX.Element} A functional component.
 */
export default function Selectors() {

    const { tier: t, division: d, queueType: q } = useAppSelector((state) => state.leaderboard);
    const [tier, setTier] = useState(t);
    const [division, setDivision] = useState(d);
    const [queueType, setQueueType] = useState(q);

    const dispatch = useAppDispatch();
    const updateFilter = () => {
        dispatch(setLeaderboardFilter({
            tier,
            division,
            queueType,
            leaderboard: [],
        }))
    }


    return (
        <SelectorsWrapper sx={{
            bgcolor: 'background.paper',
            borderColor: 'text.primary',
            border: 1,
        }}>
            <FormControl
                variant="standard"
            >
                <SelectWrapper>
                    <InputLabel id="tier-selector">Tier</InputLabel>
                    <Select
                        labelId="tier-selector"
                        value={tier}
                        onChange={(event) => setTier(event.target.value)}
                        label="Tier"
                    >
                        {tiers.map((option: string) => (
                            <MenuItem value={option} key={option}>{option}</MenuItem>
                        ))}
                    </Select>
                </SelectWrapper>
            </FormControl>
            <FormControl
                variant="standard"
            >
                <SelectWrapper>
                    <InputLabel id="division-selector">Division</InputLabel>
                    <Select
                        labelId="division-selector"
                        value={division}
                        onChange={(event) => setDivision(event.target.value)}
                        label="Division"
                    >
                        {divisions.map((option: string) => (
                            <MenuItem value={option} key={option} disabled={high_tiers.includes(tier)}>{option}</MenuItem>
                        ))}
                    </Select>
                </SelectWrapper>
            </FormControl>
            <FormControl
                variant="standard"
            >
                <SelectWrapper>
                    <InputLabel id="queueType-selector">Queue Type</InputLabel>
                    <Select
                        labelId="queueType-selector"
                        value={queueType}
                        onChange={(event) => setQueueType(event.target.value)}
                        label="Queue Type"
                    >
                        {queueTypes.map((option: string) => (
                            <MenuItem value={option} key={option}>{option}</MenuItem>
                        ))}
                    </Select>
                </SelectWrapper>
            </FormControl>
            <FormControl>
                <SelectWrapper>
                    <Button size="large" variant="contained" onClick={updateFilter}>Search</Button>
                </SelectWrapper>
            </FormControl>
        </SelectorsWrapper>
    )
}
