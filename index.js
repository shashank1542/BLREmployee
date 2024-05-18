var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017");

const express = require("express");
const app = express();

var userRoute= require('./routes/userRoute')

app.use('/',userRoute);

app.listen(3000,function(){
    console.log('app is running');
})