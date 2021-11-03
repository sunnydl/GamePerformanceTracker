import SummonerInfo from "../interfaces/ISummonerInfo";
import config from "../config/config";
import axios, { AxiosInstance, AxiosResponse } from 'axios';
import SummonerLeague from "../interfaces/ISummonerLeague";
import ChampionMastery from "../interfaces/IChampionMastery";

interface Regions {
    [key: string]: string;
}

const version = "9.3.1";

const REGION: Regions = {
    'NA': 'na1.api.riotgames.com',
    'KR': 'kr.api.riotgames.com',
    'JP': 'jp1.api.riotgames.com',
    'BR': 'br1.api.riotgames.com',
    'EUN': 'eun1.api.riotgames.com',
    'EUW': 'euw1.api.riotgames.com',
    'LA1': 'la1.api.riotgames.com',
    'LA2': 'la2.api.riotgames.com',
    'OC': 'oc1.api.riotgames.com',
    'TR': 'tr1.api.riotgames.com',
    'RU': 'ru.api.riotgames.com',
};

// set up axios to include riot api key, and export with config
const axiosInstance: AxiosInstance = axios.create({
    headers: {
        'Content-Type': 'application/json',
        'X-Riot-Token': config.riotApiKey,
    }
});

// for info related to id and stuff
export const findSummonerInfo = async(summonerName: string, region: string): Promise<SummonerInfo> => {
    const response: AxiosResponse = await axiosInstance.get(`https://${REGION[region]}/lol/summoner/v4/summoners/by-name/${summonerName}`);
    return response.data as SummonerInfo;
}

// for info related to winrate, rank, and stuff
export const findSummonerLeague = async(id: string, region: string): Promise<Array<SummonerLeague>> => {
    const response: AxiosResponse = await axiosInstance.get(`https://${REGION[region]}/lol/league/v4/entries/by-summoner/${id}`);
    return response.data as Array<SummonerLeague>;
}

export const findChampionMaster = async(id: string, region: string): Promise<Array<ChampionMastery>> => {
    const response: AxiosResponse = await axiosInstance.get(`https://${REGION[region]}/lol/champion-mastery/v4/champion-masteries/by-summoner/${id}`);
    return response.data as Array<ChampionMastery>;
}

export const getChampsData = async(): Promise<any> => {
    const response = await axios.get('http://ddragon.leagueoflegends.com/cdn/' + version + '/data/de_DE/champion.json');
    const data: any = response.data;
    return data.data;
}
