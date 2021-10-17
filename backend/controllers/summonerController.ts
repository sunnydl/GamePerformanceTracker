import { Request, Response } from "express"
import SummonerDTO from "../interfaces/ISummonerDTO";
import { getSummonerByName } from "../services/summonerService";
import * as exceptionHandler from "./exceptionHandler";

export const getSummonerInfoByName = async (req: Request, res: Response) => {
    try {
        const summonerName: string = req.query.summonerName as string;
        const summonerDTO = await getSummonerByName(summonerName) as SummonerDTO;
        res.status(200).json(summonerDTO);
    } catch (err: any) {
        res.status(exceptionHandler.exceptionCodeHandler(err.response.status)).send({
            message: err.message,
            error: err.toString(),
        })
    }
}
