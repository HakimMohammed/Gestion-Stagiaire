const mongoose = require("mongoose");
var Schema = new mongoose.Schema({
    Nom : String ,
    Coefficient : Number ,
    id_Filière: String,
});

var module = new mongoose.model("Module",Schema);
module.exports = module ;