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
const RIOTAPIKEY = `RGAPI-2de1e69f-3552-4daf-b911-511bfc7f106a`;
const REGION = "na1.api.riotgames.com";

// set up axios to include riot api key, and export with config
const axiosInstance: AxiosInstance = axios.create({
    baseURL: `https://${REGION}`,
    headers: {
        'Content-Type': 'application/json',
        'X-Riot-Token': RIOTAPIKEY,
    }
});

const config = {
    mongo: MONGO,
    server: SERVER,
    axios: axiosInstance,
};

export default config;
