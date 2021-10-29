import React from 'react'
import { Typography, Grid, Button } from '@mui/material';
import { useAppSelector } from '../../../../redux/hooks';

import {
    MatchSummaryWrapper,
    MatchSummaryPaper,
    Header,
    ParagraphWrapper,
    Paragraph,
    GraphWrapper,
    ButtonsWrapper
} from './style'

import RandomeChart from './RandomeChart';

export default function MatchSummary() {

    const {
        summonerName,
    } = useAppSelector((state) => state.user);

    return (
        <MatchSummaryWrapper>
            <MatchSummaryPaper>
                <Header>
                    <Typography 
                        variant="h4"
                        align="center"
                    >
                        {summonerName? summonerName:"Player"}'s Statistic
                    </Typography>
                </Header>
                <ParagraphWrapper>
                    <Paragraph 
                        variant="subtitle1"
                        align="center"
                    >
                        Choose a Time Frame
                    </Paragraph>
                </ParagraphWrapper>
                <ButtonsWrapper>
                    <Grid container>
                        <Grid item xs={12} lg={4}>
                            <Button>hi</Button>
                        </Grid>
                        <Grid item xs={12} lg={4}>
                            <Button>hi</Button>
                        </Grid>
                        <Grid item xs={12} lg={4}>
                            <Button>hi</Button>
                        </Grid>
                    </Grid>
                </ButtonsWrapper>
                <GraphWrapper>
                    <RandomeChart/>
                    <ButtonsWrapper>
                        <Grid container>
                            <Grid item xs={12} lg={2}>
                                <Button>hi</Button>
                            </Grid>
                            <Grid item xs={12} lg={2}>
                                <Button>hi</Button>
                            </Grid>
                            <Grid item xs={12} lg={2}>
                                <Button>hi</Button>
                            </Grid>
                            <Grid item xs={12} lg={2}>
                                <Button>hi</Button>
                            </Grid>
                            <Grid item xs={12} lg={2}>
                                <Button>hi</Button>
                            </Grid>
                            <Grid item xs={12} lg={2}>
                                <Button>hi</Button>
                            </Grid>
                        </Grid>
                    </ButtonsWrapper>
                </GraphWrapper>
            </MatchSummaryPaper>
        </MatchSummaryWrapper>
    )
}
