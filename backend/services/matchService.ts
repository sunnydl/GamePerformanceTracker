import * as riotApis from '../riotApis/riotApis'
import MatchDto from '../interfaces/IMatch/IMatchDto'
import ParticipantDto from '../interfaces/IMatch/IParticipantDto';
import currency from 'currency.js';
import MatchChartDataDTO from '../interfaces/IMatchChartDataDTO';

// function used to collect match data for chart. Given a puuid, find the matches and get lists of data as matchDataChartDTO
export const getMatchChartData = async(puuid: string, region: string, numOfMatch: number): Promise<Array<MatchChartDataDTO>> => {
    const matchList: Array<MatchDto> = await getMatchListByPUUID(puuid, region, numOfMatch);
    return analysisMatch(puuid, matchList);
}

export const getMatchListByPUUID = async(puuid: string, region: string, numOfMatch: number): Promise<Array<MatchDto>> => {
    if(numOfMatch >= 20){
        const matchListInfo: Array<string> = await riotApis.findMatchHistoryInfo(puuid, region, 20);
        const matchList: Array<MatchDto> = await getMatchObjListByMatchList(matchListInfo, region);
        return matchList as Array<MatchDto>;
    }
    else{
        const matchListInfo: Array<string> = await riotApis.findMatchHistoryInfo(puuid, region, numOfMatch);
        const matchList: Array<MatchDto> = await getMatchObjListByMatchList(matchListInfo, region);
        return matchList as Array<MatchDto>;
    }
};

export const getMatchObjListByMatchList = async (match_list: Array<string>, region: string): Promise<Array<MatchDto>> => {
    const matchDTOArr: Array<MatchDto> = [];
    for( const matchElem of match_list){
        const match = await riotApis.findMatchInfo(matchElem, region);
        matchDTOArr.push(match);
    }
    return matchDTOArr;
}
/* 
    given a list of matchDto
    It will return a list of dataObj for example
    [
        {
            name: Game 1,
            kills: 1,
            deaths: 2,
            assists: 2,
            scores: 2,
            winLoss: 0.5,
        },
        {
            name: Game 2,
            kills: ...,
            deaths: ...,
            assists: ...,
            scores: ...,
            winLoss: ...,
        },
        ......
    ]
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
                    scores: 0,
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


/*
function extractValue(arr: Array<ParticipantDto>, key: string) {
    return arr.reduce(function(accum, object) {
        if (key in object) accum.push(object.key);
        return accum;
    }, []);
}
*/
const rankpoint = (ranklist: Array<number>, data: number): number => {
    let rank = 10;
    let rankpt = 0;
    // rank the data with given list.
    for(let i = 0; i < ranklist.length; i++){
        if(data > ranklist[i]){
            rank -= 1;
        }
    }
    const rankmap = new Map();
    //1: + 1, 2: + 0.5, 3: + 0.2, 4: + 0.1, 5: +0, 6: - 0, 7: -0.1, 8: -0.2, 9: -0.5, 10: -1 
    rankmap.set(1,1);
    rankmap.set(2,0.5);
    rankmap.set(3,0.2);
    rankmap.set(4,0.1);
    rankmap.set(5,0);
    rankmap.set(6,0);
    rankmap.set(7,-0.1);
    rankmap.set(8,-0.2);
    rankmap.set(9,-0.5);
    rankmap.set(10,-1);
    rankpt = rankmap.get(rank);
    return rankpt;
}

const jgpoint = (jgpart: ParticipantDto): number => {
    let jg = 0;
    if(jgpart.dragonKills >=3 && jgpart.baronKills >= 1){jg = 1;}
    else if(jgpart.dragonKills + jgpart.baronKills >= 4){jg = 0.5;}
    else if(jgpart.dragonKills + jgpart.baronKills < 4){jg = 0;}
    else if(jgpart.dragonKills + jgpart.baronKills < 2){jg = -0.5;}
    else if(jgpart.dragonKills + jgpart.baronKills < 1){jg = -1;}
    return jg;
}
const kDA = (match: MatchDto, puuid: string): number => {
    let kda = 10;
    const partis: any = match.info.participants;
    const needlist: Array<string> = [];
    const KDAlist: Array<string> = [];
    let ranklist: Array<number> = [];
    let win_lose = 0;
    let rankpts = 0;
    let data = 0;
    //Rank: total Damage Dealt To Champions, 
    //goldEarned, 
    //Ratio of damage to gold, (not counting negative for goldearned for sup)
    //KDA(Kill(1.5)+assist)/death(1.2), (different for sup)
    //damageDealtToBuildings,
    //visionScore, 
    //totalTimeCCDealt
    //totalheal(sup)
    //
    //know: win/lose
    //Baron Kills, Large Monster Kills (jg) (need to find the game time)
    //parits: find puuid, get out all information.
    //any good ways to do the comparison(rank)? good ways for make multiple in list?
    needlist.push("totalDamageDealtToChampions", 
    "visionScore", "damageDealtToBuildings", "totalTimeCCDealt", "goldEarned");
    KDAlist.push("kills", "deaths","assists",);
    for(let i = 0; i < needlist.length; i++){
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
                if(partis[j].lane === "jg"){
                    rankpts += jgpoint(partis[j]);
                }
            }
            ranklist.push(stats);
            
        }
        rankpts += rankpoint(ranklist, data);
    }
    for(let i = 0; i < partis.length; i++){
        data = 0;
        let KDAs = [];
        let stat = 0;
        ranklist = [];
        for(let j = 0; j < KDAlist.length; j++){
            KDAs.push(partis[i][`${KDAlist[j]}`]); 
        }
        if(partis[i].lane === "sup"){
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
    rankpts = currency(rankpts).add(currency(rankpoint(ranklist, data))).value;
    kda += win_lose + rankpts; 
    return kda;
}

export const computeKda = (matchList: Array<MatchDto>, puuid: string): Array<number> => {
    const kdaScoreList: Array<number> = [];
    // compute it with data given in the matchList
    for(let i = 0; i < matchList.length; i++){
        kdaScoreList.push(kDA(matchList[i], puuid))
    }
    return kdaScoreList;
 }
