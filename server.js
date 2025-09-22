import express from "express";
import dotenv from "dotenv";

import animesRoutes from './src/routes/animesRoutes.js'

const app = express();
app.use(express.json());

dotenv.config();
const serverPort = process.env.PORT || 3001;

app.get("/", (req, res) => {
    res.send("Servidor do Sistema de Persongem de anime Inciando ...🏹");
});

app.use("/animes", animesRoutes)

app.listen(serverPort, () => {
  console.log(`Servidor do Sistema de Persongem de anime Inciando em: 🏹  http://localhost:${serverPort}`);
    });