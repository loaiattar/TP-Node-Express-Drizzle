import express from "express";
import * as movieController from "./controllers/movieController";

const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;

app.use(express.json());

app.get("/movies", movieController.listMovies);
app.get("/movies/:movieId/schedule", movieController.getMovieSchedule);

app.listen(PORT, () => {
  console.log(`Serveur Express sur http://localhost:${PORT}`);
});
