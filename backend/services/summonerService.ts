import * as riotApis from '../riotApis/riotApis'
import ChampionMastery from '../interfaces/IChampionMastery';
import SummonerDTO from '../interfaces/ISummonerDTO';
import SummonerInfo from "../interfaces/ISummonerInfo";
import SummonerLeague from '../interfaces/ISummonerLeague';

export const getSummonerByName = async(summonerName: string, region: string): Promise<SummonerDTO> => {
    const summoner: SummonerInfo = await riotApis.findSummonerInfo(summonerName, region);
    const leagueInfos: Array<SummonerLeague> = await riotApis.findSummonerLeague(summoner?.id, region);

    const champions: Array<ChampionMastery> = await riotApis.findChampionMaster(summoner?.id, region);
    const favChampsIds: Array<number> = champions.map((champion: ChampionMastery) => champion.championId).slice(0, 3);
    const favChamps: Array<string> = await findFavChampsName(favChampsIds);

    if(leagueInfos.length) {
        const leagueInfo = leagueInfos.find((element: SummonerLeague) => element.queueType==='RANKED_SOLO_5x5') as SummonerLeague;
        return {
            summonerName: leagueInfo.summonerName,
            summonerLevel: summoner.summonerLevel,
            summonerIcon: summoner.profileIconId,
            rank: `${leagueInfo.tier} ${leagueInfo.rank}`,
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
            winGames: 0,
            lossGames: 0,
            favChamps: [],
        } as SummonerDTO;
    }
}

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
