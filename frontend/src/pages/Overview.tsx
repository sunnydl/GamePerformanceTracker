import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { setUserData } from '../redux/slices/user';
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF"
  }
})(Typography);

function Overview() {
  const userData = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    let prevLevel = userData.summoner_level || 0
    dispatch(setUserData({ summoner_level: prevLevel + 1 }))
  }

  return (
    <header>

      <Container maxWidth="xs" style={{ backgroundColor: 'skyblue'}}>
        <WhiteTextTypography variant="h3">
          Summoner Name: #Faker
          Summoner level: 100
        </WhiteTextTypography>
        <h1>Rank: Challenger <br/>
            Win Games: 10000<br/>
            Loss Games: 9000
        </h1>
      </Container>
    </header>     
  );
}

    

export default Overview;
