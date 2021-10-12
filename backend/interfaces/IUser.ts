import SummonerInfo from "./ISummonerInfo";

export default interface User {
    email?: String;
    summonerInfo: SummonerInfo;
    winRate: [Number];
    matchIds: [String];
}
