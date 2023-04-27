const moduleModel = require("../Models/module");

exports.afficher = async(req,res) => {
    try{
        const modules = await moduleModel.find();
        res.status(200).json(modules)
    }
    catch(err)
    {
        res.status(400).json({message : err.message});
    }
};

exports.ajouter = async(req,res) => {
    if(!req.body.Nom && !req.body.Coefficient && !req.body.id_Filière)
    {
        res.status(400).send({message:"Le contenu ne peut pas etre vide"})
    }

    const module = new moduleModel({
        Nom : req.body.Nom ,
        Coefficient : req.body.Coefficient ,
        id_Filière : req.body.id_Filière ,
    });

    await module.save()
    .then(data => {
        res.send({message : "module ajouté !" , module : data});
    })
    .catch(error => {
        res.status(400).send({message : error.message || "module n'est pas ajouté"});
    });
};

exports.modifier = async(req,res) => {
    if(!req.body){
        res.status(400).send({message : "Values Vides !"});
    }

    const id = req.params.id ;
    await moduleModel.findByIdAndUpdate(id,req.body ,
        {
            useFindAndModify : false
        })
        .then(data => {
            if(!data)
            {
                res.status(404).send({
                    message : "module introuvable !"
                })
            }
            else
            {
                res.send({
                    message : "module Modifié !"
                })
            }
        })
        .catch( error => {
            res.status(500).send({ message : error.message});
        })
}

exports.supprimer = async(req,res) => {
    await moduleModel.findByIdAndRemove(req.params.id)
        .then(data => {
            if(!data)
            {
                res.status(404).send({message : "module introuvable"})
            }
            else
            {
                res.send({message : "module Supprimé"})
            }
        })
        .catch( error => {
            res.status(500).send({
                messgae : error.message
            })
        })
}