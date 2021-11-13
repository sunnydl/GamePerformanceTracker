export default interface SummonerDTO {
    summonerName: string;
    summonerLevel: number;
    summonerIcon: number;
    rank: string;
    leaguePoints: number;
    winGames: number;
    lossGames: number;
    favChamps: Array<string>;
}
