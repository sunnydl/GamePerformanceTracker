export default interface SummonerLeague {
    leagueId: String;
    queueType: String;
    tier: String;
    rank: String;
    leaguePoints: Number;
    wins: Number;
    losses: Number;
    hotStreak: Boolean;
    freshBlood: Boolean;
    inactive: Boolean;
    miniSeries: MiniSeries;
}

interface MiniSeries {
    losses: Number;
    progress: String;
    target: Number;
    wins: Number;
}
