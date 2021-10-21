import ParticipantDto from "./IParticipantDto";
import TeamDto from "./ITeamDto";

export default interface InfoDto {
    gameCreation: number;
    gameDuration: number;
    gameEndTimestamp: number;
    gameId: number;
    gameMode: string;
    gameName: string;
    gameStartTimestamp: number;
    gameType: string;
    gameVersion: string;
    mapId: number;
    participants: Array<ParticipantDto>;
    platformId: string;
    queueId: number;
    teams?: Array<TeamDto>;
    tournamentCode?: string;
}