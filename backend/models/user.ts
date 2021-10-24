import mongoose, { Schema } from 'mongoose';
import User from '../interfaces/IUser';

const winRateSchema = new Schema({
    winRate: Number,
    date: Number,
})

const userSchema = new Schema(
    {
        email: { type: String },
        winRate: { type: [winRateSchema], required: true},
        matchIds: {type: [String], required: true},
        leagueId: {
            type: String,
            required: true,
        },
        summonerName: {
            type: String,
            required: true,
        },
        puuid: {
            type: String,
            required: true,
        }
    }
);

export default mongoose.model<User>('User', userSchema);
