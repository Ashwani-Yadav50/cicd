const express = require("express");
const app = express() ;
require('dotenv').config();

const port = process.env.PORT || 3000;

app.get("/api/users", (req,res)=>{
    res.send({message: "Hello"})
})


app.get("/check", (req,res)=>{
    res.send("Please check ")
})




app.get("/api/helloo", (req,res)=>{
    res.send("server is saying hello")
})



app.get("/api/abhi", (req,res)=>{
    res.send({message: "Hello from abhi"})
})




app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})