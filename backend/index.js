import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static(path.join(__dirname, '../frontend/build')));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
