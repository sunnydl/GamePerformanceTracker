export default interface SummonerLeague {
    leagueId: string;
    summonerId: string;
    summonerName: string;
    queueType: string;
    tier: string;
    rank: string;
    leaguePoints: number;
    wins: number;
    losses: number;
    hotStreak: boolean;
    freshBlood: boolean;
    inactive: boolean;
    miniSeries: MiniSeries;
}

interface MiniSeries {
    losses: Number;
    progress: String;
    target: Number;
    wins: Number;
}
