import React from 'react';

import { Button, ButtonGroup } from '@mui/material';

function MatchOptions({ options, setOption }: { options: number[], setOption: React.Dispatch<React.SetStateAction<number>> }) {
    return (
        <ButtonGroup>
            {options.map((choice, idx) => (
                <Button key={idx} onClick={() => setOption(choice)}>
                    {choice} Games
                </Button>
            ))}
        </ButtonGroup>
    );
}

export default MatchOptions;
