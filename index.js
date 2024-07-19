const express = require('express');
const routes = require('./routes/routes');
const app = express();
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const corsOptions = {
    origin: 'http://localhost:4200', // Your Angular app's URL
    optionsSuccessStatus: 200
  };
  
  app.use(cors(corsOptions));
app.use(express.json());
app.use('/api', routes)
app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})