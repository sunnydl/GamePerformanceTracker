import React from 'react';
import { Typography, Container, Avatar } from '@mui/material';

import { useAppSelector } from '../../../redux/hooks';

const getProfileURL = (iconID?: number | null) => {
  return `http://ddragon.leagueoflegends.com/cdn/11.20.1/img/profileicon/${iconID}.png`;
}

function UserSummary() {
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
        <Container
          maxWidth="xs"
          sx={{ backgroundColor: 'skyblue' }}
        >
          {summonerFound ? (
            <React.Fragment>
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
            </React.Fragment>
          ) : (
            <React.Fragment>User {summonerName} not found in {region}</React.Fragment>
          )}
        </Container>
    </header>
  );
}

    

export default UserSummary;
