import React from 'react'
import { styled } from '@mui/material/styles';
import { Typography, Grid } from '@mui/material';

import RandomeChart from './RandomeChart';

export default function MatchSummary() {

    const MatchSummaryWrapper = styled('div')(({ theme }) => ({
    }));

    const Header = styled('article')(() => ({
        padding: '30px 30px 0px 30px'
    }))

    const Paragraph = styled('div')(() => ({
        padding: '30px'
    }))

    return (
        <MatchSummaryWrapper>
            <Header>
                <Typography 
                    variant="h4"
                    align="left"
                    gutterBottom
                >
                    match summary
                </Typography>
            </Header>
            <Paragraph>
                <Typography 
                    variant="subtitle1"
                    align="left"
                    paragraph
                >
                    The charts below indicates how bad you are performing in your recent games
                </Typography>
            </Paragraph>
            <Grid container spacing={2}>
                <Grid item xs={12} lg={6}>
                    <RandomeChart/>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <RandomeChart/>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <RandomeChart/>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12} lg={6}>
                    <RandomeChart/>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <RandomeChart/>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <RandomeChart/>
                </Grid>
            </Grid>
        </MatchSummaryWrapper>
    )
}
