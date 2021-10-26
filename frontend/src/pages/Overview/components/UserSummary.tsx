import React from 'react';
import { Typography, Grid, Avatar } from '@mui/material';

import { useAppSelector } from '../../../redux/hooks';

const getProfileURL = (iconID?: number | null) => {
  return `http://ddragon.leagueoflegends.com/cdn/11.20.1/img/profileicon/${iconID}.png`;
}

function UserSummary() {
  const {
    summonerName, 
    summonerLevel, 
    summonerIcon, 
    rank, 
    winGames, 
    lossGames, 
  } = useAppSelector((state) => state.user);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} lg={6}>
        <Typography variant="h5">
          Summoner Name: {summonerName}<br />
          Summoner level: {summonerLevel}<br />
          Rank: {rank}<br/>
          <br />
          Win Games: {winGames}<br/>
          Loss Games: {lossGames}
      </Typography>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Avatar src={getProfileURL(summonerIcon)} sx={{ width: '128px', height: '128px' }} />
      </Grid>
    </Grid>
  );
}

    

export default UserSummary;
