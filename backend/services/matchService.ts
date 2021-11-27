import * as riotApis from '../riotApis/riotApis'
import MatchDto from '../interfaces/IMatch/IMatchDto'
import ParticipantDto from '../interfaces/IMatch/IParticipantDto';
import currency from 'currency.js';
import MatchChartDataDTO from '../interfaces/IMatchChartDataDTO';
import {timeConverter} from './utility';
import MatchHistoryDTO from '../interfaces/IMatchHistoryDTO';

const rankmap: any = {
    '1': 1,
    '2': 0.5,
    '3': 0.2,
    '4': 0.1,
    '5': 0,
    '6': 0,
    '7': -0.1,
    '8': -0.2,
    '9':-0.5,
    '10': -1,
 }

/**
 * Service used to collect match data for chart.
 *
 * @param {string} puuid The puuid of the player
 * @param {string} region The region that the player is located in
 * @param {string} typeOfMatch The type of match to be fetched
 * @param {number} numOfMatch The number of matches to fetch
 * @return {Promise<Array<MatchChartDataDTO>>} The List of match data for chart
 */
export const getMatchChartData = async(puuid: string, region: string, typeOfMatch: string, numOfMatch: number): Promise<Array<MatchChartDataDTO>> => {
    const matchList: Array<MatchDto> = await getMatchListByPUUID(puuid, region, typeOfMatch, numOfMatch);
    return analysisMatch(puuid, matchList);
}

/**
 * Service used to collect match data for match history.
 *
 * @param {string} puuid The puuid of the player
 * @param {string} region The region that the player is located in
 * @param {string} typeOfMatch The type of match to be fetched
 * @param {number} numOfMatch The number of matches to fetch
 * @return {Promise<Array<MatchHistoryDTO>>} The List of match data for match history
 */
export const getMatchHistoryData = async(puuid: string, region: string, typeOfMatch: string, numOfMatch: number): Promise<Array<MatchHistoryDTO>> => {
    const matchList: Array<MatchDto> = await getMatchListByPUUID(puuid, region, typeOfMatch, numOfMatch);
    return computeMatchHistoryData(matchList, puuid);
}

/**
 * Service used to collect numbers of match data
 *
 * @param {string} puuid The puuid of the player
 * @param {string} region The region that the player is located in
 * @param {string} typeOfMatch The type of match to be fetched
 * @param {number} numOfMatch The number of matches to fetch
 * @return {Promise<Array<MatchDto>>} The List of the match
 */
export const getMatchListByPUUID = async(puuid: string, region: string, typeOfMatch: string, numOfMatch: number): Promise<Array<MatchDto>> => {
    if(numOfMatch >= 20){
        const matchListInfo: Array<string> = await riotApis.findMatchHistoryInfo(puuid, region, typeOfMatch, 20);
        const matchList: Array<MatchDto> = await getMatchObjListByMatchList(matchListInfo, region);
        return matchList as Array<MatchDto>;
    }
    else{
        const matchListInfo: Array<string> = await riotApis.findMatchHistoryInfo(puuid, region, typeOfMatch, numOfMatch);
        const matchList: Array<MatchDto> = await getMatchObjListByMatchList(matchListInfo, region);
        return matchList as Array<MatchDto>;
    }
};

/**
 * Service used to collect numbers of match data given match ids
 *
 * @param {Array<string>} match_list The list of match ids
 * @param {string} region The region that the player is located in
 * @return {Promise<Array<MatchDto>>} The List of the match fetched
 */
export const getMatchObjListByMatchList = async (match_list: Array<string>, region: string): Promise<Array<MatchDto>> => {
    const matchDTOArr: Array<MatchDto> = [];
    for( const matchElem of match_list){
        const match = await riotApis.findMatchInfo(matchElem, region);
        matchDTOArr.push(match);
    }
    return matchDTOArr;
}

/**
 * Service used to compute the data of given match list
 *
 * @param {string} puuid The puuid of the player
 * @param {Array<MatchDto>} matchList The collection of match
 * @return {Promise<Array<MatchDto>>} The list of computed match data
 */
export const analysisMatch = (puuid: string, matchList: Array<MatchDto>): Array<MatchChartDataDTO> => {
    const matchChartDataList: Array<MatchChartDataDTO> = [];
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
                win_lose = currency(win).divide(currency(lose).add(win)).multiply(100).value;
                const matchChartData: MatchChartDataDTO = {
                    name: `Game ${matchList.length-i}`,
                    winLoss: win_lose,
                    kills: partis[j].kills,
                    deaths: partis[j].deaths,
                    assists: partis[j].assists,
                    scores: kDA(matchList[i], puuid),
                }
                matchChartDataList.push(matchChartData);
                break;
            }     
        }
    }

    return matchChartDataList;
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

/**
 * Returns the jg score on large monster's kill for the jg player.
 * @param {Array<number>} ranklist: the jg player's datas.
 * @param {ParticipantDto} jgpart: the jg player's datas.
 * @return {number} jg: the jg score for the large monster's kill.
 */
//get the rank point of specific field
const rankpoint = (ranklist: Array<number>, data: number): number => {
    let rank = 10;
    let rankpt = 0;
    // rank the data with given list.
    for(let i = 0; i < ranklist.length; i++){
        if(data > ranklist[i]){
            rank -= 1;
        }
    }
    //1: + 1, 2: + 0.5, 3: + 0.2, 4: + 0.1, 5: +0, 6: - 0, 7: -0.1, 8: -0.2, 9: -0.5, 10: -1 
    rankpt = rankmap[rank.toString()];
    return rankpt;
}

/**
 * Returns the jg score on large monster's kill for the jg player.
 * @param {ParticipantDto} jgpart: the jg player's datas.
 * @return {number} jg: the jg score for the large monster's kill.
 */
const jgpoint = (jgpart: ParticipantDto): number => {
    let jg = 0;
    if(jgpart.dragonKills >=3 && jgpart.baronKills >= 1){jg = 1;}
    else if(jgpart.dragonKills + jgpart.baronKills >= 4){jg = 0.5;}
    else if(jgpart.dragonKills + jgpart.baronKills < 4){jg = 0;}
    else if(jgpart.dragonKills + jgpart.baronKills < 2){jg = -0.5;}
    else if(jgpart.dragonKills + jgpart.baronKills < 1){jg = -1;}
    return jg;
}

/**
 * Returns the kda score for the specific player in the given match.
 * @param {MatchDto} match: The match that contains players in that match with all datas.
 * @param {string} puuid: each player has a unique puuid.
 * @return {number} kda: the kda score of the specific player in the given match after computation.
 */
const kDA = (match: MatchDto, puuid: string): number => {
    //initialized the varaiables
    let kda = 10;
    const partis: any = match.info.participants;
    const needlist: Array<string> = [];
    const KDAlist: Array<string> = [];
    const gold: Array<number> = [];
    const dmg: Array<number> = [];
    let ranklist: Array<number> = [];
    let win_lose = 0;
    let rankpts = 0;
    let data = 0;
    let time = 0;
    //get match time.
    time = match.info.gameDuration;
    if(time > 36000){ // if the time count in milisecond, divide by 1000
        time = currency(time).divide(1000).value;
    }
    //initialized the list for getting datas.
    needlist.push("totalDamageDealtToChampions", 
    "visionScore", "damageDealtToBuildings", "totalTimeCCDealt", "goldEarned");
    KDAlist.push("kills", "deaths","assists",);
    let my_gold = 0;
    let my_dmg = 0;
    for(let i = 0; i < needlist.length; i++){ // compare items in needlist, get rank points.
        let checkvi = 0;
        ranklist = [];
        for(let j = 0; j < partis.length; j++){
            let stats: any = partis[j][`${needlist[i]}`];
            if(partis[j].puuid === puuid){
                data = stats;
                if(partis[j].win){
                    win_lose = 1;
                }else{
                    win_lose = -1;
                }
                if(partis[j].lane === "NONE" && time > 1500){
                    rankpts += jgpoint(partis[j]);
                }
                if(i == 1 && partis[j].lane == "SUPPORT"){
                    checkvi = 1;
                }
            }
            ranklist.push(stats);
            if(needlist[i] == "totalDamageDealtToChampions"){
                dmg.push(stats);
                if(partis[j].puuid === puuid){
                    my_dmg = stats;
                }
            }
            if(needlist[i] == "goldEarned"){
                gold.push(stats);
                if(partis[j].puuid === puuid){
                    my_gold = stats;
                }
            } 
        }
        if(checkvi == 1){
            if(rankpoint(ranklist, data) <0.1){
                rankpts -= 1;
            }
        }
        rankpts += rankpoint(ranklist, data);
    }
    //compute the damage to gold ratio.
    let my_dmGold = currency(my_dmg).divide(currency(my_gold)).value;
    let dmGold = [];
    for(let i = 0; i < dmg.length; ++i){
        let ratio = currency(dmg[i]).divide(currency(gold[i])).value;
        dmGold.push(ratio);
    }
    rankpts += rankpoint(dmGold, my_dmGold);
    for(let i = 0; i < partis.length; i++){ // compute KDA ratio
        data = 0;
        let KDAs = [];
        let stat = 0;
        ranklist = [];
        for(let j = 0; j < KDAlist.length; j++){
            KDAs.push(partis[i][`${KDAlist[j]}`]); 
        }
        if(partis[i].lane === "SUPPORT"){
            let K = currency(KDAs[0]).multiply(1).value;
            let D = currency(KDAs[1]).multiply(1.2).value;
            let A = currency(KDAs[2]).multiply(1.5).value;
            stat = (currency(K).add(currency(D))).divide(currency(A)).value;
        }else{
            let K = currency(KDAs[0]).multiply(1.5).value;
            let D = currency(KDAs[1]).multiply(1.2).value;
            let A = currency(KDAs[2]).multiply(1).value;
            stat = (currency(K).add(currency(D))).divide(currency(A)).value;
        }
        if(partis[i].puuid === puuid){
            data = stat;
        }
        ranklist.push(stat);
    }
    //compute the kda at the end.
    rankpts = currency(rankpts).add(currency(rankpoint(ranklist, data))).value;
    kda += win_lose + rankpts; 
    return kda;
}

/**
 * Returns the number array that contain the kda score in given matchlist for specific player.
 * @param {Array<MatchDto>} matchList: The list of the match that each contains all datas.
 * @param {string} puuid: each player has a unique puuid.
 * @return {Array<number>} kdaScoreList: the list of the kda score after computation.
 */
export const computeKda = (matchList: Array<MatchDto>, puuid: string): Array<number> => {
    const kdaScoreList: Array<number> = [];
    // compute the kda for specific player with data given in the matchList
    for(let i = 0; i < matchList.length; i++){
        kdaScoreList.push(kDA(matchList[i], puuid));
    }
    return kdaScoreList;
 }

/**
 * Returns the MatchHistoryDTO which contain the datas that needed for match history page.
 * @param {MatchDto} match: contain all particiates in the game and all the datas needed.
 * @param {string} puuid: each player has a unique puuid.
 * @return {MatchHistoryDTO} dataList: contain the datas that needed for match history page.
 */
const matchHistoryData = (match: MatchDto, puuid: string): MatchHistoryDTO => {
    // initialize the variables
    const dataList: any = {};
    const partis: any = match.info.participants;
    //get all datas needed.
    let time = match.info.gameDuration;
    if(time > 36000){
        time = currency(time).divide(1000).value;
    }
    let min = currency(time).divide(60).value;
    let parti = partis[0];
    for(let i = 0; i < partis.length; i++){
        if(partis[i].puuid === puuid){
            parti = partis[i];
        }
    }
    let dmg = parti.totalDamageDealtToChampions;
    let cs = parti.totalMinionsKilled;
    let vision = parti.visionScore;
    let csPerMin = currency(cs).divide(currency(min)).value;
    let dmgPerMin = currency(dmg).divide(currency(min)).value;
    let visionPerMin = currency(vision).divide(currency(min)).value;
    let gptScore = kDA(match, puuid);
    // get all datas in the datalist
    dataList.gameMode = match.info.gameMode;
    dataList.gameDate = timeConverter(match.info.gameStartTimestamp);
    dataList.win = parti.win;
    dataList.role = parti.role;
    dataList.championName = parti.championName;
    dataList.kills = parti.kills;
    dataList.deaths = parti.deaths;
    dataList.assists = parti.assists;
    dataList.gptScore = gptScore;
    dataList.csAmt = cs;
    dataList.dmgAmt = dmg;
    dataList.visionAmt = vision;
    dataList.csPerMin = csPerMin;
    dataList.dmgPerMin = dmgPerMin;
    dataList.visionPerMin = visionPerMin;
    return dataList;
}

/**
 * Returns the array of MatchHistoryDTO that contain all datas needed for the match history page.
 * @param {Array<MatchDto>} matchList: The list of the match that each contains all datas.
 * @param {string} puuid: each player has a unique puuid.
 * @return {Array<MatchHistoryDTO>} matchHistoryList: the list of MatchHistoryDTO which contain the datas that needed for match history page.
 */
export const computeMatchHistoryData = (matchList: Array<MatchDto>, puuid: string): Array<MatchHistoryDTO> => {
    const matchHistoryList = [];
    // iterate the matchList to collect the data of the user 
    // into a single MatchHistoryDTO obj then push the obj to matchHistoryList
    for(let i = 0; i < matchList.length; i++){
        matchHistoryList.push(matchHistoryData(matchList[i], puuid));
    }
    return matchHistoryList;
}
