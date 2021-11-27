import mongoose, { Schema } from 'mongoose';
import MatchDto from '../interfaces/IMatch/IMatchDto';
import MetadataDto from '../interfaces/IMatch/IMetadataDto';
import InfoDto from '../interfaces/IMatch/IInfoDto';
import ParticipantDto from '../interfaces/IMatch/IParticipantDto';
import PerksDto from '../interfaces/IMatch/PerksDto';
import PerkStatsDto from '../interfaces/IMatch/IPerkStatsDto';
import PerkStyleDto from '../interfaces/IMatch/IPerkStyleDto';
import TeamDto from '../interfaces/IMatch/ITeamDto';
import BanDto from '../interfaces/IMatch/IBanDto';
import ObjectivesDto from '../interfaces/IMatch/IObjectivesDto';
import ObjectiveDto from '../interfaces/IMatch/IObjectiveDto';


const objectiveDtoSchema = new Schema<ObjectiveDto>({
    first: Boolean,
    kills: Number,
});

const objectivesDtoSchema = new Schema<ObjectivesDto>({
    baron: {type: objectiveDtoSchema, required: true},
    champion: {type: objectiveDtoSchema, required: true},
    dragon: {type: objectiveDtoSchema, required: true},
    inhibitor: {type: objectiveDtoSchema, required: true},
    riftHerald: {type: objectiveDtoSchema, required: true},
    tower: {type: objectiveDtoSchema, required: true},
});

const banDtoSchema = new Schema<BanDto>({
    championId: Number,
    pickTurn: Number,
});

const teamDtoSchema = new Schema<TeamDto>({
    bans: {type: [banDtoSchema], required: true},
    objectives: {type: objectivesDtoSchema, required: true},
    teamId: Number,
    win: Boolean,
});

const perkStyleDtoSchema = new Schema<PerkStyleDto>({
    perk: Number,
    var1: Number,
    var2: Number,
    var3: Number,
})

const perkStatsDtoSchema = new Schema<PerkStatsDto>({
    defense: Number,
    flex: Number,
    offense: Number,
});

const perksDtoSchema = new Schema<PerksDto>({
    statPerks: {type: perkStatsDtoSchema, required: true},
    styles: {type: [perkStyleDtoSchema], required: true},
});

const participantDtoSchema = new Schema<ParticipantDto>({
    assists: Number,
    baronKills: Number,
    bountyLevel: Number,
    champExperience: Number,
    champLevel: Number,
    championId: Number,
    championName: String,
    championTransform: Number,
    consumablesPurchased: Number,
    damageDealtToBuildings: Number,
    damageDealtToObjectives: Number,
    damageDealtToTurrets: Number,
    damageSelfMigated: Number,
    deaths: Number,
    detectorWardsPlaced: Number,
    doubleKills: Number,
    dragonKills: Number,
    firstBloodAssist: Boolean,
    firstBlookKill: Boolean,
    firstTowerAssist: Boolean,
    firstTowerKill: Boolean,
    gameEndedinEarlySurrender: Boolean,
    gameEndedinSurrender: Boolean,
    goldEarned: Number,
    goldSpent: Number,
    individualPosition: String,
    inhibitorKills: Number,
    inhibitorTakedowns: Number,
    inhibitorLost: Number,
    item0: Number,
    item1: Number,
    item2: Number,
    item3: Number,
    item4: Number,
    item5: Number,
    item6: Number,
    itemPurchased: Number,
    killingSprees: Number,
    kills: Number,
    lane: String,
    largestCriticalStrike: Number,
    largestKillingSpree: Number,
    largestMultiKill: Number,
    longestTimeSpentLiving: Number,
    magicDamageDealt: Number,
    magicDamageDealtToChampions: Number,
    magicDamageTaken: Number,
    neutralMinionsKilled: Number,
    nexusKills: Number,
    nexusTakedowns: Number,
    nexusLost: Number,
    objectivesStolen: Number,
    objectivesStolenAssists: Number,
    participantId: Number,
    pentaKills: Number,
    perks: {type: perksDtoSchema, required: true},
    physicalDamageDealt: Number,
    phyiscalDamageDealtToChampions: Number,
    phyiscalDamageTaken: Number,
    profileIcon: Number,
    puuid: String,
    quadraKills: Number,
    riottIdName: String,
    riotIdTagline: String,
    role: String,
    sightWardsBoughtInGame: Number,
    spell1Casts: Number,
    spell2Casts: Number,
    spell3Casts: Number,
    spell4Casts: Number,
    summoner1Casts: Number,
    summoner1Id: Number,
    summoner2Casts: Number,
    summoner2Id: Number,
    summonerId: String,
    summonerLevel: Number,
    summonerName: String,
    teamEarlySurrendered: Boolean,
    teamId: Number,
    teamPosition: String,
    timeCCingOthers: Number,
    timePlayed: Number,
    totalDamageDealt: Number,
    totalDamageDealtToChampions: Number,
    totalDamageShieldedOnTeammates: Number,
    totalDamageTaken: Number,
    totalHeal: Number,
    totalHealOnTeammates: Number,
    totalMinionsKilled: Number,
    totalTimeCCDealt: Number,
    totalTimeSpentDead: Number,
    totalUnitsHealed: Number,
    tripleKills: Number,
    trueDamageDealt: Number,
    trueDamageDealtToChampions: Number,
    trueDamageTaken: Number,
    turentKills: Number,
    turrentTakedowns: Number,
    turrentsLost: Number,
    unrealKills: Number,
    visionScore: Number,
    visionWardBoughtInGame: Number,
    wardsKilled: Number,
    wardsPlaced: Number,
    win: Number,
});

const metadataDtoSchema = new Schema<MetadataDto>({
    dataVersion: String,
    matchId: String,
    participants: {type: [String], required: true},
});

const infoDtoSchema = new Schema<InfoDto>({
    gameCreation: Number,
    gameDuration: Number,
    gameEndTimestamp: Number,
    gameId: Number,
    gameMode: String,
    gameName: String,
    gameStartTimestamp: Number,
    gameType: String,
    gameVersion: String,
    mapId: Number,
    participants: {type: [participantDtoSchema], required: true},
    platformId: String,
    queueId: Number,
    teams: {type: [teamDtoSchema], required: true},
    tournamentCode: String
});

const matchDtoSchema = new Schema<MatchDto>({
    metadataDto: {type: metadataDtoSchema, required: true},
    info: {type: infoDtoSchema, required: true},
});

export default mongoose.model<MatchDto>('MatchDto', matchDtoSchema);
