import app, { server } from "../..";
import mongoose from 'mongoose'
import request from 'supertest'
import config from '../../config/config'

describe('Matches request', () => {

    beforeAll(async() => {
        await mongoose.connect(config.mongo.url, config.mongo.options);
    })

    afterAll(async() => {
        await mongoose.connection.close();
        server.close();
    })

    test('get 10 matches for match history page', async() => {
        const summonerName = 'Sunny the troll';
        const region = 'NA';
        const numOfMatch = 10;
        const matchType = '';

        const { status, text } = await request(app)
        .get('/api/matches')
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
    })

    test('get 10 matches for match chart', async() => {
        const summonerName = 'Sunny the troll';
        const region = 'NA';
        const numOfMatch = 10;
        const matchType = '';

        const { status, text } = await request(app)
        .get('/api/matches/chart')
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
    })
})
