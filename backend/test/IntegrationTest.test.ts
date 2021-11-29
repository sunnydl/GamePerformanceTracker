import app, { server } from '../index'
import request from 'supertest'
import mongoose from 'mongoose'
import config from '../config/config'

describe("Testing server overall functionality", () => {
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

    test("basic get request", async() => {
        const response = await request(app).get('/')
        expect(response.statusCode).toBe(200);
    })

    test("search up a user", async() => {
        const summonerName = 'Sunny the troll';
        const region = 'NA';
        const numOfMatchChart = 5;
        const numOfMatchHistory = 10;
        const matchType = '';

        const overviewResponse = await request(app)
        .get('/api/summonerInfo')
        .query({ summonerName: summonerName, region: region });
        const matchChartResponse = await request(app)
        .get('/api/matches/chart')
        .query({ 
            summonerName: summonerName, 
            region: region,
            numOfMatch: numOfMatchChart,
            matchType: matchType,
        });
        const matchHistoryResponse = await request(app)
        .get('/api/matches')
        .query({ 
            summonerName: summonerName, 
            region: region,
            numOfMatch: numOfMatchHistory,
            matchType: matchType,
        });

        const expectedName = summonerName;
        const expectedOverviewResStatus = 200;
        const expectedChartSize = numOfMatchChart;
        const expectedChartResStatus = 200;
        const expectedMatchSize = numOfMatchHistory;
        const expectedMatchResStatus = 200;
        expect(overviewResponse.status).toEqual(expectedOverviewResStatus);
        expect(JSON.parse(overviewResponse.text).summonerName).toEqual(expectedName);
        expect(matchChartResponse.status).toEqual(expectedChartResStatus);
        expect(JSON.parse(matchChartResponse.text).length).toEqual(expectedChartSize);
        expect(matchHistoryResponse.status).toEqual(expectedMatchResStatus);
        expect(JSON.parse(matchHistoryResponse.text).length).toEqual(expectedMatchSize);
    }, 10000)

    test("check leaderboard", async() => {
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

    test("update match history", async() => {
        const summonerName = 'Sunny the troll';
        const region = 'NA';
        const numOfMatch = 10;
        const matchType = '';

        const { status, text } = await request(app)
        .get('/api/matches/updated-history')
        .query({ 
            summonerName: summonerName, 
            region: region,
            numOfMatch: numOfMatch,
            matchType: matchType,
        });
        const expectedSize = numOfMatch;
        const expectedResStatus = 200;
        expect(status).toEqual(expectedResStatus);
        expect(JSON.parse(text).length).toEqual(expectedSize);
    }, 10000)

    test('update leaderboard', async() => {
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
})
