const groupeModel = require("../Models/groupe");

exports.afficher = async(req,res) => {
    try{
        const groupes = await groupeModel.find();
        res.status(200).json(groupes)
    }
    catch(err)
    {
        res.status(400).json({message : err.message});
    }
};

exports.ajouter = async(req,res) => {
    if(!req.body.Nom && !req.body.id_Filière)
    {
        res.status(400).send({message:"Le contenu ne peut pas etre vide"})
    }

    const groupe = new groupeModel({
        Nom : req.body.Nom ,
        id_Filière : req.body.id_Filière ,
    });

    await groupe.save()
    .then(data => {
        res.send({message : "Groupe ajouté !" , groupe : data});
    })
    .catch(error => {
        res.status(400).send({message : error.message || "Groupe n'est pas ajouté"});
    });
};

exports.modifier = async(req,res) => {
    if(!req.body){
        res.status(400).send({message : "Values Vides !"});
    }

    const id = req.params.id ;
    await groupeModel.findByIdAndUpdate(id,req.body ,
        {
            useFindAndModify : false
        })
        .then(data => {
            if(!data)
            {
                res.status(404).send({
                    message : "Groupe introuvable !"
                })
            }
            else
            {
                res.send({
                    message : "Groupe Modifié !"
                })
            }
        })
        .catch( error => {
            res.status(500).send({ message : error.message});
        })
}

exports.supprimer = async(req,res) => {
    await groupeModel.findByIdAndRemove(req.params.id)
        .then(data => {
            if(!data)
            {
                res.status(404).send({message : "Groupe introuvable"})
            }
            else
            {
                res.send({message : "Groupe Supprimé"})
            }
        })
        .catch( error => {
            res.status(500).send({
                messgae : error.message
            })
        })
}