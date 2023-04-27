const express = require("express");
const ModuleController = require("../Controllers/ModuleController")
const router = express.Router();

router.get("/",ModuleController.afficher);
router.post("/",ModuleController.ajouter);
router.patch("/:id",ModuleController.modifier);
router.delete("/",ModuleController.supprimer);

module.exports = router ;
