const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const productsRoute = require('./routes/productsRoute');

const app = express();
const port = process.env.PORT || 5000;

// connect with mongoose
mongoose
    .connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Database Connect Successfully!'))
    .catch(() => console.log('Database Connect Fail!'));

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
app.use('/api/products', productsRoute);

// listen app
app.listen(port, () =>
    console.log(`App is listen on http://localhost:${port}`)
);
