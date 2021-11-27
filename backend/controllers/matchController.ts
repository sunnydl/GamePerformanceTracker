import { Request, Response } from "express";
import * as exceptionHandler from './exceptionHandler'
import * as matchService from '../services/matchService'
import * as summonerService from '../services/summonerService'
import MatchChartDataDTO from "../interfaces/IMatchChartDataDTO";

/**
 * Controller for fetching the recent match data for match history display
 *
 * @param {Request} req HTTP request
 * @param {Response} res HTTP response
 * @return {Promise<void>}
 */
export const getMatchHistory = async(req: Request, res: Response) => {
    const summonerName: string = req.query.summonerName as string;
    const region: string = req.query.region as string || 'NA'; // default as NA if no region input
    const numOfMatch: number = parseInt(req.query.numOfMatch as string) || 5; // default as 5 if null
    const matchType: string = req.query.matchType as string || '';
    try {
        const puuid: string = await summonerService.findSummonerPuuid(summonerName, region);
        const matchData = await matchService.getMatchHistoryData(puuid, region, matchType, numOfMatch);
        res.status(200).json(matchData);
    } catch (err: any) {
        res.status(exceptionHandler.exceptionCodeHandler(err?.response?.status)).send({
            message: err.message,
            error: err.toString(),
        })
    }
}

/**
 * Controller for fetching the recent match data for match chart display
 *
 * @param {Request} req HTTP request
 * @param {Response} res HTTP response
 * @return {Promise<void>}
 */
export const getMatchChartData = async(req: Request, res: Response) => {
    const summonerName: string = req.query.summonerName as string;
    const region: string = req.query.region as string || 'NA'; // default as NA if no region input
    const numOfMatch: number = parseInt(req.query.numOfMatch as string) || 5; // default as 5 if null
    const matchType: string = 'ranked'; // default as ranked for overview
    try {
        const puuid: string = await summonerService.findSummonerPuuid(summonerName, region);
        const matchChartData: Array<MatchChartDataDTO> = await matchService.getMatchChartData(puuid, region, matchType, numOfMatch);
        res.status(200).json(matchChartData);
    } catch (err: any) {
        res.status(exceptionHandler.exceptionCodeHandler(err?.response?.status)).send({
            message: err.message,
            error: err.toString(),
        })
    }
}
