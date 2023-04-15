import { Router } from "express";
import {
  getPlanet,
  createPlanet,
  deletePlanet,
  getPlanetsById,
  updatePlanet,
} from "../controllers/planets.controllet";

const router = Router();

router.get("/", getPlanet);
router.get("/:id", getPlanetsById);
router.post("/", createPlanet);
router.put("/:id", updatePlanet);
router.delete("/:id", deletePlanet);

export default router;
