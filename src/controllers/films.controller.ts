import { Request, Response } from "express";
import Films from "../models/films";
import { IFilms } from "../shared/interfaces";

/**
 * @function getFilms - Function that brings all the movies
 * @param req
 * @param res
 * @returns - Json with all movies
 */
export const getFilms = async (req: Request, res: Response) => {
  try {
    const Allfilms = await Films.find();
    res.json(Allfilms);
  } catch {
    res.send(`Cannot get the films`);
  }
};

/**
 * @function getFilmsById - Function that bring one movies
 * @param req
 * @param res
 */
export const getFilmsById = async (req: Request, res: Response) => {
  try {
    const uniqueFilm = await Films.findById(req.params.id);
    res.json(uniqueFilm);
  } catch {
    res.send(`Cannot get the film`);
  }
};

/**
Creates a new film and saves it to the database.
@function createFilm
@param req
@param res
@returns {Promise} - A promise that resolves to the created film object or an error message if the film creation fails.
@throws {Error} - Throws an error if there is a problem with the film creation.
*/
export const createFilm = async (req: Request, res: Response): Promise<any> => {
  const { title, episode_id, opening_crawl, director, producer, release_date } =
    req.body;
  try {
    const newFilm: IFilms = new Films({
      title,
      episode_id,
      opening_crawl,
      director,
      producer,
      release_date,
    }) as IFilms;
    await newFilm.save();
    res.json({
      message: "The film has been successfully created",
      film: newFilm,
    });
  } catch {
    res.send(`Cannot create the film`);
  }
};

/**
Update an existing film with the provided data.
@function updateFilm
@param req
@param res
@returns {Promise<any>} - Promise representing the JSON response with the updated film data or an error message.
@throws {Error} - If there is an error updating the film.
*/
export const updateFilm = async (req: Request, res: Response): Promise<any> => {
  const { title, episode_id, opening_crawl, director, producer, release_date } =
    req.body;
  try {
    const modifyFilm = await Films.findByIdAndUpdate(
      req.params.id,
      { title, episode_id, opening_crawl, director, producer, release_date },
      { new: true }
    );
    res.json({
      message: "The film has been successfully updated",
      film: modifyFilm,
    });
  } catch {
    res.send(`Cannot update the film`);
  }
};

/**
Deletes a film from the database based on the provided ID.
@function deleteFilm
@param req
@param res
@returns {Promise<void>}
@throws {Error} If the film cannot be deleted.
*/
export const deleteFilm = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    await Films.findByIdAndDelete(req.params.id);
    res.json({ message: "The film has been successfully deleted" });
  } catch {
    res.send(`Cannot delete the film`);
  }
};
