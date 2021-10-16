import { Request, Response } from "express"
import SummonerDTO from "../interfaces/ISummonerDTO";
import { getSummonerByName } from "../services/summonerService";

export const getSummonerInfoByName = async (req: Request, res: Response) => {
    try {
        const summonerName: string = req.query.summonerName as string;
        const summonerDTO = await getSummonerByName(summonerName) as SummonerDTO;
        res.status(200).json(summonerDTO);
    } catch (err: any) {
        console.log(err);
        res.status(500).send({
            message: err.message,
            error: err.toString(),
        })
    }
}
