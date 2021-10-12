import { Document } from 'mongoose';

export default interface SummonerInfo extends Document {
    userID: String;
    userRank: String;
    userTag: String;
};
