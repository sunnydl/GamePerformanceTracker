import express, { Request, Response } from 'express';
import http from 'http';
import path from 'path';
import config from './config/config';
import mongoose from 'mongoose';
import morgan from 'morgan';

// path
import api from './routes/index';

const app = express();
export const server = new http.Server(app);

// set up mongoose connection
mongoose
    .connect(config.mongo.url, config.mongo.options)
    .then((result) => {
        console.log('connected to mongoDB');
    })
    .catch((error) => {
        console.log('error happened');
    });

app.use(express.static(path.join(__dirname, '../frontend/build')));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// define rules of api, aka what is allowed
app.use((req, res, next) => {
    // allows request from anywhere via *, but IPS and Routes should be predefined in future projects
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );

    if (req.method == 'OPTIONS') {
        res.header(
            'Access-Control-Allow-Methods',
            'PUT, POST, PATCH, DELETE, GET'
        );
        return res.status(200).json({});
    }

    // next processes the request such that the information can be used.
    next();
});

app.get('/', (req: Request, res: Response) => {
    res.status(200).send('app is running fine');
});
app.use('/api', api);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});

export default app;
