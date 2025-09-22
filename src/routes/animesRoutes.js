import express from "express";
import {getAllAnimes, getAnimeByld,createAnime} from "../controllers/animesController.js";

const router = express.Router();
router.get("/", getAllAnimes);
router.get("/:id", getAnimeByld);
router.post("/", createAnime);
export default router;