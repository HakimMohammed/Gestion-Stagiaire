require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express")
const app = express()

app.use(express.json());
mongoose.Promise = global.Promise;
mongoose.set('strictQuery' , false);
mongoose.connect("mongodb://localhost:27017/gestion-stagiaire" ,{ useNewUrlParser : true })
    .then(()=>{console.info("Connected to Database")})
    .catch((error)=>{
        console.error('Could not connect to database' , error);
        process.exit()
    })