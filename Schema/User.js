const mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    techPref: String,
    watchAnime: Boolean,
    repairRights: Boolean,
    muiscGenre: String,
    phonePref: String,
    countryVisit: String,
    employment: Boolean,
    hobby: String,
    ruralOrUrban: String,
    dogsOrCats: String,
});