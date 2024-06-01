import express from 'express';
import connectToDB from './configs/dbConfig.js'

const app = express();
connectToDB()

app.listen(3000, () => {
    console.log('Server started on port 3000');
});