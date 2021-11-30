import MatchHistoryDTO from './IMatchHistoryDTO';

export default interface MatchHistoryMongo {
    puuid: string;
    matches: Array<MatchHistoryDTO>;
}
