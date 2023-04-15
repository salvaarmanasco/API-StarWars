"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFilm = exports.updateFilm = exports.createFilm = exports.getFilmsById = exports.getFilms = void 0;
const films_1 = __importDefault(require("../models/films"));
/**
 * @function getFilms - Function that brings all the movies
 * @param req
 * @param res
 * @returns - Json with all movies
 */
const getFilms = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Allfilms = yield films_1.default.find();
        res.json(Allfilms);
    }
    catch (_a) {
        res.send(`Cannot get the films`);
    }
});
exports.getFilms = getFilms;
/**
 * @function getFilmsById - Function that bring one movies
 * @param req
 * @param res
 */
const getFilmsById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const uniqueFilm = yield films_1.default.findById(req.params.id);
        res.json(uniqueFilm);
    }
    catch (_b) {
        res.send(`Cannot get the film`);
    }
});
exports.getFilmsById = getFilmsById;
/**
Creates a new film and saves it to the database.
@function createFilm
@param req
@param res
@returns {Promise} - A promise that resolves to the created film object or an error message if the film creation fails.
@throws {Error} - Throws an error if there is a problem with the film creation.
*/
const createFilm = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, episode_id, opening_crawl, director, producer, release_date } = req.body;
    try {
        const newFilm = new films_1.default({
            title,
            episode_id,
            opening_crawl,
            director,
            producer,
            release_date,
        });
        yield newFilm.save();
        res.json({
            message: "The film has been successfully created",
            film: newFilm,
        });
    }
    catch (_c) {
        res.send(`Cannot create the film`);
    }
});
exports.createFilm = createFilm;
/**
Update an existing film with the provided data.
@function updateFilm
@param req
@param res
@returns {Promise<any>} - Promise representing the JSON response with the updated film data or an error message.
@throws {Error} - If there is an error updating the film.
*/
const updateFilm = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, episode_id, opening_crawl, director, producer, release_date } = req.body;
    try {
        const modifyFilm = yield films_1.default.findByIdAndUpdate(req.params.id, { title, episode_id, opening_crawl, director, producer, release_date }, { new: true });
        res.json({
            message: "The film has been successfully updated",
            film: modifyFilm,
        });
    }
    catch (_d) {
        res.send(`Cannot update the film`);
    }
});
exports.updateFilm = updateFilm;
/**
Deletes a film from the database based on the provided ID.
@function deleteFilm
@param req
@param res
@returns {Promise<void>}
@throws {Error} If the film cannot be deleted.
*/
const deleteFilm = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield films_1.default.findByIdAndDelete(req.params.id);
        res.json({ message: "The film has been successfully deleted" });
    }
    catch (_e) {
        res.send(`Cannot delete the film`);
    }
});
exports.deleteFilm = deleteFilm;
