const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
app.use(morgan('dev'));
require('dotenv/config')
//body parser
app.use(express.json());

//router
const personRouter = require('./personsRoute');
app.use('/persons', personRouter)
//server
app.listen(2000, () => {
    console.log("server started on 2000")
})

//db connection

mongoose.connect(process.env.MYDB_CONNECTION, (err) => {
    if (!err)
        console.log("DB connected");
    else
        console.log("DB not connected");
})
