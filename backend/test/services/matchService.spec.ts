import mongoose from 'mongoose';
import config from '../../config/config';
import { findSummonerPuuid } from '../../services/summonerService';
import {
    getMatchListByPUUID,
    analysisMatch,
    computeKda,
} from '../../services/matchService';

describe('Match_services', () => {
    beforeAll(async () => {
        await mongoose.connect(config.mongo.url, config.mongo.options);
    });

    afterAll(async () => {
        await mongoose.connection.close();
    });

    afterEach(async () => {
        await new Promise((r) => setTimeout(r, 1000)); // give 1 seconds gap between tests
    });

    test('getMatchListByPUUID with limit of 3', async () => {
        const summonerName = 'Sunny the troll';
        const region = 'NA';
        const puuid = await findSummonerPuuid(summonerName, region);
        const matchListViaPUUID = await getMatchListByPUUID(
            puuid,
            region,
            ``,
            3
        );
        expect(matchListViaPUUID.length).toEqual(3);
        expect(puuid).not.toBeNull();
    });

    test('getMatchListByPUUID with limit of 0', async () => {
        const summonerName = 'Sunny the troll';
        const region = 'NA';
        const puuid = await findSummonerPuuid(summonerName, region);
        const matchListViaPUUID = await getMatchListByPUUID(
            puuid,
            region,
            ``,
            0
        );
        expect(matchListViaPUUID.length).toEqual(0);
        expect(puuid).not.toBeNull();
    });

    test('getMatchListByPUUID with limit of 20', async () => {
        const summonerName = 'Sunny the troll';
        const region = 'NA';
        const puuid = await findSummonerPuuid(summonerName, region);
        const matchListViaPUUID = await getMatchListByPUUID(
            puuid,
            region,
            ``,
            20
        );
        expect(matchListViaPUUID.length).toEqual(20);
        expect(puuid).not.toBeNull();
    }, 20000);

    test('analysisMatch check if null', async () => {
        const summonerName = 'Sunny the troll';
        const region = 'NA';
        const puuid = await findSummonerPuuid(summonerName, region);
        const mockMatchDTO: any = [
            {
                info: {
                    participants: [
                        { kills: 8, puuid: 'a' },
                        { kills: 10, deaths: 7, assists: 5, puuid: puuid },
                    ],
                },
            },
        ];
        const matchStat = analysisMatch(puuid, mockMatchDTO);
        expect(matchStat.length).toEqual(1);
    });

    test('analysisMatch check if stats match', async () => {
        const summonerName = 'Sunny the troll';
        const region = 'NA';
        const puuid = await findSummonerPuuid(summonerName, region);
        const mockMatchDTO: any = [
            {
                info: {
                    participants: [
                        { kills: 8, puuid: 'a' },
                        { kills: 10, deaths: 7, assists: 5, puuid: puuid },
                    ],
                },
            },
        ];
        const mockMatchChartDataDTO: any = [
            {
                name: 'Game 1',
                kills: 10,
                deaths: 7,
                assists: 5,
                scores: 2,
                winLoss: 0,
            },
        ];
        const matchStat = analysisMatch(puuid, mockMatchDTO);
        expect(matchStat).toEqual(mockMatchChartDataDTO);
    });

    test('computeKda check if stats match', async () => {
        const summonerName = 'Sunny the troll';
        const region = 'NA';
        const numberOfMatch = 10;
        const typeOfMatch = 'ranked';
        const puuid = await findSummonerPuuid(summonerName, region);
        const matchList = await getMatchListByPUUID(
            puuid,
            region,
            typeOfMatch,
            numberOfMatch
        );
        const kda = computeKda(matchList, puuid);
        expect(kda.length).toEqual(matchList.length);
    });

    test('computeKda check if general stat match with lowest score', async () => {
        const puuid = 'a';
        const mockMatchDTO: any = {
            info: {
                participants: [
                    { kills: 10, deaths: 7, assists: 5, puuid: puuid },
                ],
            },
        };
        const matchList: any = [];
        matchList.push(mockMatchDTO);
        const kda = computeKda(matchList, puuid);
        expect(kda).toEqual([2]);
    });
});
