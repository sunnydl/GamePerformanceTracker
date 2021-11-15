export default interface MatchHistoryDTO {
    gameMode?: string;
    gameDate: string;
    win: boolean;
    role: string;
    championName: string;
    kills: number;
    deaths: number;
    assists: number;
    gptScore: number;
    visionPerMin: number;
    csPerMin: number;
    dmgPerMin: number;
    visionAmt: number;
    csAmt: number;
    dmgAmt: number;
}
