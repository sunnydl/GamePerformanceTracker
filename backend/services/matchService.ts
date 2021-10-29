import { info } from 'console';
import * as riotApis from '../config/riotApis'
import MatchDto from '../interfaces/IMatch/IMatchDto'
import ParticipantDto from '../interfaces/IMatch/IParticipantDto';

// const region = 'your_region'
// const myid = 'your_puuid'

const region = 'NA'
const myid = 'qWqZJtdh6o_UYm0qJah8app2iPXfwrqWAKfddn8ORkxaiBJ_YQax8L8k-4atejesTfftcrak4OcBOg'

//init empty arr of typer participantDto
// gives error: var used before initialized
// var participantMatchInfoArr: ParticipantDto[] = [];

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

//given match id, return the metadata and info element.
// export const getMatchInfoByMatchId = async(matchId: string, region: string): Promise<ParticipantDto | undefined> => {
//     try{
//         const matchInfo: MatchDto = await riotApis.findMatchInfo(matchId, region);
//         console.log(matchInfo);
//         console.log(matchInfo.info.participants[0]);
//         return matchInfo.info.participants[0];
//     } catch (error) {
//         console.log(error);
//     }
// };

// for each match, collect stat of each participant and concat them into a list

// [matchID: info: Participants:]

const main = async() =>{
    const temp: Array<string> = await getMatchListByPUUID(myid, region);
    // console.log(temp);
    
    getParticipantsInfoByMatchId(temp[0], region);
};

main()