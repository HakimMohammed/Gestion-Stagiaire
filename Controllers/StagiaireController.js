const stagiaireModel = require("../Models/stagiaire");

exports.afficher = async(req,res) => {
    try{
        const stagiaires = await stagiaireModel.find();
        res.status(200).json(stagiaires)
    }
    catch(err)
    {
        res.status(400).json({message : err.message});
    }
};

exports.ajouter = async(req,res) => {
    if(!req.body.Nom && !req.body.Prénom && !req.body.CIN && !req.body.Email && !req.body.Tel && !req.body.Date_Naissance && !req.body.Filière && !req.body.Groupe)
    {
        res.status(400).send({message:"Le contenu ne peut pas etre vide"})
    }

    const stagiaire = new stagiaireModel({
        Nom : req.body.Nom ,
        Prénom : req.body.Prénom ,
        CIN : req.body.CIN ,
        Email : req.body.Email ,
        Tel : req.body.Tel ,
        Date_Naissance : req.body.Date_Naissance ,
        Filière : req.body.Filière ,
        Groupe : req.body.Groupe ,
    });

    await stagiaire.save()
    .then(data => {
        res.send({message : "Stagiaire ajouté !" , stagiaire : data});
    })
    .catch(error => {
        res.status(400).send({message : error.message || "Stagiaire n'est pas ajouté"});
    });
};

exports.modifier = async(req,res) => {
    if(!req.body){
        res.status(400).send({message : "Values Vides !"});
    }

    const id = req.params.id ;
    await stagiaireModel.findByIdAndUpdate(id,req.body ,
        {
            useFindAndModify : false
        })
        .then(data => {
            if(!data)
            {
                res.status(404).send({
                    message : "Stagiaire introuvable !"
                })
            }
            else
            {
                res.send({
                    message : "Stagiaire Modifié !"
                })
            }
        })
        .catch( error => {
            res.status(500).send({ message : error.message});
        })
}

exports.supprimer = async(req,res) => {
    await stagiaireModel.findByIdAndRemove(req.params.id)
        .then(data => {
            if(!data)
            {
                res.status(404).send({message : "Stagiaire introuvable"})
            }
            else
            {
                res.send({message : "Stagiaire Supprimé"})
            }
        })
        .catch( error => {
            res.status(500).send({
                messgae : error.message
            })
        })
}