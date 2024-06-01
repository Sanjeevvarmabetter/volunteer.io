const exxpress = require('express');
const bodyparser = require('body-parser');
const connect_to_database = require('./configs/dbConfig');
const authRoute = require('./routes/authroute');
const eventRoutes = require('./routes/events');


const userRoute = require('./routes/userroute');



const app = exxpress();
const port = 5000;

connect_to_database();

//routes

app.use(bodyparser.json());
app.use('/api',eventRoutes);
app.use('/api',authRoute);
app.use('/api',userRoute);

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});

module.exports = app;

