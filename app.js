const express = require('express')
const app = express();
const path = require("path")
/* console.log(app) */

app.use(express.static("public"))


app.get("/",(req,res) => res.sendFile(path.join(__dirname, "views","index.html")))
app.get("/babbage",(req,res) => res.sendFile(path.join(__dirname, "views","babbage.html")))
app.get("/bernel-lee",(req,res) => res.sendFile(path.join(__dirname, "views","bernel-lee.html")))
app.get("/clarke",(req,res) => res.sendFile(path.join(__dirname, "views","clarke.html")))
app.get("/hamilton",(req,res) => res.sendFile(path.join(__dirname, "views","hamilton.html")))
app.get("/hopper",(req,res) => res.sendFile(path.join(__dirname, "views","hopper.html")))
app.get("/lovelace",(req,res) => res.sendFile(path.join(__dirname, "views","lovelace.html")))
app.get("/turing",(req,res) => res.sendFile(path.join(__dirname, "views","turing.html")))
app.get("*",(req,res) => res.sendFile(path.join(__dirname, "views","404.html")))


app.listen(3030,()=> console.log('corriendo en localhost:3030'))