import mongoose, { Schema } from 'mongoose';
import MatchChartMongo from '../interfaces/IMatchChartMongo';

const matchChartDataSchema = new Schema({
    name: String,
    winLoss: Number,
    kills: Number,
    deaths: Number,
    assists: Number,
    scores: Number,
});

const matchChartSchema = new Schema({
    puuid: {
        type: String,
    },
    matches: {
        type: [matchChartDataSchema],
    },
});

export default mongoose.model<MatchChartMongo>('MatchChart', matchChartSchema);
