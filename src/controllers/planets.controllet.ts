import { Request, Response } from "express";
import Planets from "../models/planets";
import { IPlanets } from "../shared/interfaces";

/**
 * @function getPlanet - Function that brings all the planets
 * @param req
 * @param res
 * @returns - Json with all movies
 */
export const getPlanet = async (req: Request, res: Response) => {
  try {
    const Allplanets = await Planets.find();
    res.json(Allplanets);
  } catch {
    res.send(`Cannot get the planets`);
  }
};

/**
 * @function getPlanetsById - Function that bring one planet
 * @param req
 * @param res
 */
export const getPlanetsById = async (req: Request, res: Response) => {
  try {
    const uniquePlanet = await Planets.findById(req.params.id);
    res.json(uniquePlanet);
  } catch {
    res.send(`Cannot get the planet`);
  }
};

/**
Creates a new planet and saves it to the database.
@function createPlanet
@param req
@param res
@returns {Promise} - A promise that resolves to the created planet object or an error message if the planet creation fails.
@throws {Error} - Throws an error if there is a problem with the planet creation.
*/
export const createPlanet = async (
  req: Request,
  res: Response
): Promise<any> => {
  const {
    name,
    rotation_period,
    orbital_period,
    diameter,
    climate,
    gravity,
    terrain,
    surface_water,
    population,
  } = req.body;
  const newPlanet: IPlanets = new Planets({
    name,
    rotation_period,
    orbital_period,
    diameter,
    climate,
    gravity,
    terrain,
    surface_water,
    population,
  }) as IPlanets;
  try {
    await newPlanet.save();
    res.json({
      message: "The planet has been successfully created",
      planet: newPlanet,
    });
  } catch {
    res.send(`Cannot create the planet`);
  }
};

/**
Update an existing planet with the provided data.
@function updatePlanet
@param req
@param res
@returns {Promise<any>} - Promise representing the JSON response with the updated planet data or an error message.
@throws {Error} - If there is an error updating the planet.
*/
export const updatePlanet = async (
  req: Request,
  res: Response
): Promise<any> => {
  const {
    name,
    rotation_period,
    orbital_period,
    diameter,
    climate,
    gravity,
    terrain,
    surface_water,
    population,
  } = req.body;
  try {
    const modifyPlanet = await Planets.findByIdAndUpdate(
      req.params.id,
      {
        name,
        rotation_period,
        orbital_period,
        diameter,
        climate,
        gravity,
        terrain,
        surface_water,
        population,
      },
      { new: true }
    );
    res.json({
      message: "The planet has been successfully updated",
      planet: modifyPlanet,
    });
  } catch {
    res.send(`Cannot update the planet`);
  }
};

/**
Deletes a planet from the database based on the provided ID.
@async
@function deletePlanet
@param req
@param res
@returns {Promise<void>}
@throws {Error} If the planet cannot be deleted.
*/
export const deletePlanet = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    await Planets.findByIdAndDelete(req.params.id);
    res.json({ message: "The planet has been successfully removed" });
  } catch {
    res.send(`Cannot update the planet`);
  }
};
