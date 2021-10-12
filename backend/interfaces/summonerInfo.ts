import { Document } from 'mongoose';

export default interface summonerInfoInterface extends Document {
    userID: string;
    userRank: string;
    userTag: string;
};