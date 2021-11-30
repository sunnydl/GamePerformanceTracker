import * as riotApis from '../riotApis/riotApis';
import ChampionMastery from '../interfaces/IChampionMastery';
import SummonerDTO from '../interfaces/ISummonerDTO';
import SummonerInfo from '../interfaces/ISummonerInfo';
import SummonerLeague from '../interfaces/ISummonerLeague';
import UserModel from '../models/UserModel';
import LeagueListDTO from '../interfaces/ILeagueListDTO';
import LeaderboardModel from '../models/LeaderboardModel';
import LeaderboardMongo from '../interfaces/ILeaderboardMongo';

/**
 * Service used to fetch the information of a player given its name
 *
 * @param {string} summonerName The name of the player
 * @param {string} region The region that the player is located in
 * @return {Promise<SummonerDTO>} The information of the player's account
 */
export const getSummonerByName = async (
    summonerName: string,
    region: string
): Promise<SummonerDTO> => {
    const summoner: SummonerInfo = await riotApis.findSummonerInfo(
        encodeURI(summonerName),
        region
    );
    const leagueInfos: Array<SummonerLeague> =
        await riotApis.findSummonerLeague(summoner?.id, region);

    // update database with summoner data
    const foundSummoner = await UserModel.findOne({
        leagueId: summoner.id,
        region,
    });
    if (foundSummoner) {
        await UserModel.findByIdAndUpdate(foundSummoner._id, {
            summonerName: summoner.name,
            profileIconId: summoner.profileIconId,
        });
    } else {
        await new UserModel({
            leagueId: summoner.id,
            summonerName: summoner.name,
            puuid: summoner.puuid,
            profileIconId: summoner.profileIconId,
            region,
        }).save();
    }

    // get champions information
    const champions: Array<ChampionMastery> =
        await riotApis.findChampionMastery(summoner?.id, region);
    const favChampsIds: Array<number> = champions
        .map((champion: ChampionMastery) => champion.championId)
        .slice(0, 3);
    const champsList: any = await riotApis.getChampsData();
    const favChamps: Array<string> = await findFavChampsName(
        champsList,
        favChampsIds
    );

    if (leagueInfos.length) {
        const leagueInfo = leagueInfos.find(
            (element: SummonerLeague) =>
                element.queueType === riotApis.QUEUE_TYPE.SOLO
        ) as SummonerLeague;
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
            rank: 'unranked',
            leaguePoints: 0,
            winGames: 0,
            lossGames: 0,
            favChamps: [],
        } as SummonerDTO;
    }
};

/**
 * Service for finding the top players data, if data is found in db, then return db data, if not then fetch from Riot API
 *
 * @param {string} tier The tier of the players
 * @param {string} division The division of the players
 * @param {string} queueType The type of the queue
 * @param {string} region The region that the player is located in
 * @return {Promise<Array<SummonerDTO>>} The List of the top players
 */
export const getLeaderBoard = async (
    tier: string,
    division: string,
    queueType: string,
    region: string
): Promise<Array<SummonerDTO>> => {
    const leaderboardDB = (await LeaderboardModel.findOne({
        tier,
        division,
    })) as LeaderboardMongo;
    if (!leaderboardDB) {
        let list: Array<SummonerLeague>;
        if (riotApis.HIGH_TIER[tier]) {
            const collection: LeagueListDTO =
                await riotApis.getLeaderBoardHighTierList(
                    tier,
                    queueType,
                    region
                );
            list = collection.entries;
        } else {
            list = await riotApis.getLeaderBoardLowTierList(
                tier,
                division,
                queueType,
                region
            );
        }

        // first sort the list based on leaguePoints and cut the amount
        list = list
            .sort((a, b) => b.leaguePoints - a.leaguePoints)
            .slice(0, 10); // get 10 for now

        const leaderBoard: Array<SummonerDTO> = [];
        const champsList: any = await riotApis.getChampsData();
        for (const player of list) {
            const playerInfo = await riotApis.findSummonerInfoBySummonerId(
                player.summonerId,
                region
            );
            const champions: Array<ChampionMastery> =
                await riotApis.findChampionMastery(playerInfo?.id, region);
            const favChampsIds: Array<number> = champions
                .map((champion: ChampionMastery) => champion.championId)
                .slice(0, 3);
            const favChamps: Array<string> = await findFavChampsName(
                champsList,
                favChampsIds
            );

            leaderBoard.push({
                summonerName: player.summonerName,
                summonerLevel: playerInfo.summonerLevel,
                summonerIcon: playerInfo.profileIconId,
                rank: `${tier} ${division}`,
                leaguePoints: player.leaguePoints,
                winGames: player.wins,
                lossGames: player.losses,
                favChamps: favChamps,
            });
        }

        // add the list to db
        await new LeaderboardModel({
            tier: tier,
            division: division,
            players: leaderBoard,
        }).save();

        return leaderBoard;
    }
    return leaderboardDB.players;
};
/**
 * Service for updating the data of leaderboard in db
 *
 * @param {string} tier The tier of the players
 * @param {string} division The division of the players
 * @param {string} queueType The type of the queue
 * @param {string} region The region that the player is located in
 * @return {Promise<Array<SummonerDTO>>} The List of the top players
 */
export const updateDBLeaderboard = async (
    tier: string,
    division: string,
    queueType: string,
    region: string
): Promise<Array<SummonerDTO>> => {
    let list: Array<SummonerLeague>;
    if (riotApis.HIGH_TIER[tier]) {
        const collection: LeagueListDTO =
            await riotApis.getLeaderBoardHighTierList(tier, queueType, region);
        list = collection.entries;
    } else {
        list = await riotApis.getLeaderBoardLowTierList(
            tier,
            division,
            queueType,
            region
        );
    }

    // first sort the list based on leaguePoints and cut the amount
    list = list.sort((a, b) => b.leaguePoints - a.leaguePoints).slice(0, 10); // get 10 for now

    const leaderBoard: Array<SummonerDTO> = [];
    const champsList: any = await riotApis.getChampsData();
    for (const player of list) {
        const playerInfo = await riotApis.findSummonerInfoBySummonerId(
            player.summonerId,
            region
        );
        const champions: Array<ChampionMastery> =
            await riotApis.findChampionMastery(playerInfo?.id, region);
        const favChampsIds: Array<number> = champions
            .map((champion: ChampionMastery) => champion.championId)
            .slice(0, 3);
        const favChamps: Array<string> = await findFavChampsName(
            champsList,
            favChampsIds
        );

        leaderBoard.push({
            summonerName: player.summonerName,
            summonerLevel: playerInfo.summonerLevel,
            summonerIcon: playerInfo.profileIconId,
            rank: `${tier} ${division}`,
            leaguePoints: player.leaguePoints,
            winGames: player.wins,
            lossGames: player.losses,
            favChamps: favChamps,
        });
    }

    // update db
    await LeaderboardModel.updateOne(
        { tier, division },
        {
            players: leaderBoard,
        }
    );

    return leaderBoard;
};

/**
 * Service for finding the list of the player's favorite champion names given a list of ids
 *
 * @param {any} champsList The champion data from riot
 * @param {Array<number>} favChampsIds The champion ids
 * @return {Promise<Array<string>>} The name of the champions
 */
const findFavChampsName = async (
    champsList: any,
    favChampsIds: Array<number>
): Promise<Array<string>> => {
    const favChamps: string[] = [];
    for (const i in champsList) {
        if (favChampsIds.includes(parseInt(champsList[i].key))) {
            favChamps.push(champsList[i].id); // push the matched name to list
        }
    }
    return favChamps;
};

/**
 * Service for finding puuid of the player given a name
 *
 * @param {string} summonerName The name of the player
 * @param {string} region The region that the player is located in
 * @return {Promise<string>} The puuid of the player
 */
export const findSummonerPuuid = async (
    summonerName: string,
    region: string
): Promise<string> => {
    const foundSummoner = await UserModel.findOne({ summonerName });
    if (foundSummoner) {
        return foundSummoner.puuid;
    } else {
        const summoner: SummonerInfo = await riotApis.findSummonerInfo(
            summonerName,
            region
        );
        return summoner.puuid;
    }
};
