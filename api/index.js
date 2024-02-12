import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';

dotenv.config();
mongoose.connect(process.env.MONGO)
.then(() => { 
    console.log('Mongodb is Connected')
    }).catch(err => {
        console.log(err);
    });

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.use('/api/user', userRoutes); //from router in user.router.js
app.use('/api/auth', authRoutes); //from signup in auth.router.js

