import express from 'express';
import path from 'path';
import config from './config/config';
import logging from './config/logging';
import mongoose from 'mongoose';

// path
import api from './routes/index'

// where the log is coming from
const NAMESPACE = 'Server';

const app = express();

// set up mongoose connection
mongoose
    .connect(config.mongo.url, config.mongo.options)
    .then((result) => {
        logging.info(NAMESPACE, 'connected to mongoDB');
        console.log("connected");
        
    })
    .catch((error) => {
        logging.info(NAMESPACE, error.message, error);
        console.log("error happened");
        
    });

app.use((req, res, next) => {
    /** Log the req */
    logging.info(NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);

    res.on('finish', () => {
        /** Log the res */
        logging.info(NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - STATUS: [${res.statusCode}] - IP: [${req.socket.remoteAddress}]`);
    });

    next();
});

app.use(express.static(path.join(__dirname, '../frontend/build')));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// define rules of api, aka what is allowed
app.use((req, res, next) => {
    // allows request from anywhere via *, but IPS and Routes should be predefined in future projects
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }

    // next processes the request such that the information can be used.
    next();
});

app.use('/api', api);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
