import React from 'react';
import { Typography, Container, Avatar } from '@mui/material';

import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { setUserData } from '../redux/slices/user';

function Overview() {
  const { summoner_name, summoner_level, summoner_icon_url, rank, win_rate } = 
    useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    const prevLevel = summoner_level || 0;
    dispatch(setUserData({ summoner_level: prevLevel + 1 }));
  }

  return (
    <header>
      <Container
        maxWidth="xs"
        sx={{ backgroundColor: 'skyblue' }}
      >
        <Avatar alt="summoner icon" src={summoner_icon_url} />
        <Typography
          variant="h5"
          sx={{ color: 'white' }}
        >
          Summoner Name: {summoner_name}<br />
          Summoner level: {summoner_level}<br />
          Rank: {rank}<br/>
          <br />
          Win Rate: {win_rate}<br />
          Win Games: 10000<br/>
          Loss Games: 9000
        </Typography>
      </Container>
    </header>
  );
}

    

export default Overview;