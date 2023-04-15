import Film from "../models/films";
import Planet from "../models/planets";
import Starship from "../models/starships";
import path from "path";
import fs from "fs";
import data from "../config/dataLoaded";

/**
Loads data from JSON files and inserts them into MongoDB collections if data has not been loaded yet.
@returns {Promise<void>}
*/
export const loadData = async (): Promise<void> => {
  if ((await data.loadData()) == true) {
    console.log("Data already loaded.");
    return;
  } else {
    // Path to directory where the JSON files are stored.
    const jsonDir = path.join(__dirname, "..", "..", "src", "shared", "mock");
    // Read and parse films.json file.
    const filmsFilePath = path.join(jsonDir, "films.json");
    const filmsData = fs.readFileSync(filmsFilePath);
    const filmsJson = JSON.parse(filmsData.toString());

    // Read and parse planets.json file.
    const planetsFilePath = path.join(jsonDir, "planets.json");
    const planetsData = fs.readFileSync(planetsFilePath);
    const planetsJson = JSON.parse(planetsData.toString());

    // Read and parse starships.json file.
    const starshipsFilePath = path.join(jsonDir, "starships.json");
    const starshipsData = fs.readFileSync(starshipsFilePath);
    const starshipsJson = JSON.parse(starshipsData.toString());

    try {
      // Clear collections before loading new data.
      await Promise.all([
        Film.deleteMany({}),
        Planet.deleteMany({}),
        Starship.deleteMany({}),
      ]);

      // Insert new data into collections.
      await Promise.all([
        Film.insertMany(filmsJson),
        Planet.insertMany(planetsJson),
        Starship.insertMany(starshipsJson),
      ]);
      data.setLoaded(true);
      console.log("Data loaded successfully.");
    } catch (error) {
      console.log(error);
    }
  }
};
