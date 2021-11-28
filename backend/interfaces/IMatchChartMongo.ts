import MatchChartDataDTO from "./IMatchChartDataDTO";

export default interface MatchChartMongo {
    puuid: string;
    matches: Array<MatchChartDataDTO>;
}
