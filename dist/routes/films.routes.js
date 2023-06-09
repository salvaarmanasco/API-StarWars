"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const films_controller_1 = require("../controllers/films.controller");
const router = (0, express_1.Router)();
router.get("/", films_controller_1.getFilms);
router.get("/:id", films_controller_1.getFilmsById);
router.post("/", films_controller_1.createFilm);
router.put("/:id", films_controller_1.updateFilm);
router.delete("/:id", films_controller_1.deleteFilm);
exports.default = router;
