import mongoose, { Schema } from 'mongoose';
import summonerInfoInterface from '../interfaces/ISummonerInfo';

const summonerInfoSchema: Schema = new Schema(
    {
        userID: { type: String, requried: true },
        userRank: { type: String, required: true },
        userTag: { type: String }
    },
    {
        timestamps: true
    }
);

export default mongoose.model<summonerInfoInterface>('summonerInfo', summonerInfoSchema);