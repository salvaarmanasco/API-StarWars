import { Request, Response } from "express";
import Starships from "../models/starships";
import { IStarships } from "../shared/interfaces";

/**
 * @function getStarships - Function that brings all the starships
 * @param req
 * @param res
 * @returns - Json with all starships
 */
export const getStarships = async (req: Request, res: Response) => {
  try {
    const AllStarships = await Starships.find();
    res.json(AllStarships);
  } catch {
    res.send(`Cannot get the starships`);
  }
};

/**
 * @function getStarshipsById - Function that bring one starship
 * @param req
 * @param res
 */
export const getStarshipsById = async (req: Request, res: Response) => {
  try {
    const uniqueStarship = await Starships.findById(req.params.id);
    res.json(uniqueStarship);
  } catch {
    res.send(`Cannot get the starship`);
  }
};

/**
Creates a new starship and saves it to the database.
@function createStarship
@param req
@param res
@returns {Promise} - A promise that resolves to the created starship object or an error message if the starship creation fails.
@throws {Error} - Throws an error if there is a problem with the starship creation.
*/
export const createStarship = async (
  req: Request,
  res: Response
): Promise<any> => {
  const {
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
  } = req.body;
  try {
    const newStarship: IStarships = new Starships({
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
    }) as IStarships;
    await newStarship.save();
    res.json({
      message: "The starship has been successfully created",
      starship: newStarship,
    });
  } catch {
    res.send(`Cannot create the starship`);
  }
};

/**
Update an existing starship with the provided data.
@function updateStarship
@param req
@param res
@returns {Promise<any>} - Promise representing the JSON response with the updated starship data or an error message.
@throws {Error} - If there is an error updating the starship.
*/
export const updateStarship = async (
  req: Request,
  res: Response
): Promise<any> => {
  const {
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
  } = req.body;
  try {
    const modifyStarship = await Starships.findByIdAndUpdate(
      req.params.id,
      {
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
      },
      { new: true }
    );
    res.json({
      message: "The starship has been successfully updated",
      starship: modifyStarship,
    });
  } catch {
    res.send(`Cannot update the starship`);
  }
};

/**
Deletes a starship from the database based on the provided ID.
@function deleteStarship
@param req
@param res
@returns {Promise<void>}
@throws {Error} If the starship cannot be deleted.
*/
export const deleteStarship = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    await Starships.findByIdAndDelete(req.params.id);
    res.json({ message: "The starship has been successfully removed" });
  } catch {
    res.send(`Cannot delete the starship`);
  }
};
