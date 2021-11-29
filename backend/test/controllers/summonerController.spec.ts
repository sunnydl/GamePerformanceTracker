import app, { server } from "../..";
import mongoose from 'mongoose'
import request from 'supertest'
import config from '../../config/config'

describe('Summoner information request', () => {
    beforeAll(async() => {
        await mongoose.connect(config.mongo.url, config.mongo.options);
    })

    afterAll(async() => {
        await mongoose.connection.close();
        server.close();
    })

    afterEach(async() => {
        await new Promise((r) => setTimeout(r, 1000)); // give 1 seconds gap between tests
    })

    test('with a valid summoner name from NA', async() => {
        const summonerName = 'Sunny the troll';
        const region = 'NA';

        const { status, text } = await request(app)
        .get('/api/summonerInfo')
        .query({ summonerName: summonerName, region: region });
        const expectedName = summonerName;
        const expectedResStatus = 200;
        expect(status).toEqual(expectedResStatus);
        expect(JSON.parse(text).summonerName).toEqual(expectedName);
    })

    test('with an invalid summoner name', async() => {
        const summonerName = 'sss@fff';
        const region = 'NA';
        
        const { status, text } = await request(app)
        .get('/api/summonerInfo')
        .query({ summonerName: summonerName, region: region });
        const expectedResStatus = 404;
        expect(status).toEqual(expectedResStatus);
    })
})

describe('Leaderboard request', () => {
    beforeAll(async() => {
        await mongoose.connect(config.mongo.url, config.mongo.options);
    })

    afterAll(async() => {
        await mongoose.connection.close();
        server.close();
    })

    test('high ranking leaderboard', async() => {
        const tier = 'Challenger';
        const division = 'I';
        const queueType = 'SOLO';
        const region = 'NA';

        const { status, text } = await request(app)
        .get('/api/summonerInfo/leaderboard')
        .query({
            tier, division, queueType, region
        });
        const expectedSize = 10;
        const expectedResStatus = 200;
        const expectedRank = 'Challenger I'
        expect(status).toEqual(expectedResStatus);
        expect(JSON.parse(text).length).toEqual(expectedSize);
        expect(JSON.parse(text)[0].rank).toEqual(expectedRank);
    })

    test('update high ranking leaderboard', async() => {
        const tier = 'Challenger';
        const division = 'I';
        const queueType = 'SOLO';
        const region = 'NA';

        const { status, text } = await request(app)
        .get('/api/summonerInfo/update-leaderboard')
        .query({
            tier, division, queueType, region
        });
        const expectedSize = 10;
        const expectedResStatus = 200;
        const expectedRank = 'Challenger I'
        expect(status).toEqual(expectedResStatus);
        expect(JSON.parse(text).length).toEqual(expectedSize);
        expect(JSON.parse(text)[0].rank).toEqual(expectedRank);
    }, 10000)

    test('low ranking leaderboard', async() => {
        const tier = 'Gold';
        const division = 'II';
        const queueType = 'SOLO';
        const region = 'NA';

        const { status, text } = await request(app)
        .get('/api/summonerInfo/leaderboard')
        .query({
            tier, division, queueType, region
        });
        const expectedSize = 10;
        const expectedResStatus = 200;
        const expectedRank = 'Gold II'
        expect(status).toEqual(expectedResStatus);
        expect(JSON.parse(text).length).toEqual(expectedSize);
        expect(JSON.parse(text)[0].rank).toEqual(expectedRank);
    })

    test('update low ranking leaderboard', async() => {
        const tier = 'Gold';
        const division = 'II';
        const queueType = 'SOLO';
        const region = 'NA';

        const { status, text } = await request(app)
        .get('/api/summonerInfo/update-leaderboard')
        .query({
            tier, division, queueType, region
        });
        const expectedSize = 10;
        const expectedResStatus = 200;
        const expectedRank = 'Gold II'
        expect(status).toEqual(expectedResStatus);
        expect(JSON.parse(text).length).toEqual(expectedSize);
        expect(JSON.parse(text)[0].rank).toEqual(expectedRank);
    }, 10000)
})
