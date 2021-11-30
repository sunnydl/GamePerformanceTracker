import mongoose, { Schema } from 'mongoose';
import MatchHistoryMongo from '../interfaces/IMatchHistoryMongo';

const matchDataSchema = new Schema({
    gameMode: String,
    gameDate: String,
    win: Boolean,
    role: String,
    championName: String,
    kills: Number,
    deaths: Number,
    assists: Number,
    gptScore: Number,
    visionPerMin: Number,
    csPerMin: Number,
    dmgPerMin: Number,
    visionAmt: Number,
    csAmt: Number,
    dmgAmt: Number,
});

const matchHistorySchema = new Schema({
    puuid: {
        type: String,
    },
    matches: {
        type: [matchDataSchema],
    },
});

export default mongoose.model<MatchHistoryMongo>(
    'MatchHistory',
    matchHistorySchema
);
