import { info } from 'console';
import * as riotApis from '../config/riotApis'
import MatchDto from '../interfaces/IMatch/IMatchDto'
import ParticipantDto from '../interfaces/IMatch/IParticipantDto';

// const region = 'your_region'
// const myid = 'your_puuid'

//given puuid, return the last 10 match list id.
const getMatchListByPUUID = async(puuid: string, region: string): Promise<Array<string>> => {
    const matchListInfo: Array<string> = await riotApis.findMatchHistoryInfo(puuid, region);
    if(matchListInfo.length){
        // console.log(matchListInfo);
        return matchListInfo as Array<string>;;
    } else{
        return [] as Array<string>;
    }
};

// //given match id, return the metadata and info element.
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