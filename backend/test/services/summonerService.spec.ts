import mongoose from 'mongoose';
import config from '../../config/config';
import {
    findSummonerPuuid,
    getLeaderBoard,
    updateDBLeaderboard,
    getSummonerByName,
} from '../../services/summonerService';

describe('Summoner_services', () => {
    beforeAll(async () => {
        await mongoose.connect(config.mongo.url, config.mongo.options);
    });

    afterAll(async () => {
        await mongoose.connection.close();
    });

    afterEach(async () => {
        await new Promise((r) => setTimeout(r, 1000)); // give 1 seconds gap between tests
    });

    test('getSummonerByName', async () => {
        const summonerName = 'Sunny the troll';
        const region = 'NA';

        const summoner = await getSummonerByName(summonerName, region);
        const expectedName = summonerName;

        expect(summoner.summonerName).toEqual(expectedName);
    });

    test('findSummonerPuuid', async () => {
        const summonerName = 'Sunny the troll';
        const region = 'NA';
        const puuid = await findSummonerPuuid(summonerName, region);
        expect(puuid).not.toBeNull();
    });

    test('getLeaderBoard', async () => {
        const tier = 'Challenger';
        const division = 'I';
        const queueType = 'SOLO';
        const region = 'NA';

        const leaderboard = await getLeaderBoard(
            tier,
            division,
            queueType,
            region
        );
        const expectedSize = 10;
        const expectedRank = 'Challenger I';

        expect(leaderboard.length).toEqual(expectedSize);
        expect(leaderboard[0].rank).toEqual(expectedRank);
    });

    test('updateDBLeaderboard', async () => {
        const tier = 'Challenger';
        const division = 'I';
        const queueType = 'SOLO';
        const region = 'NA';

        const updatedLeaderboard = await updateDBLeaderboard(
            tier,
            division,
            queueType,
            region
        );
        const expectedSize = 10;
        const expectedRank = 'Challenger I';

        expect(updatedLeaderboard.length).toEqual(expectedSize);
        expect(updatedLeaderboard[0].rank).toEqual(expectedRank);
    }, 10000);
});
