import { asc, eq } from "drizzle-orm";
import { movies, screenings, rooms } from "../drizzle/schema";
import { db } from "../db";

export async function listMovies() {
  return db
    .select()
    .from(movies)
    .orderBy(asc(movies.id));
}

export async function getMovieSchedule(movieId: string) {
  return db
    .select({
      movieId: movies.id,
      movieTitle: movies.title,
      screeningId: screenings.id,
      startTime: screenings.startTime,
      roomName: rooms.name,
    })
    .from(movies)
    .innerJoin(screenings, eq(screenings.movieId, movies.id))
    .innerJoin(rooms, eq(rooms.id, screenings.roomId))
    .where(eq(movies.id, movieId))
    .orderBy(asc(screenings.startTime));
}
