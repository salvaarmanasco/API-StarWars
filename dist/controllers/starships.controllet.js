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
exports.deleteStarship = exports.updateStarship = exports.createStarship = exports.getStarshipsById = exports.getStarships = void 0;
const starships_1 = __importDefault(require("../models/starships"));
/**
 * @function getStarships - Function that brings all the starships
 * @param req
 * @param res
 * @returns - Json with all starships
 */
const getStarships = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const AllStarships = yield starships_1.default.find();
        res.json(AllStarships);
    }
    catch (_a) {
        res.send(`Cannot get the starships`);
    }
});
exports.getStarships = getStarships;
/**
 * @function getStarshipsById - Function that bring one starship
 * @param req
 * @param res
 */
const getStarshipsById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const uniqueStarship = yield starships_1.default.findById(req.params.id);
        res.json(uniqueStarship);
    }
    catch (_b) {
        res.send(`Cannot get the starship`);
    }
});
exports.getStarshipsById = getStarshipsById;
/**
Creates a new starship and saves it to the database.
@function createStarship
@param req
@param res
@returns {Promise} - A promise that resolves to the created starship object or an error message if the starship creation fails.
@throws {Error} - Throws an error if there is a problem with the starship creation.
*/
const createStarship = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, model, manufacturer, cost_in_credits, length, max_atmosphering_speed, crew, passengers, cargo_capacity, consumables, hyperdrive_rating, MGLT, starship_class, } = req.body;
    try {
        const newStarship = new starships_1.default({
            name,
            model,
            manufacturer,
            cost_in_credits,
            length,
            max_atmosphering_speed,
            crew,
            passengers,
            cargo_capacity,
            consumables,
            hyperdrive_rating,
            MGLT,
            starship_class,
        });
        yield newStarship.save();
        res.json({
            message: "The starship has been successfully created",
            starship: newStarship,
        });
    }
    catch (_c) {
        res.send(`Cannot create the starship`);
    }
});
exports.createStarship = createStarship;
/**
Update an existing starship with the provided data.
@function updateStarship
@param req
@param res
@returns {Promise<any>} - Promise representing the JSON response with the updated starship data or an error message.
@throws {Error} - If there is an error updating the starship.
*/
const updateStarship = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, model, manufacturer, cost_in_credits, length, max_atmosphering_speed, crew, passengers, cargo_capacity, consumables, hyperdrive_rating, MGLT, starship_class, } = req.body;
    try {
        const modifyStarship = yield starships_1.default.findByIdAndUpdate(req.params.id, {
            name,
            model,
            manufacturer,
            cost_in_credits,
            length,
            max_atmosphering_speed,
            crew,
            passengers,
            cargo_capacity,
            consumables,
            hyperdrive_rating,
            MGLT,
            starship_class,
        }, { new: true });
        res.json({
            message: "The starship has been successfully updated",
            starship: modifyStarship,
        });
    }
    catch (_d) {
        res.send(`Cannot update the starship`);
    }
});
exports.updateStarship = updateStarship;
/**
Deletes a starship from the database based on the provided ID.
@function deleteStarship
@param req
@param res
@returns {Promise<void>}
@throws {Error} If the starship cannot be deleted.
*/
const deleteStarship = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield starships_1.default.findByIdAndDelete(req.params.id);
        res.json({ message: "The starship has been successfully removed" });
    }
    catch (_e) {
        res.send(`Cannot delete the starship`);
    }
});
exports.deleteStarship = deleteStarship;
