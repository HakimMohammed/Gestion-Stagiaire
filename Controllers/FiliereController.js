const filiereModel = require("../Models/filiere");

exports.afficher = async(req,res) => {
    try{
        const filieres = await filiereModel.find();
        res.status(200).json(filieres)
    }
    catch(err)
    {
        res.status(400).json({message : err.message});
    }
};

exports.ajouter = async(req,res) => {
    if(!req.body.Nom && !req.body.Module)
    {
        res.status(400).send({message:"Le contenu ne peut pas etre vide"})
    }

    const filiere = new filiereModel({
        Nom : req.body.Nom ,
        Module: req.body.Module,
    });

    await filiere.save()
    .then(data => {
        res.send({message : "filiere ajouté !" , filiere : data});
    })
    .catch(error => {
        res.status(400).send({message : error.message || "filiere n'est pas ajouté"});
    });
};

exports.modifier = async(req,res) => {
    if(!req.body){
        res.status(400).send({message : "Values Vides !"});
    }

    const id = req.params.id ;
    await filiereModel.findByIdAndUpdate(id,req.body ,
        {
            useFindAndModify : false
        })
        .then(data => {
            if(!data)
            {
                res.status(404).send({
                    message : "filiere introuvable !"
                })
            }
            else
            {
                res.send({
                    message : "filiere Modifié !"
                })
            }
        })
        .catch( error => {
            res.status(500).send({ message : error.message});
        })
}

exports.supprimer = async(req,res) => {
    await filiereModel.findByIdAndRemove(req.params.id)
        .then(data => {
            if(!data)
            {
                res.status(404).send({message : "filiere introuvable"})
            }
            else
            {
                res.send({message : "filiere Supprimé"})
            }
        })
        .catch( error => {
            res.status(500).send({
                messgae : error.message
            })
        })
}