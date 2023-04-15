import { model, Schema } from "mongoose";
import { IFilms } from "../shared/interfaces";

const filmSchema = new Schema(
  {
    title: { type: String, required: true },
    episode_id: { type: Number, required: true },
    opening_crawl: { type: String, required: true },
    director: { type: String, required: true },
    producer: { type: String, required: true },
    release_date: { type: String, required: true },
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

export default model<IFilms>("Films", filmSchema);
