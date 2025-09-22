import express from "express";
import dotenv from "dotenv";

import monstersRoutes from "./src/routes/monstersRoutes.js"

const app = express();
app.use(express.json());

dotenv.config();
const serverPort = process.env.PORT || 3001;

app.get("/", (req, res) => {
    res.send("Servidor do Sistema de Persongem de anime Inciando ...🏹");
});

app.use("/monsters", monstersRoutes)

app.listen(serverPort, () => {
  console.log(`Servidor do Sistema de Persongem de anime Inciando em: 🏹  http://localhost:${serverPort}`);
    });