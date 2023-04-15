"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("./config/config"));
const loadData_1 = require("./scripts/loadData");
mongoose_1.default
    .connect(config_1.default.DB.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: false,
})
    .then(() => {
    console.log("MongoDB connected!");
})
    .catch((err) => console.error("Error connecting to MongoDB:", err));
exports.connection = mongoose_1.default.connection;
exports.connection.once("open", () => {
    (0, loadData_1.loadData)();
    console.log("Mongodb Connection stablished");
});
exports.connection.on("error", (err) => {
    console.log("Mongodb connection error:", err);
    process.exit();
});
