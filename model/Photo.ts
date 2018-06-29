import { Schema, model, SchemaTypes } from "mongoose";


export const PhotoSchema: Schema = new Schema({
    path: {
        type: SchemaTypes.Mixed,
        required: [true, "Path is required."]
    }
});


export const Photo = model("photo", PhotoSchema);