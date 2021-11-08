import * as riotApis from '../riotApis/riotApis'
import MatchDto from '../interfaces/IMatch/IMatchDto'
import ParticipantDto from '../interfaces/IMatch/IParticipantDto';
import currency from 'currency.js';
import MatchDataDTO from '../interfaces/IMatchDataDTO';
import { match } from 'assert';

export const getMatchData = async(puuid: string, region: string, numOfMatch: number): Promise<MatchDataDTO> => {
    const matchList: Array<MatchDto> = await getMatchListByPUUID(puuid, region, numOfMatch);
    return analysisMatch(puuid, matchList);
}

//given puuid, return the last 10 match list id.
const getMatchListByPUUID = async(puuid: string, region: string, numOfMatch: number): Promise<Array<MatchDto>> => {
    const matchListInfo: Array<string> = await riotApis.findMatchHistoryInfo(puuid, region);
    if(matchListInfo.length){
        const matchList: Array<MatchDto> = await getMatchObjListByMatchList(matchListInfo, region);
        return matchList;
    } else{
        return [] as Array<MatchDto>;
    }
};

export const getMatchObjListByMatchList = async (match_list: Array<string>, region: string): Promise<Array<MatchDto>> => {
    const matchDTOArr: Array<MatchDto> = [];
    for( const matchElem of match_list){
        const match = await riotApis.findMatchInfo(matchElem, region);
        matchDTOArr.push(match);
    }
    // console.log(matchDTOArr);
    return matchDTOArr;
}

export const analysisMatch = (puuid: string, matchList: Array<MatchDto>): MatchDataDTO => {
    const winlose: Array<number> = [];
    let win = 0;
    let lose = 0;
    let win_lose = 0;
    for(let i = matchList.length-1; i >= 0; i --){
        const partis: Array<ParticipantDto> = matchList[i].info.participants;
        for(let j = 0; j < partis.length; j++){
            if(partis[j].puuid === puuid){
                if(partis[j].win){
                    win += 1;
                }else{
                    lose += 1;
                }
                win_lose = currency(win).divide(currency(lose).add(win)).value;
                winlose.push(win_lose);     
            }     
        }
    }

    return {
        winLoss: winlose,
        kills: [],
        deaths: [],
        assists: [],
        scores: [],
    } as MatchDataDTO;
}

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

export const getNumOfMatchIds = async(puuid: string, region : string, num: number) => {
    const matchListIds: Array<string> = await riotApis.findMatchHistoryInfo(puuid, region);
    const numOfMatchIds: Array<string> = [];
    if (matchListIds.length == 10 && num > 10){
        return matchListIds as Array<string>;
    } else if(matchListIds.length >= num){
        for (let baseNum = 0; baseNum < num; baseNum ++){
            numOfMatchIds.push(matchListIds[baseNum]);
        }
        // console.log(numOfMatchIds);
        return numOfMatchIds;
    } else if (matchListIds.length > 1){
        return matchListIds as Array<string>;
    } else {
        return [] as Array<string>
    }
}