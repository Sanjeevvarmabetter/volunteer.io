<<<<<<< HEAD
import  express from 'express';
// const cookieParser = require('cookie-parser');
import connectToDB from './configs/dbConfig.js';

import cookieParser from  'cookie-parser';
import bodyParser from 'body-parser';
// const cookieParser = require("cookie-parser");
// const bodyParser = require('body-parser');


=======
import express from 'express';
import connectToDB from './configs/dbConfig.js';
import eventRoutes from './routes/event.js';
import userRoutes from './routes/user.js';
import registrationRoutes from './routes/registration.js';
>>>>>>> 5215623d10418a3c7d12c8f81d60d7c00b35428a


const r = require('./routes/auth.js')
const app = express();
connectToDB();
app.use(express.json());

// Routes
app.use('/events', eventRoutes);
app.use('/users', userRoutes);
app.use('/registrations', registrationRoutes);

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
app.listen(3000, () => {
    console.log('Server started on port 3000');
});
