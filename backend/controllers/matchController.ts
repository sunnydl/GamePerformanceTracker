import { Request, Response } from "express";
import * as exceptionHandler from './exceptionHandler'
import * as matchService from '../services/matchService'
import * as summonerService from '../services/summonerService'
import MatchChartDataDTO from "../interfaces/IMatchChartDataDTO";

export const getMatchHistory = async(req: Request, res: Response) => {
    const summonerName: string = req.query.summonerName as string;
    const region: string = req.query.region as string || 'NA'; // default as NA if no region input
    const numOfMatch: number = parseInt(req.query.numOfMatch as string) || 5; // default as 5 if null
    try {
        const puuid: string = await summonerService.findSummonerPuuid(summonerName, region);
        const matchData = await matchService.getMatchHistoryData(puuid, region, numOfMatch);
        res.status(200).json(matchData);
    } catch (err: any) {
        res.status(exceptionHandler.exceptionCodeHandler(err?.response?.status)).send({
            message: err.message,
            error: err.toString(),
        })
    }
}

export const getMatchChartData = async(req: Request, res: Response) => {
    const summonerName: string = req.query.summonerName as string;
    const region: string = req.query.region as string || 'NA'; // default as NA if no region input
    const numOfMatch: number = parseInt(req.query.numOfMatch as string) || 5; // default as 5 if null
    try {
        const puuid: string = await summonerService.findSummonerPuuid(summonerName, region);
        const matchChartData: Array<MatchChartDataDTO> = await matchService.getMatchChartData(puuid, region, numOfMatch);
        res.status(200).json(matchChartData);
    } catch (err: any) {
        res.status(exceptionHandler.exceptionCodeHandler(err?.response?.status)).send({
            message: err.message,
            error: err.toString(),
        })
    }
}
