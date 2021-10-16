import mongoose, { Schema } from 'mongoose';
import { StringDecoder } from 'string_decoder';
import SummonerInfo from '../interfaces/ISummonerInfo';
import SummonerLeague from '../interfaces/ISummonerLeague';
import User from '../interfaces/IUser';


// Summoner Info, Sumoner League

const summonerInfoSchema = new Schema<SummonerInfo>({
    accountID: String,
    profileIconId: Number,
    revisionDate: Number,
    name: {type: String, required: true},
    id: {type: String, required: true},
    puuid: {type: String, required: true},
    summonerLevel: {type: Number, required: true},
});

const summonerLeagueSchema = new Schema<SummonerLeague>({
    leagueId: {type: String, required: true},
    queueType: {type: String, required: true},
    tier: {type: String, required: true},
    rank: {type: String, required: true},
    leaguePoints: {type: Number, required: true},
    wins: {type: Number, required: true},
    losses: {type: Number, required: true},
    hotStreak: {type: Boolean, required: true},
    freshBlood: {type: Boolean, required: true},
    inactive: {type: Boolean, required: true},
});

const userSchema = new Schema<User>(
    {
        email: { type: String},
        winRate: { type: [Number], required: true},
        matchIds: {type: [String], required: true},
        summonerInfo: {type: summonerInfoSchema, required: true},
        summonerLeague: {type: summonerLeagueSchema, required: true}
    }
);

export default mongoose.model<User>('User', userSchema);
