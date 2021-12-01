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
    url: `mongodb+srv://cse115a:0vWk0HnItDysKOyl@riot-api-database.fpqow.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
};
const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT,
};

const RIOTAPIKEY = `RGAPI-7f1c2251-7fdf-45c2-9ca5-514682b1478a`;

const config = {
    mongo: MONGO,
    server: SERVER,
    riotApiKey: RIOTAPIKEY,
};

export default config;
