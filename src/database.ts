import mongoose, { ConnectOptions } from "mongoose";
import config from "./config/config";
import { loadData } from "./scripts/loadData";

mongoose
  .connect(config.DB.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: false,
  } as ConnectOptions)
  .then(() => {
    console.log("MongoDB connected!");
  })
  .catch((err) => console.error("Error connecting to MongoDB:", err));

export const connection = mongoose.connection;

connection.once("open", () => {
  loadData();
  console.log("Mongodb Connection stablished");
});

connection.on("error", (err) => {
  console.log("Mongodb connection error:", err);
  process.exit();
});
