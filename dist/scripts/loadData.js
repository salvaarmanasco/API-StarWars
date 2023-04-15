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
exports.loadData = void 0;
const films_1 = __importDefault(require("../models/films"));
const planets_1 = __importDefault(require("../models/planets"));
const starships_1 = __importDefault(require("../models/starships"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const dataLoaded_1 = __importDefault(require("../config/dataLoaded"));
/**
Loads data from JSON files and inserts them into MongoDB collections if data has not been loaded yet.
@returns {Promise<void>}
*/
const loadData = () => __awaiter(void 0, void 0, void 0, function* () {
    if ((yield dataLoaded_1.default.loadData()) == true) {
        console.log("Data already loaded.");
        return;
    }
    else {
        // Path to directory where the JSON files are stored.
        const jsonDir = path_1.default.join(__dirname, "..", "..", "src", "shared", "mock");
        // Read and parse films.json file.
        const filmsFilePath = path_1.default.join(jsonDir, "films.json");
        const filmsData = fs_1.default.readFileSync(filmsFilePath);
        const filmsJson = JSON.parse(filmsData.toString());
        // Read and parse planets.json file.
        const planetsFilePath = path_1.default.join(jsonDir, "planets.json");
        const planetsData = fs_1.default.readFileSync(planetsFilePath);
        const planetsJson = JSON.parse(planetsData.toString());
        // Read and parse starships.json file.
        const starshipsFilePath = path_1.default.join(jsonDir, "starships.json");
        const starshipsData = fs_1.default.readFileSync(starshipsFilePath);
        const starshipsJson = JSON.parse(starshipsData.toString());
        try {
            // Clear collections before loading new data.
            yield Promise.all([
                films_1.default.deleteMany({}),
                planets_1.default.deleteMany({}),
                starships_1.default.deleteMany({}),
            ]);
            // Insert new data into collections.
            yield Promise.all([
                films_1.default.insertMany(filmsJson),
                planets_1.default.insertMany(planetsJson),
                starships_1.default.insertMany(starshipsJson),
            ]);
            dataLoaded_1.default.setLoaded(true);
            console.log("Data loaded successfully.");
        }
        catch (error) {
            console.log(error);
        }
    }
});
exports.loadData = loadData;
