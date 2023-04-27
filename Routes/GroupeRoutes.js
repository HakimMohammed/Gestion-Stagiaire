const express = require("express");
const GroupeController = require("../Controllers/GroupeController")
const router = express.Router();

router.get("/",GroupeController.afficher);
router.post("/",GroupeController.ajouter);
router.patch("/:id",GroupeController.modifier);
router.delete("/",GroupeController.supprimer);

module.exports = router ;
