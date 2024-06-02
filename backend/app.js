import  express from 'express';
// const cookieParser = require('cookie-parser');
import connectToDB from './configs/dbConfig.js';

import cookieParser from  'cookie-parser';
import bodyParser from 'body-parser';
// const cookieParser = require("cookie-parser");
// const bodyParser = require('body-parser');



const app = express();
connectToDB()

//Routes
// const auth = require('./routes/authroute.js')
import auth from './routes/authroute.js';

app.use(
    cors({
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);

app.use(cookieParser());

app.use(express.json());

app.use(bodyParser.json());

app.use('/auth', auth)

app.listen(5000, () => {
    console.log('Server started on port 5000');
});
