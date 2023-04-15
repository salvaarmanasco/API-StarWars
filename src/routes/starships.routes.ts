import { Router } from "express";
import {
  createStarship,
  deleteStarship,
  getStarships,
  getStarshipsById,
  updateStarship,
} from "../controllers/starships.controllet";

const router = Router();

router.get("/", getStarships);
router.get("/:id", getStarshipsById);
router.post("/", createStarship);
router.put("/:id", updateStarship);
router.delete("/:id", deleteStarship);

export default router;
