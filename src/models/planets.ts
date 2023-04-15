import { model, Schema } from "mongoose";
import { IPlanets } from "../shared/interfaces";

const planetSchema = new Schema(
  {
    name: { type: String, required: true },
    rotation_period: { type: String, required: true },
    orbital_period: { type: String, required: true },
    diameter: { type: String, required: true },
    climate: { type: String, required: true },
    gravity: { type: String, required: true },
    terrain: { type: String, required: true },
    surface_water: { type: String, required: true },
    population: { type: String, required: true },
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now },
  },
  {
    toJSON: {
      transform: (doc, ret) => {
        ret.created = ret.created.toString();
        ret.updated = ret.updated.toString();
        delete ret.__v;
      },
    },
  }
);

export default model<IPlanets>("Planets", planetSchema);
