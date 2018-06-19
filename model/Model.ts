import { Schema, model } from "mongoose";

let pictures = model("Photos", new Schema({
    Photo: {
        type: Schema.Types.Mixed,
        required: [true, "Photo is required."]
    }
}));

const models: { [k: string]: any } = {
    pictures
};

export default models;