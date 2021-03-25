const mongoose = require("mongoose");
const express = require("express");

const PORT = 3000,
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

//Bring in Mongoose.connect

//declare routes

//declare API routes

app.listen(PORT,()=>{
    console.log(`My app is running on ${PORT}`);
})
