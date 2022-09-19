import express from 'express'
import mongoose from 'mongoose';
import router from './router.js';

const PORT = 4000;

const app = express();

const DB_URL = "mongodb+srv://root:root@cluster0.ix8vqx1.mongodb.net/?retryWrites=true&w=majority"

app.use(express.json());
app.use('/home', router);
app.use(express.static('public'));

const appStart = async () => {
    try {
        await mongoose.connect(DB_URL);
        app.listen(PORT, () =>  {
            console.log(`Server running on port: ${PORT}`);
        
        })
    } catch (error) {
        console.error(error);
    }
}



appStart();