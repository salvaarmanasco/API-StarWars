import { model, Schema } from "mongoose";
import { IStarships } from "../shared/interfaces";

const starshipSchema = new Schema(
  {
    name: { type: String, required: true },
    model: { type: String, required: true },
    manufacturer: { type: String, required: true },
    cost_in_credits: { type: String, required: true },
    length: { type: String, required: true },
    max_atmosphering_speed: { type: String, required: true },
    crew: { type: String, required: true },
    passengers: { type: String, required: true },
    cargo_capacity: { type: String, required: true },
    consumables: { type: String, required: true },
    hyperdrive_rating: { type: String, required: true },
    MGLT: { type: String, required: true },
    starship_class: { type: String, required: true },
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

export default model<IStarships>("Starships", starshipSchema);
