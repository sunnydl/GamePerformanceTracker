import { info } from 'console';
import * as riotApis from '../config/riotApis'
import MatchDto from '../interfaces/IMatch/IMatchDto'

// const region = 'your_region'
// const myid = 'your_puuid'

const region = 'NA'
const myid = 'qWqZJtdh6o_UYm0qJah8app2iPXfwrqWAKfddn8ORkxaiBJ_YQax8L8k-4atejesTfftcrak4OcBOg'
const matchId = 'NA1_4080341688'

//given puuid, return the last 10 match list id.
const getMatchListByPUUID = async(puuid: string, region: string): Promise<Array<string>> => {
    const matchListInfo: Array<string> = await riotApis.findMatchHistoryInfo(puuid, region);
    if(matchListInfo.length >= 1){
        // console.log(matchListInfo);
        return matchListInfo as Array<string>;;
    } else{
        return [] as Array<string>;
    }
};

//given match id, return the metadata and info element.
export const getMatchInfoByMatchId = async(matchId: string, region: string): Promise<MatchDto | undefined> => {
    try{
        const matchInfo: Array<MatchDto> = await riotApis.findMatchInfo(matchId, region);
        console.log(matchInfo);
        return;
    } catch (error) {
        console.log(error);
    }
};

const main = async() =>{
    const temp: Array<string> = await getMatchListByPUUID(myid, region);
    getMatchInfoByMatchId(temp[0], region);
};

main()