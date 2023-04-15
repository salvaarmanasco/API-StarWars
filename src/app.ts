import express from "express";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";
import filmsRouter from "./routes/films.routes";
import planetsRouter from "./routes/planets.routes";
import starshipsRouter from "./routes/starships.routes";

// Initializations
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send(`THE API is at http://localhost:3000`);
});
app.get("/test", (req, res) => {
  res.send("Test successfull");
});
app.use("/films", filmsRouter);
app.use("/planets", planetsRouter);
app.use("/starships", starshipsRouter);

export default app;
