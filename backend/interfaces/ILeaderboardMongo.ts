import SummonerDTO from "./ISummonerDTO";

export default interface LeaderboardMongo {
    tier: string;
    division: string;
    players: Array<SummonerDTO>;
}
