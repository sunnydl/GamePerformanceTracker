import React from 'react';

import { Slider, Box } from '@mui/material';

function MatchOptions({ options, setOption }: { options: number[], setOption: React.Dispatch<React.SetStateAction<number>> }) {

    const marks = options.map((option: number) => {
        return {
            value: option,
            label: option===1? `${option} game`:`${option} games`,
        }
    })

    const handleChange = (
        event: React.SyntheticEvent | Event, value: any
    ) => {
        setOption(value);
    }

    return (
        <Box sx={{
            width: '70%'
        }}>
            <Slider
                aria-label="Number of games"
                defaultValue={3}
                getAriaValueText={(value: number) => `${value}`}
                valueLabelDisplay="auto"
                marks={marks}
                max={10}
                min={1}
                onChangeCommitted={handleChange}
            />
        </Box>
    );
}

export default MatchOptions;
