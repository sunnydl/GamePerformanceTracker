import SummonerInfo from "../interfaces/ISummonerInfo";
import config from "../config/config";
import axios, { AxiosInstance, AxiosResponse } from 'axios';
import SummonerLeague from "../interfaces/ISummonerLeague";
import ChampionMastery from "../interfaces/IChampionMastery";
import MatchDto from "../interfaces/IMatch/IMatchDto";
import LeagueListDTO from "../interfaces/ILeagueListDTO";

interface Mapping {
    [key: string]: string;
}

const version = "9.3.1";

const REGION: Mapping = {
    NA: 'na1.api.riotgames.com',
    KR: 'kr.api.riotgames.com',
    JP: 'jp1.api.riotgames.com',
    BR: 'br1.api.riotgames.com',
    EUN: 'eun1.api.riotgames.com',
    EUW: 'euw1.api.riotgames.com',
    LA1: 'la1.api.riotgames.com',
    LA2: 'la2.api.riotgames.com',
    OC: 'oc1.api.riotgames.com',
    TR: 'tr1.api.riotgames.com',
    RU: 'ru.api.riotgames.com',
};
const MATCH_REGION: Mapping = {
    NA: 'americas.api.riotgames.com',
    // regions will be added
};

export const HIGH_TIER: Mapping = {
    Challenger: 'challengerleagues',
    GrandMaster: 'grandmasterleagues',
    Master: 'masterleagues',
}

const LOW_TIER: Mapping = {
    Diamond: 'DIAMOND',
    Platinum: 'PLATINUM',
    Gold: 'GOLD',
    Silver: 'SILVER',
    Bronze: 'BRONZE',
    Iron: 'IRON',
}

export const QUEUE_TYPE: Mapping = {
    SOLO: 'RANKED_SOLO_5x5',
    FLEX: 'RANKED_FLEX_SR',
}

// set up axios to include riot api key, and export with config
const axiosInstance: AxiosInstance = axios.create({
    headers: {
        'Content-Type': 'application/json',
        'X-Riot-Token': config.riotApiKey,
    }
});

/**
 * find the basic information of player account given its name.
 *
 * @param {string} summonerName The name of the player
 * @param {string} region The region that the player is located in
 * @return {Promise<SummonerInfo>} Basic information of the player account
 */
export const findSummonerInfo = async(summonerName: string, region: string): Promise<SummonerInfo> => {
    const response: AxiosResponse = await axiosInstance.get(`https://${REGION[region]}/lol/summoner/v4/summoners/by-name/${summonerName}`);
    return response.data as SummonerInfo;
}

/**
 * find the basic information of player account given its summoner id.
 *
 * @param {string} summonerId The summoner id of the player
 * @param {string} region The region that the player is located in
 * @return {Promise<SummonerInfo>} Basic information of the player account
 */
export const findSummonerInfoBySummonerId = async(summonerId: string, region: string): Promise<SummonerInfo> => {
    const response: AxiosResponse = await axiosInstance.get(`https://${REGION[region]}/lol/summoner/v4/summoners/${summonerId}`);
    return response.data as SummonerInfo;
}

/**
 * find the game information of player account given its summoner id.
 *
 * @param {string} id The summoner id of the player
 * @param {string} region The region that the player is located in
 * @return {Promise<Array<SummonerLeague>>} Game information of the player account
 */
export const findSummonerLeague = async(id: string, region: string): Promise<Array<SummonerLeague>> => {
    const response: AxiosResponse = await axiosInstance.get(`https://${REGION[region]}/lol/league/v4/entries/by-summoner/${id}`);
    return response.data as Array<SummonerLeague>;
}

/**
 * find the top champion masteries of player account given its summoner id.
 *
 * @param {string} id The summoner id of the player
 * @param {string} region The region that the player is located in
 * @return {Promise<Array<ChampionMastery>>} The top champion masteries of player account
 */
export const findChampionMastery = async(id: string, region: string): Promise<Array<ChampionMastery>> => {
    const response: AxiosResponse = await axiosInstance.get(`https://${REGION[region]}/lol/champion-mastery/v4/champion-masteries/by-summoner/${id}`);
    return response.data as Array<ChampionMastery>;
}

/**
 * find the champion data hosted by Riot from Data Dragon.
 *
 * @return {Promise<any>} The champion data
 */
export const getChampsData = async(): Promise<any> => {
    const response = await axios.get('http://ddragon.leagueoflegends.com/cdn/' + version + '/data/de_DE/champion.json');
    const data: any = response.data;
    return data.data;
}

/**
 * find the recent number of game ids of the specified type of match given a puuid and region
 *
 * @param {string} puuid The puuid of the player
 * @param {string} region The region that the player is located in
 * @param {string} typeOfMatch The type of match to be fetched
 * @param {number} count The number of matches to fetch
 * @return {Promise<Array<string>>} The game ids found
 */
export const findMatchHistoryInfo = async(puuid: string, region: string, typeOfMatch: string, count: number): Promise<Array<string>> => {
    const response: AxiosResponse = await axiosInstance.get(`https://${MATCH_REGION[region]}/lol/match/v5/matches/by-puuid/${puuid}/ids`, {
        params: {
            type: typeOfMatch,
            count: count,
            start: 0,
        }
    });
    return response.data as Array<string>;
}

/**
 * find the game information given its id and region
 *
 * @param {string} match_id The id of the game
 * @param {string} region The region that the player is located in
 * @return {Promise<MatchDto>} The game's information
 */
export const findMatchInfo = async(match_id: string, region: string): Promise<MatchDto> => {
    const response: AxiosResponse = await axiosInstance.get(`https://${MATCH_REGION[region]}/lol/match/v5/matches/${match_id}`);
    return response.data as MatchDto;
}

/**
 * find the top players data in high tier ranking
 *
 * @param {string} tier The tier of the players
 * @param {string} queueType The type of the queue
 * @param {string} region The region that the player is located in
 * @return {Promise<LeagueListDTO>} The List of the top players in high rankings
 */
export const getLeaderBoardHighTierList = async(tier: string, queueType: string, region: string): Promise<LeagueListDTO> => {
    const response: AxiosResponse = await axiosInstance.get(`https://${REGION[region]}/lol/league/v4/${HIGH_TIER[tier]}/by-queue/${QUEUE_TYPE[queueType]}`);
    return response.data as LeagueListDTO;
}

/**
 * find the top players data in low tier ranking
 *
 * @param {string} tier The tier of the players
 * @param {string} division The division of the players
 * @param {string} queueType The type of the queue
 * @param {string} region The region that the player is located in
 * @return {Promise<Array<SummonerLeague>>} The List of the top players in low rankings
 */
export const getLeaderBoardLowTierList = async(tier: string, division: string, queueType: string, region: string): Promise<Array<SummonerLeague>> => {
    const response: AxiosResponse = await axiosInstance.get(`https://${REGION[region]}/lol/league/v4/entries/${QUEUE_TYPE[queueType]}/${LOW_TIER[tier]}/${division}`);
    return response.data as Array<SummonerLeague>;
}
