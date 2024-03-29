import SummonerInfo from './ISummonerInfo';
import SummonerLeague from './ISummonerLeague';

export default interface User {
    email?: string;
    summonerInfo: SummonerInfo;
    summonerLeague: SummonerLeague;
    winRate: Array<WinRates>;
    matchIds: Array<string>;
    profileIconId: number;
    puuid: string;
    region: string;
}

interface WinRates {
    winRate: number;
    date: number; // in yyyyMMddhhmmss or yyyyMMdd format
}
