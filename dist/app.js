"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const films_routes_1 = __importDefault(require("./routes/films.routes"));
const planets_routes_1 = __importDefault(require("./routes/planets.routes"));
const starships_routes_1 = __importDefault(require("./routes/starships.routes"));
// Initializations
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
// Middlewares
app.use((0, morgan_1.default)("dev"));
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
// Routes
app.get("/", (req, res) => {
    res.send(`THE API is at http://localhost:3000`);
});
app.get("/test", (req, res) => {
    res.send("Test successfull");
});
app.use("/films", films_routes_1.default);
app.use("/planets", planets_routes_1.default);
app.use("/starships", starships_routes_1.default);
exports.default = app;
