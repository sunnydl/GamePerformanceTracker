# Backend documentation

## Dev Setup needToKnow:
1. Switch the Riot api key set in /backend/config/config.ts to your api key on [Riot developer portal](https://developer.riotgames.com/). (dev key expires everyday, so need to be reset just in case when developing.)
2. Do `npm run dev` to run the server

## Testing
* npm run test::integration -- run integration test
* npm run test::unit -- run all Unit tests with coverage displayed
* npm run test::singleUnit -- run the unit test of your choice
* Note: npm run test::unit will run all the unit test files. To run specific file with file name of "fileName.spec.ts", simply change the testMatch option in /backend/jest.singleUnit.json to "**/?(fileName.)+(spec).ts?(x)".

## Endpoints
#### GET api/summonerInfo/:summonerName/:region
##### request input (Get request param):
* summonerName: string
* region: (Optional) string  
##### response: 
```
{
    summonerName: string
    summonerLevel: number
    summonerIcon: number
    rank: string
    leaguePoints: number,
    winGames: number
    lossGames: number
    favChamps: Array<string>
}
```
#### GET api/matches/:summonerName/:region/:matchType/:numOfMatch
##### request input (Get request param):
* summonerName: string
* region: (Optional) string
* matchType: string
* numOfMatch: number
##### response:
```
[
    {
        name: string,
        winLoss: number,
        kills: number
        deaths: number
        assists: number
        scores: number
    },
    ...
]
```
#### GET api/summonerInfo/leaderboard/:tier/:division/:queueType/:region
##### request input (Get request param):
* tier: string
* division: string
* queueType: string
* region: string
##### response:
```
[
    {
        summonerName: string
        summonerLevel: number
        summonerIcon: number
        rank: string
        leaguePoints: number,
        winGames: number
        lossGames: number
        favChamps: Array<string>
    },
    ...
]
```
