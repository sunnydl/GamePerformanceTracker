import mongoose, { Schema } from 'mongoose';
import LeaderboardMongo from '../interfaces/ILeaderboardMongo';

const playerSchema = new Schema({
    summonerName: String,
    summonerLevel: Number,
    summonerIcon: Number,
    rank: String,
    leaguePoints: Number,
    winGames: Number,
    lossGames: Number,
    favChamps: [String],
});

const leaderboardSchema = new Schema({
    tier: {
        type: String,
    },
    division: {
        type: String,
    },
    players: {
        type: [playerSchema],
    },
});

export default mongoose.model<LeaderboardMongo>(
    'Leaderboard',
    leaderboardSchema
);
