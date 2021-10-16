import dotenv from 'dotenv';
import axios, { AxiosInstance } from 'axios';

dotenv.config();

// common mongoose options
const MONGO_OPTIONS = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    socketTimeoutMS: 30000,
    keepAlive: true,
    autoIndex: false,
    retryWrites: false
};

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT = process.env.SERVER_PORT || 3000;

const MONGO = {
    options: MONGO_OPTIONS,
    url: `mongodb+srv://cse115a:0vWk0HnItDysKOyl@riot-api-database.fpqow.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
};
const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
};

//will manually update every 24 hours
const RIOTAPIKEY = `RGAPI-1d223e25-6ce3-4c41-9063-0a89327035dd`;

const config = {
    mongo: MONGO,
    server: SERVER,
    riotApiKey: RIOTAPIKEY,
};

export default config;
