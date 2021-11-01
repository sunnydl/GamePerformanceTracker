import { info } from 'console';
import * as riotApis from '../config/riotApis'
import MatchDto from '../interfaces/IMatch/IMatchDto'
import ParticipantDto from '../interfaces/IMatch/IParticipantDto';

const myid = "qWqZJtdh6o_UYm0qJah8app2iPXfwrqWAKfddn8ORkxaiBJ_YQax8L8k-4atejesTfftcrak4OcBOg"
const region = `NA`

//given puuid, return the last 10 match list id.
export const getMatchListByPUUID = async(puuid: string, region: string): Promise<Array<string>> => {
    const matchListInfo: Array<string> = await riotApis.findMatchHistoryInfo(puuid, region);
    if(matchListInfo.length){
        return matchListInfo as Array<string>;
    } else{
        return [] as Array<string>;
    }
};

//return list of participant info of the match
export const getParticipantsInfoByMatchId = async(matchId: string, region: string): Promise<Array<ParticipantDto> | undefined> => {
    const matchInfo: MatchDto = await riotApis.findMatchInfo(matchId, region);
    if (matchInfo){
        const participantMatchInfoArr: ParticipantDto[] = [];
        for (let players = 0; players <= 9; players ++){
            participantMatchInfoArr.push(matchInfo.info.participants[players]);
        }
        // console.log(participantMatchInfoArr);
        return participantMatchInfoArr;
    } else {
        return [] as unknown as Array<ParticipantDto>;
    }
};

const getMatchObjByMatchId = async(matchId: string, region: string): Promise<MatchDto> => {
    const matchObj: MatchDto = await riotApis.findMatchInfo(matchId, region);
    // console.log(matchObj);
    return matchObj as MatchDto;
}

export const getMatchObjListByMatchList = async (match_list: Array<string>, region: string): Promise<Array<MatchDto> | undefined> => {
    const matchDTOArr: Array<MatchDto> = [];
    for( const matchElem of match_list){
        const match = await getMatchObjByMatchId(matchElem, region);
        matchDTOArr.push(match);
    }
    // console.log(matchDTOArr);
    return matchDTOArr;
}

// given participant info array, locate info about curr player, and return
const main = async() =>{
    const temp: Array<string> = await getMatchListByPUUID(myid, region);
    // console.log(temp);
    await getMatchObjByMatchId(temp[0], region)
    await getMatchObjListByMatchList(temp, region);
    await getParticipantsInfoByMatchId(temp[0], region);
};

main() 