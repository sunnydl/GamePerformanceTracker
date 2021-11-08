import mongoose from 'mongoose'
import config from '../../config/config'
import { findSummonerPuuid } from "../../services/summonerService";
import { getMatchListByPUUID, analysisMatch } from "../../services/matchService";
import { not } from 'mathjs';

describe('Match_services', () => {
    beforeAll(async() => {
        await mongoose.connect(config.mongo.url, config.mongo.options);
    })

    afterAll(async() => {
        await mongoose.connection.close();
    })

    test('getMatchListByPUUID with limit of 3', async() => {
        const summonerName = 'Sunny the troll';
        const region = 'NA';
        const puuid = await findSummonerPuuid(summonerName, region);
        const matchListViaPUUID = await getMatchListByPUUID(puuid, region, 3);
        expect(matchListViaPUUID.length).toEqual(3)
        expect(puuid).not.toBeNull();
    })

    test('getMatchListByPUUID with limit of 0', async() => {
        const summonerName = 'Sunny the troll';
        const region = 'NA';
        const puuid = await findSummonerPuuid(summonerName, region);
        const matchListViaPUUID = await getMatchListByPUUID(puuid, region, 0);
        expect(matchListViaPUUID.length).toEqual(0)
        expect(puuid).not.toBeNull();
    })

    test('getMatchListByPUUID with limit of 20', async() => {
        const summonerName = 'Sunny the troll';
        const region = 'NA';
        const puuid = await findSummonerPuuid(summonerName, region);
        const matchListViaPUUID = await getMatchListByPUUID(puuid, region, 20);
        console.log(matchListViaPUUID.length);
        expect(matchListViaPUUID.length).toEqual(20);
        expect(puuid).not.toBeNull();
    }, 20000)

    test('getMatchListByPUUID with limit of 0', async() => {
        const summonerName = 'Sunny the troll';
        const region = 'NA';
        const puuid = await findSummonerPuuid(summonerName, region);
        const matchListViaPUUID = await getMatchListByPUUID(puuid, region, 0);
        expect(matchListViaPUUID.length).toEqual(0)
        expect(puuid).not.toBeNull();
    })

    test('analysisMatch check if stats match', async() => {
        const summonerName = 'Sunny the troll';
        const region = 'NA';
        const puuid = await findSummonerPuuid(summonerName, region);
        const mockMatchDTO: any = [
            {
                info: {
                    participants: [
                        {kills: 8, puuid: 'a'},
                        {kills: 10, deaths: 7, assists: 5, puuid: puuid}
                    ]
                }
            }
        ]
        const kills = [10];
        const deaths = [7];
        const assists = [5];
        const matchStat = analysisMatch(puuid, mockMatchDTO);
        expect(matchStat.kills).toEqual(kills);
        expect(matchStat.deaths).toEqual(deaths);
        expect(matchStat.assists).toEqual(assists);
    }, 20000)

    test('analysisMatch check if null', async() => {
        const summonerName = 'Sunny the troll';
        const region = 'NA';
        const puuid = await findSummonerPuuid(summonerName, region);
        const mockMatchDTO: any = [
            {
                info: {
                    participants: [
                        {kills: 8, puuid: 'a'},
                        {kills: 10, deaths: 7, assists: 5, puuid: puuid}
                    ]
                }
            }
        ]
        const matchStat = analysisMatch(puuid, mockMatchDTO);
        expect(matchStat.kills).not.toBeNull();
        expect(matchStat.deaths).not.toBeNull();
        expect(matchStat.assists).not.toBeNull();
    }, 20000)

})
