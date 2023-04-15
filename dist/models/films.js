"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const filmSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    episode_id: { type: Number, required: true },
    opening_crawl: { type: String, required: true },
    director: { type: String, required: true },
    producer: { type: String, required: true },
    release_date: { type: String, required: true },
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
exports.default = (0, mongoose_1.model)("Films", filmSchema);
