# Backend endpoint documentation

## Dev Setup needToKnow:
1. Switch the Riot api key set in /backend/config/config.ts to your api key on [Riot developer portal](https://developer.riotgames.com/). (dev key expires everyday, so need to be reset just in case when developing.)
2. Do `npm run dev` to run the server

#### GET api/summonerInfo/:summonerName
##### request input (Get request param):
* summonerName
##### response: 
* summonerName: string;
* summonerLevel: number;
* summonerIcon: number;
* rank: string;
* winGames: number;
* lossGames: number;
