//include match here!
export default interface MatchDto {
    metadataDto: MetadataDto;
    info: InfoDto;
}

interface MetadataDto {
    // game version??? VVV
    dataVersion: string;
    matchId: string;
    participants: Array<string>;
}

interface InfoDto {
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

interface ParticipantDto {
    assists: number;
    baronKills: number;
    bountyLevel: number;
    champExperience: number;
    champLevel: number;
    championId: number;
    championName: string;
    championTransform: number;
    consumablesPurchased: number;
    damageDealtToBuildings: number;
    damageDealtToObjectives: number;
    damageDealtToTurrets: number;
    damageSelfMigated: number;
    deaths: number;
    detectorWardsPlaced: number;
    doubleKills: number;
    dragonKills: number;
    firstBloodAssist: boolean;
    firstBlookKill: boolean;
    firstTowerAssist: boolean;
    firstTowerKill: boolean;
    gameEndedinEarlySurrender: boolean;
    gameEndedinSurrender: boolean;
    goldEarned: number;
    goldSpent: number;
    individualPosition: string;
    inhibitorKills: number;
    inhibitorTakedowns: number;
    inhibitorLost: number;
    item0: number;
    item1: number;
    item2: number;
    item3: number;
    item4: number;
    item5: number;
    item6: number;
    itemPurchased: number;
    killingSprees: number;
    kills: number;
    lane: string;
    largestCriticalStrike: number;
    largestKillingSpree: number;
    largestMultiKill: number;
    longestTimeSpentLiving: number;
    magicDamageDealt: number;
    magicDamageDealtToChampions: number;
    magicDamageTaken: number;
    neutralMinionsKilled: number;
    nexusKills: number;
    nexusTakedowns: number;
    nexusLost: number;
    objectivesStolen: number;
    objectivesStolenAssists: number;
    participantId: number;
    pentaKills: number;
    perks: PerksDto;
    physicalDamageDealt: number;
    phyiscalDamageDealtToChampions: number;
    phyiscalDamageTaken: number;
    profileIcon: number;
    puuid: string;
    quadraKills: number;
    riottIdName: string;
    riotIdTagline: string;
    role: string;
    sightWardsBoughtInGame: number;
    spell1Casts: number;
    spell2Casts: number;
    spell3Casts: number;
    spell4Casts: number;
    summoner1Casts: number;
    summoner1Id: number;
    summoner2Casts: number;
    summoner2Id: number;
    summonerId: string;
    summonerLevel: number;
    summonerName: string;
    teamEarlySurrendered: boolean;
    teamId: number;
    teamPosition: string;
    timeCCingOthers: number;
    timePlayed: number;
    totalDamageDealt: number;
    totalDamageDealtToChampions: number;
    totalDamageShieldedOnTeammates: number;
    totalDamageTaken: number;
    totalHeal: number;
    totalHealOnTeammates: number;
    totalMinionsKilled: number;
    totalTimeCCDealt: number;
    totalTimeSpentDead: number;
    totalUnitsHealed: number;
    tripleKills: number;
    trueDamageDealt: number;
    trueDamageDealtToChampions: number;
    trueDamageTaken: number;
    turentKills: number;
    turrentTakedowns: number;
    turrentsLost: number;
    unrealKills: number;
    visionScore: number;
    visionWardBoughtInGame: number;
    wardsKilled: number;
    wardsPlaced: number;
    win: boolean;
}

interface PerksDto {
    statPerks: PerkStatsDto;
    styles: Array<PerkStatsDto>;
}

interface PerkStatsDto {
    defense: number;
    flex: number;
    offense: number;
}

interface PerkStyleSelectionDto {
    perk: number;
    var1: number;
    var2: number;
    var3: number;
}

interface TeamDto {
    bans: Array<BanDto>;
    objectives: ObjectivesDto;
    teamId: number;
    win: boolean;
}

interface BanDto {
    championId: number;
    pickTurn: number;
}

interface ObjectivesDto {
    baron: ObjectiveDto;
    champion: ObjectiveDto;
    dragon: ObjectiveDto;
    inhibitor: ObjectiveDto;
    riftHerald: ObjectiveDto;
    tower: ObjectiveDto;
}

interface ObjectiveDto {
    first: boolean;
    kills: number;
}