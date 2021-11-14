export interface UserState {
    summonerName?:  string;
    summonerLevel?: number;
    summonerIcon?:  number;
    rank?:          string;
    leaguePoints?:  number;
    winGames?:      number;
    lossGames?:     number;
    favChamps?:     string[];
    region?:        string;
    summonerFound?: boolean;
}

export interface ChartState {
    name: string;
    winLoss: number;
    kills: number;
    deaths: number;
    assists: number;
    scores: number;
}

export interface LeaderboardState {
    tier: string;
    division: string;
    queueType: string;
    leaderboard: Array<UserState>;
}
