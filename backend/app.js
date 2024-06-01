import express from 'express';
import connectToDB from './configs/dbConfig.js';
import eventRoutes from './routes/event.js';
import userRoutes from './routes/user.js';
import registrationRoutes from './routes/registration.js';

const app = express();
connectToDB();
app.use(express.json());

// Routes
app.use('/events', eventRoutes);
app.use('/users', userRoutes);
app.use('/registrations', registrationRoutes);

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
