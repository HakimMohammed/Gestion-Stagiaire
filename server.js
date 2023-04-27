const express = require("express");
const app = express();
const stagiaireRoute = require("./Routes/StagiaireRoute");
const groupeRoute = require("./Routes/GroupeRoutes");
const filiereRoute = require("./Routes/FiliereRoutes");
const moduleRoute = require("./Routes/ModuleRoutes");

app.use("/stagiaire",stagiaireRoute);
app.use("/groupe",groupeRoute);
app.use("/filiere",filiereRoute),
app.use("/module",moduleRoute),
app.listen(3000,()=>{console.log("Server listening on 3000")})