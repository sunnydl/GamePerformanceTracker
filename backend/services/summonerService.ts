import * as riotApis from '../riotApis/riotApis'
import ChampionMastery from '../interfaces/IChampionMastery';
import SummonerDTO from '../interfaces/ISummonerDTO';
import SummonerInfo from "../interfaces/ISummonerInfo";
import SummonerLeague from '../interfaces/ISummonerLeague';
import UserModel from '../models/UserModel';
import LeagueListDTO from '../interfaces/ILeagueListDTO';

// given a summoner name, find the info of the summoner for overview page from riot API
export const getSummonerByName = async(summonerName: string, region: string): Promise<SummonerDTO> => {
    const summoner: SummonerInfo = await riotApis.findSummonerInfo(summonerName, region);
    const leagueInfos: Array<SummonerLeague> = await riotApis.findSummonerLeague(summoner?.id, region);

    // update database with summoner data
    const foundSummoner = await UserModel.findOne({ leagueId: summoner.id, region });
    if(foundSummoner) {
        await UserModel.findByIdAndUpdate(foundSummoner._id, {
            summonerName: summoner.name,
            profileIconId: summoner.profileIconId,
        })
    } else {
        await new UserModel({
            leagueId: summoner.id,
            summonerName: summoner.name,
            puuid: summoner.puuid,
            profileIconId: summoner.profileIconId,
            region,
        }).save();
    }

    const champions: Array<ChampionMastery> = await riotApis.findChampionMastery(summoner?.id, region);
    const favChampsIds: Array<number> = champions.map((champion: ChampionMastery) => champion.championId).slice(0, 3);
    const favChamps: Array<string> = await findFavChampsName(favChampsIds);

    if(leagueInfos.length) {
        const leagueInfo = leagueInfos.find((element: SummonerLeague) => element.queueType===riotApis.QUEUE_TYPE.SOLO) as SummonerLeague;
        return {
            summonerName: leagueInfo.summonerName,
            summonerLevel: summoner.summonerLevel,
            summonerIcon: summoner.profileIconId,
            rank: `${leagueInfo.tier} ${leagueInfo.rank}`,
            leaguePoints: leagueInfo.leaguePoints,
            winGames: leagueInfo.wins,
            lossGames: leagueInfo.losses,
            favChamps: favChamps,
        } as SummonerDTO;
    } else {
        return {
            summonerName: summoner.name,
            summonerLevel: summoner.summonerLevel,
            summonerIcon: summoner.profileIconId,
            rank: "unranked",
            leaguePoints: 0,
            winGames: 0,
            lossGames: 0,
            favChamps: [],
        } as SummonerDTO;
    }
}

export const getLeaderBoard = async(tier: string, division: string, queueType: string, region: string): Promise<Array<SummonerDTO>> => {
    let list: Array<SummonerLeague>;
    if(riotApis.HIGH_TIER[tier]) {
        const collection: LeagueListDTO = await riotApis.getLeaderBoardHighTierList(tier, queueType, region);
        list = collection.entries;
    } else {
        list = await riotApis.getLeaderBoardLowTierList(tier, division, queueType, region);
    }
    // first sort the list based on leaguePoints
    list = list.sort((a, b) => b.leaguePoints - a.leaguePoints).slice(0, 10); // get 10 for now
    const leaderBoard: Array<SummonerDTO> = await Promise.all(list.map(async(summoner: SummonerLeague) => await getSummonerByName(summoner.summonerName, region)));
    return leaderBoard;
}

// find the champ name given an id
const findFavChampsName = async(favChampsIds: Array<number>): Promise<Array<string>> => {
    const champsList: any = await riotApis.getChampsData();
    const favChamps: string[] = [];
    for(const i in champsList) {
        if((favChampsIds).includes(parseInt(champsList[i].key))) {
            favChamps.push(champsList[i].id); // push the matched name to list
        }
    }
    return favChamps;
}
// find summoner's puuid given a summoner name
export const findSummonerPuuid = async(summonerName: string, region: string): Promise<string> => {
    const foundSummoner = await UserModel.findOne({ summonerName });
    if(foundSummoner) {
        return foundSummoner.puuid;
    } else {
        const summoner: SummonerInfo = await riotApis.findSummonerInfo(summonerName, region);
        return summoner.puuid;
    }
}
