import React from 'react';

import { Grid, Avatar } from '@mui/material';

import { useAppSelector } from '../../../../redux/hooks';

import {
  ProfileWrapper,
  ChartsWrapper,
  FavoriteChampionsWrapper
} from './style';

import CircleChart from './CircleChart';

const getSummonerIconURL = (iconID?: number) => {
  if (iconID === undefined) return undefined;
  return `http://ddragon.leagueoflegends.com/cdn/11.20.1/img/profileicon/${iconID}.png`;
}

const getChampionIconURL = (championName?: string) => {
  if (championName === undefined) return undefined;
  return `http://ddragon.leagueoflegends.com/cdn/11.22.1/img/champion/${championName}.png`;
}

function UserSummary() {
  const {
    summonerName = "Player", 
    summonerLevel = 0, 
    summonerIcon, 
    rank = "N/A", 
    winGames = 0, 
    lossGames = 0, 
    favChamps = [],
  } = useAppSelector((state) => state.user);

  const winRate = (100 * winGames / ((winGames + lossGames) || 1)).toFixed();
  // TODO: retrieve these data values below from some endpoint
  const kills = 25, deaths = 12, assists = 31;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} lg={6}>
        <ProfileWrapper>
          <div className="icon-wrapper">
            <Avatar src={getSummonerIconURL(summonerIcon)} />
            {summonerName}
          </div>
          <div className="header-wrapper">Details</div>
          <div className="body-wrapper">
            <div>Level:<span>{summonerLevel}</span></div>
            <div>Rank:<span>{rank}</span></div>
            <div>Wins:<span>{winGames}</span></div>
            <div>Losses:<span>{lossGames}</span></div>
          </div>
        </ProfileWrapper>
      </Grid>
      <Grid container item spacing={2} xs={12} lg={6}>
        <Grid item xs={12}>
          <ChartsWrapper>
            <CircleChart
              title="Win Rate"
              data={[
                { name: "wins", value: winGames, color: "#3880FF" },
                { name: "losses", value: lossGames, color: "#DFDFDF" },
              ]}
              labels={[{ style: { fontSize: "1.5rem" }, value: `${winRate}%` }]}
            />
            <CircleChart
              title="Average KDA"
              data={[
                { name: "kills", value: kills, color: "#77DD77" },
                { name: "deaths", value: deaths, color: "#FF6961" },
                { name: "assists", value: assists, color: "#3880FF" },
              ]}
              labels={[
                { style: { fontSize: "0.875rem", color: "#77DD77" }, value: `Kills: ${kills.toFixed(2)}` },
                { style: { fontSize: "0.875rem", color: "#FF6961" }, value: `Deaths: ${deaths.toFixed(2)}` },
                { style: { fontSize: "0.875rem", color: "#3880FF" }, value: `Assists: ${assists.toFixed(2)}` },
              ]}
            />
          </ChartsWrapper>
        </Grid>
        <Grid item xs={12}>
          <FavoriteChampionsWrapper>
            {favChamps.length ? (
              <React.Fragment>
                <div className="title-wrapper">Favorite Champions</div>
                {favChamps.map((champ, idx) => (
                  <div key={idx} className="icon-wrapper">
                    <Avatar src={getChampionIconURL(champ)} />
                    {champ}
                  </div>
                ))}
              </React.Fragment>
            ) : (
              <div className="title-wrapper">No champions found...</div>
            )}
          </FavoriteChampionsWrapper>
        </Grid>
      </Grid>
    </Grid>
  );
}

    

export default UserSummary;
