const mongoose = require("mongoose");
var Schema = new mongoose.Schema({
    Nom: String,
    id_Filière: String,
});

var groupe = new mongoose.model("Groupe",Schema);
module.exports = groupe ;