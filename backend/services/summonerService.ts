import * as riotApis from '../config/riotApis'
import SummonerDTO from '../interfaces/ISummonerDTO';
import SummonerInfo from "../interfaces/ISummonerInfo";
import SummonerLeague from '../interfaces/ISummonerLeague';

export const getSummonerByName = async(summonerName: string, region: string): Promise<SummonerDTO> => {
    const summoner: SummonerInfo = await riotApis.findSummonerInfo(summonerName, region);
    const leagueInfos: Array<SummonerLeague> = await riotApis.findSummonerLeague(summoner?.id, region);
    const leagueInfo = leagueInfos.find((element: SummonerLeague) => element.queueType==='RANKED_SOLO_5x5') as SummonerLeague;
    return {
        summonerName: leagueInfo.summonerName,
        summonerLevel: summoner.summonerLevel,
        summonerIcon: summoner.profileIconId,
        rank: `${leagueInfo.tier} ${leagueInfo.rank}`,
        winGames: leagueInfo.wins,
        lossGames: leagueInfo.losses,
    } as SummonerDTO;
}
