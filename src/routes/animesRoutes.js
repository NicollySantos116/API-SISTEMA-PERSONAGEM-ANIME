import express from "express";
import {getAllAnimes, getAnimeByld,createAnime,deleteAnime,updateAnime} from "../controllers/animesController.js";

const router = express.Router();
router.get("/", getAllAnimes);
router.get("/:id", getAnimeByld);
router.post("/", createAnime);
router.delete("/:id",deleteAnime);
router.put("/:id", updateAnime);

export default router;