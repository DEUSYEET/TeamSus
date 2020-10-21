const mongoose = require ("mongoose");
const express = require("express");
const routes = express.Router();
const User = require(__dirname+"/Schema/User");
const bodyParser = require('body-parser');


const Connect = (callBack) => {
    mongoose.connect("mongodb+srv://admin:admin@cluster0.un7p6.azure.mongodb.net/SusDataDB?retryWrites=true&w=majority", callBack);
}

routes.get("/css/style.css", (req, res) => {
    res.sendFile(__dirname+'/public/css/style.css');
});

routes.get("/GetData", (req, res) => {
    Connect((err) => {
        
    })
});

routes.get("/Home", (req, res) => {
    res.sendFile(__dirname+'/public/views/index.html');
});

routes.get("/Results", (req, res) => {
    res.sendFile(__dirname+'/public/views/results.html');
});

routes.post("/ReceiveInput", bodyParser, (req, res) => {
    console.log(req.body);
    Connect((err) => {
        console.log(req.body);
        let newEntry = new User({
            techPref: req.body.q1,
            watchAnime: req.body.q2,
            repairRights: req.body.q4,
            muiscGenre: req.body.q3,
            phonePref: req.body.q5,
            countryVisit: req.body.q6,
            employment: req.body.q7,
            hobby: req.body.q8,
            ruralOrUrban: req.body.q9,
            dogsOrCats: req.body.q10,
        });
        newEntry.save((err) => {
            console.log(err);
        });
    })
});

routes.get("/Survey", (req, res) => {
    res.sendFile(__dirname+'/public/views/survey.html');
});

module.exports = routes;
