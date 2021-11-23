import SummonerLeague from "./ISummonerLeague";

export default interface LeagueListDTO {
    leagueId: string;
    entries: Array<SummonerLeague>;
    tier: string;
    name: string;
    queue: string;
}
