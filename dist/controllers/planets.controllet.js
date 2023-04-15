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
exports.deletePlanet = exports.updatePlanet = exports.createPlanet = exports.getPlanetsById = exports.getPlanet = void 0;
const planets_1 = __importDefault(require("../models/planets"));
/**
 * @function getPlanet - Function that brings all the planets
 * @param req
 * @param res
 * @returns - Json with all movies
 */
const getPlanet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Allplanets = yield planets_1.default.find();
        res.json(Allplanets);
    }
    catch (_a) {
        res.send(`Cannot get the planets`);
    }
});
exports.getPlanet = getPlanet;
/**
 * @function getPlanetsById - Function that bring one planet
 * @param req
 * @param res
 */
const getPlanetsById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const uniquePlanet = yield planets_1.default.findById(req.params.id);
        res.json(uniquePlanet);
    }
    catch (_b) {
        res.send(`Cannot get the planet`);
    }
});
exports.getPlanetsById = getPlanetsById;
/**
Creates a new planet and saves it to the database.
@function createPlanet
@param req
@param res
@returns {Promise} - A promise that resolves to the created planet object or an error message if the planet creation fails.
@throws {Error} - Throws an error if there is a problem with the planet creation.
*/
const createPlanet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, rotation_period, orbital_period, diameter, climate, gravity, terrain, surface_water, population, } = req.body;
    const newPlanet = new planets_1.default({
        name,
        rotation_period,
        orbital_period,
        diameter,
        climate,
        gravity,
        terrain,
        surface_water,
        population,
    });
    try {
        yield newPlanet.save();
        res.json({
            message: "The planet has been successfully created",
            planet: newPlanet,
        });
    }
    catch (_c) {
        res.send(`Cannot create the planet`);
    }
});
exports.createPlanet = createPlanet;
/**
Update an existing planet with the provided data.
@function updatePlanet
@param req
@param res
@returns {Promise<any>} - Promise representing the JSON response with the updated planet data or an error message.
@throws {Error} - If there is an error updating the planet.
*/
const updatePlanet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, rotation_period, orbital_period, diameter, climate, gravity, terrain, surface_water, population, } = req.body;
    try {
        const modifyPlanet = yield planets_1.default.findByIdAndUpdate(req.params.id, {
            name,
            rotation_period,
            orbital_period,
            diameter,
            climate,
            gravity,
            terrain,
            surface_water,
            population,
        }, { new: true });
        res.json({
            message: "The planet has been successfully updated",
            planet: modifyPlanet,
        });
    }
    catch (_d) {
        res.send(`Cannot update the planet`);
    }
});
exports.updatePlanet = updatePlanet;
/**
Deletes a planet from the database based on the provided ID.
@async
@function deletePlanet
@param req
@param res
@returns {Promise<void>}
@throws {Error} If the planet cannot be deleted.
*/
const deletePlanet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield planets_1.default.findByIdAndDelete(req.params.id);
        res.json({ message: "The planet has been successfully removed" });
    }
    catch (_e) {
        res.send(`Cannot update the planet`);
    }
});
exports.deletePlanet = deletePlanet;
