import dotenv from 'dotenv';

dotenv.config();

// common mongoose options
const MONGO_OPTIONS = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    socketTimeoutMS: 30000,
    keepAlive: true,
    autoIndex: false,
    retryWrites: false,
};

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT = process.env.SERVER_PORT || 5000;

const MONGO = {
    options: MONGO_OPTIONS,
    url: ``,
};
const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT,
};

const RIOTAPIKEY = ``;

const config = {
    mongo: MONGO,
    server: SERVER,
    riotApiKey: RIOTAPIKEY,
};

export default config;
