import express from 'express';
import path from 'path';

// path
import api from './routes/index'

const app = express();

app.use(express.static(path.join(__dirname, '../frontend/build')));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', api);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
