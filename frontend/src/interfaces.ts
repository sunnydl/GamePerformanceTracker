// Redux state interfaces
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

export interface MatchState {
    gameMode?: string,
    gameDate: string,
    win: boolean,
    role: string,
    championName: string,
    kills: number,
    deaths: number,
    assists: number,
    gptScore: number,
    visionPerMin: number,
    csPerMin: number,
    dmgPerMin: number,
    visionAmt: number,
    csAmt: number,
    dmgAmt: number
}

export interface LeaderboardState {
    tier: string;
    division: string;
    queueType: string;
    leaderboard: Array<UserState>;
}

export interface LoadingState {
    overall: boolean;
    leaderboard: boolean;
}



// Helper interfaces
export interface MatchData {
    kills: number;
    deaths: number;
    assists: number;
    gptScore: number;
    visionPerMin: number;
    csPerMin: number;
    dmgPerMin: number;
}

export interface ChampPerformanceSummary {
    championName: string,
    matches: number,
    wins: number,
    kills: number,
    deaths: number,
    assists: number
}

export interface KDA {
    kills: number;
    deaths: number;
    assists: number;
}
