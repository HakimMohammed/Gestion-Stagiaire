const mongoose = require("mongoose");
var Schema = new mongoose.Schema({
    Nom : String ,
    Prénom : String ,
    CIN : { type : String , required : true , unique : true},
    Email : { type : String , unique : true},
    Tel : String ,
    Date_Naissance : Date ,
    Filière: Object ,
    Groupe: Object
});

var stagiaire = new mongoose.model("Stagiaire",Schema);
module.exports = stagiaire ;