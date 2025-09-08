import express from "express";
import { getAllViloes } from "../controllers/viloesController.js";

const router = express.Router();

router.get("/", getAllViloes);

export default router