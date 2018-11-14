import { Schema, model, SchemaTypes } from "mongoose";


export const PhotoSchema: Schema = new Schema({
    path: {
        type: SchemaTypes.Mixed,
        required: [true, "Path is required."]
    },
    date: {
        type: SchemaTypes.Date,
        required: [true, "date is required."]
    }
});


export const Photo = model("photo", PhotoSchema);