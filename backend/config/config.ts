import dotenv from 'dotenv';

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
const RIOTAPIKEY = `RGAPI-e459a081-b105-474d-8748-a4fffdec5ac5`;

const config = {
    mongo: MONGO,
    server: SERVER,
    riotApiKey: RIOTAPIKEY,
};

export default config;
