import mongoose from 'mongoose'
import config from '../../config/config'
import { findSummonerPuuid } from "../../services/summonerService";

describe('Summoner_services', () => {
    beforeAll(async() => {
        await mongoose.connect(config.mongo.url, config.mongo.options);
    })

    afterAll(async() => {
        await mongoose.connection.close();
    })

    test('findSummonerPuuid', async() => {
        const summonerName = 'Sunny the troll';
        const region = 'NA';
        const puuid = await findSummonerPuuid(summonerName, region);
        expect(puuid).not.toBeNull();
    })
})
