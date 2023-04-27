const express = require("express");
const FiliereController = require("../Controllers/FiliereController")
const router = express.Router();

router.get("/",FiliereController.afficher);
router.post("/",FiliereController.ajouter);
router.patch("/:id",FiliereController.modifier);
router.delete("/:ifd",FiliereController.supprimer);

module.exports = router ;
