const mongoose = require ("mongoose");
const express = require("express");
const routes = express.Router();
const User = require(__dirname+"/Schema/User");


const Connect = (callBack) => {
    mongoose.connect("mongodb+srv://admin:admin@cluster0.un7p6.azure.mongodb.net/SusDataDB?retryWrites=true&w=majority", callBack);
}

routes.get("/GetData" = (req, res) => {
    Connect((err) => {
        
    })
});

routes.get("/Home", (req, res) => {
    res.sendFile(path.join(__dirname+'/public/html/index.html'));
});

routes.get("/Results", (req, res) => {
    res.sendFile(path.join(__dirname+'/public/html/results.html'));
});

routes.post("/ReceiveInput", (req, res) => {
    Connect((err) => {
        
    })
});

routes.get("/Survey", (req, res) => {
    res.sendFile(path.join(__dirname+'/public/html/survey.html'));
});

module.exports = routes;
