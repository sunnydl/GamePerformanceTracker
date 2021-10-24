import React from 'react'
import { styled } from '@mui/material/styles';

export default function MatchSummary() {

    const MatchSummaryWrapper = styled('div')(({ theme }) => ({
        height: '800px',
        width: '100%',
        textAlign: 'center',
      }));

    return (
        <MatchSummaryWrapper>
            match summary
        </MatchSummaryWrapper>
    )
}
