const mongoose = require ("mongoose");
const express = require("express");
const routes = express.Router();
const User = require(__dirname+"/Schema/User");


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

routes.post("/ReceiveInput", (req, res) => {
    Connect((err) => {
        let newEntry = new User({
            techPref: q1,
            watchAnime: q2,
            repairRights: q4,
            muiscGenre: q3,
            phonePref: q5,
            countryVisit: q6,
            employment: q7,
            hobby: q8,
            ruralOrUrban: q9,
            dogsOrCats: q10,
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
