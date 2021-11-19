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
