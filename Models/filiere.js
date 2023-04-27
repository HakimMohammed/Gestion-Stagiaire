const mongoose = require("mongoose");
var Schema = new mongoose.Schema({
    Nom : String ,
    Modules: [Object],
});

var filiere = new mongoose.model("Filiere",Schema);
module.exports = filiere ;