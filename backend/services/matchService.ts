import { info } from 'console';
import * as riotApis from '../config/riotApis'
import MatchDto from '../interfaces/IMatch/IMatchDto'

const region = 'NA'
const myid = 'qWqZJtdh6o_UYm0qJah8app2iPXfwrqWAKfddn8ORkxaiBJ_YQax8L8k-4atejesTfftcrak4OcBOg'

export const getMatchListByPUUID = async(puuid: string, region: string): Promise<Array<MatchDto> | undefined> => {
    try{
        const matchListInfo: Array<MatchDto> = await riotApis.findMatchHistoryInfo(puuid, region);
        console.log(matchListInfo);
        return matchListInfo;
    } catch (error) {
        console.log(error);
    }
}

getMatchListByPUUID(myid, region);
