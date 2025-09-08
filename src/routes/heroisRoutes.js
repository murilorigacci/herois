import express from "express";
import { getAllHerois, createHeroi } from "../controllers/heroisController.js";

const router = express.Router()

router.get("/", getAllHerois);
router.post("/", createHeroi)

export default router;