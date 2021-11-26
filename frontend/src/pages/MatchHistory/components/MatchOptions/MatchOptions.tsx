import React from 'react';

import { Slider, Box, Typography } from '@mui/material';

/**
 * Returns a functional component of the match history page that creates
 * options for the user to select.
 * 
 * @param {number[]} options Choices for the number of matches a user can select.
 * @param {React.Dispatch<React.SetStateAction<number>>} setOption A setState call to change the selected option.
 * @returns {JSX.Element} A functional component.
 */
export default function MatchOptions({ options, setOption }: { options: number[], setOption: React.Dispatch<React.SetStateAction<number>> }) {

    const marks = options.map((option: number) => {
        return {
            value: option,
            label: `${option}`,
        }
    })

    const handleChange = (
        event: React.SyntheticEvent | Event, value: any
    ) => {
        setOption(value);
    }

    return (
        <Box 
            data-testid='match-slider'
            sx={{
            width: '100%'
        }}>
            <Typography id="input-slider" gutterBottom align="left">
                Number of games to display
            </Typography>
            <Slider
                aria-labelledby="input-slider"
                defaultValue={3}
                getAriaValueText={(value: number) => `${value}`}
                valueLabelDisplay="auto"
                marks={marks}
                max={10}
                min={3}
                onChangeCommitted={handleChange}
            />
        </Box>
    );
}
