import { info } from 'console';
import * as riotApis from '../config/riotApis'
import MatchDto from '../interfaces/IMatch/IMatchDto'

// const region = 'your_region'
// const myid = 'your_puuid'

export const getMatchListByPUUID = async(puuid: string, region: string): Promise<Array<MatchDto> | undefined> => {
    try{
        const matchListInfo: Array<MatchDto> = await riotApis.findMatchHistoryInfo(puuid, region);
        return matchListInfo;
    } catch (error) {
        console.log(error);
    }
}
