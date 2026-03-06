import type { Request, Response } from "express";
import * as movieService from "../services/movieService";

export async function listMovies(_req: Request, res: Response) {
  try {
    const items = await movieService.listMovies();
    res.json(items);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erreur lors de la récupération des films" });
  }
}

export async function getMovieSchedule(req: Request, res: Response) {
  const param = req.params.movieId;
  const movieId = typeof param === "string" ? param : param?.[0];
  if (!movieId) {
    res.status(400).json({ error: "movieId requis" });
    return;
  }
  try {
    const schedule = await movieService.getMovieSchedule(movieId);
    res.json(schedule);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erreur lors de la récupération des séances" });
  }
}
