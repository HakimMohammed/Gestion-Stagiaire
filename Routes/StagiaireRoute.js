const express = require("express");
const StagiaireController = require("../Controllers/StagiaireController")
const router = express.Router();

router.get("/",StagiaireController.afficher);
router.post("/",StagiaireController.ajouter);
router.patch("/:id",StagiaireController.modifier);
router.delete("/",StagiaireController.supprimer);

module.exports = router ;
