import { Schema, Model, model, SchemaTypes } from "mongoose";


export const PictureSchema: Schema = new Schema({
    path: {
        type: SchemaTypes.Mixed,
        required: [true, "Path is required."]
    }
});


export const Picture = model("picture", PictureSchema);