import React from 'react'

import { Avatar, List, ListItem, ListItemAvatar } from '@mui/material';

export default function Overview() {
    const matches: any[] = [1, 2, 3]; // TODO: get match data from endpoint

    return (
        <React.Fragment>
            <List sx={{ width: '90%', margin: 'auto' }}>
                {matches.map((match, idx) => (
                    <ListItem key={idx} divider>
                        <ListItemAvatar>
                            <Avatar src={undefined/* Player's champion during that match */} sx={{ width: '128px', height: '128px' }} />
                        </ListItemAvatar>
                        {/* TODO: add other components */}
                        {/* 
                            <Grid container>
                                <Grid item>
                                    <MatchResults />
                                </Grid>
                                <Grid item>
                                    <MatchStats />
                                </Grid>
                            </Grid>
                            <MatchSummary className='absolute-position top-right'>
                                <div>position</div>
                                <div>lane</div>
                                <div>gamemode</div>
                                <div>date</div>
                            </MatchInfo>
                        */}
                    </ListItem>
                ))}
            </List>
        </React.Fragment>
    )
}
