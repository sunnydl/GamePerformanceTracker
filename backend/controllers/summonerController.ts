import { Request, Response } from "express"

export const getSummonerInfo = (req: Request, res: Response) => {
    try {

    } catch (err: any) {
        console.log(err);
        res.status(500).send({
            message: err.message,
            error: err.toString(),
        })
    }
}
