import SummonerInfo from "./ISummonerInfo";
import SummonerLeague from "./ISummonerLeague";

export default interface User {
    email?: string;
    summonerInfo: SummonerInfo;
    summonerLeague: SummonerLeague;
    winRate: Array<number>;
    matchIds: Array<string>;
}
