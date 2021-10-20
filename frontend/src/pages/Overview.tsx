import React from 'react';
import { Typography, Container, Avatar } from '@mui/material';

import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { setUserData } from '../redux/slices/user';

const getProfileURL = (iconID?: number | null) => {
  return `http://ddragon.leagueoflegends.com/cdn/11.20.1/img/profileicon/${iconID}.png`;
}

function Overview() {
  const {
    summonerName, 
    summonerLevel, 
    summonerIcon, 
    summonerFound,
    region,
    rank, 
    winGames, 
    lossGames, 
  } = useAppSelector((state) => state.user);

  return (
    <header>
      {summonerFound ? (
        <Container
          maxWidth="xs"
          sx={{ backgroundColor: 'skyblue' }}
        >
          <Avatar src={getProfileURL(summonerIcon)} />
          <Typography
            variant="h5"
            sx={{ color: 'white' }}
          >
            Summoner Name: {summonerName}<br />
            Summoner level: {summonerLevel}<br />
            Rank: {rank}<br/>
            <br />
            Win Games: {winGames}<br/>
            Loss Games: {lossGames}
          </Typography>
        </Container>
      ) : (
        <div>User {summonerName} not found in {region}</div>
      )}
    </header>
  );
}

    

export default Overview;