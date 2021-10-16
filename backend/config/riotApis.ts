import SummonerInfo from "../interfaces/ISummonerInfo";
import config from "./config";
import axios, { AxiosInstance, AxiosResponse } from 'axios';
import SummonerLeague from "../interfaces/ISummonerLeague";

const REGION = "na1.api.riotgames.com";

// set up axios to include riot api key, and export with config
const axiosInstance: AxiosInstance = axios.create({
    baseURL: `https://${REGION}`,
    headers: {
        'Content-Type': 'application/json',
        'X-Riot-Token': config.riotApiKey,
    }
});

// for info related to id and stuff
export const findSummonerInfo = async(summonerName: string): Promise<SummonerInfo> => {
    const response: AxiosResponse = await axiosInstance.get(`/lol/summoner/v4/summoners/by-name/${summonerName}`);
    return response.data as SummonerInfo;
}

// for info related to winrate, rank, and stuff
export const findSummonerLeague = async(id: string): Promise<Array<SummonerLeague>> => {
    const response: AxiosResponse = await axiosInstance.get(`/lol/league/v4/entries/by-summoner/${id}`);
    return response.data as Array<SummonerLeague>;
}
