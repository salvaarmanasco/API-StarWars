"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const starshipSchema = new mongoose_1.Schema({
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
}, {
    toJSON: {
        transform: (doc, ret) => {
            ret.created = ret.created.toString();
            ret.updated = ret.updated.toString();
            delete ret.__v;
        },
    },
});
exports.default = (0, mongoose_1.model)("Starships", starshipSchema);
