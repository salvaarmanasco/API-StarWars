import { Router } from "express";
import {
  getFilms,
  getFilmsById,
  createFilm,
  updateFilm,
  deleteFilm,
} from "../controllers/films.controller";

const router = Router();

router.get("/", getFilms);
router.get("/:id", getFilmsById);
router.post("/", createFilm);
router.put("/:id", updateFilm);
router.delete("/:id", deleteFilm);

export default router;
