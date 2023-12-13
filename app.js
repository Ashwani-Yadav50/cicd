const express = require("express");
const app = express() ;
require('dotenv').config();

const port = process.env.PORT || 3000;

app.get("/", (req,res)=>{
    res.send({message: "Hello"})
})


app.get("/check", (req,res)=>{
    res.send("Please check ")
})




app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})