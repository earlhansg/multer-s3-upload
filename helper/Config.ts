import { load } from "dotenv";

load();

const PHOTOS_MIME_TYPES = ["image/gif", "image/jpeg", "image/png"];

export const Config = {
    MONGO_CONNECTION_URL: process.env.MONGO_CONNECTION_URL || "",

    photosFileFilter: (req: any, file: any, cb: any) => {
        console.log("enter", file);
        if (PHOTOS_MIME_TYPES.includes(file.mimetype)) {
            return cb(null, true);
        }
        else {
            console.log("invalid");
            return cb(new Error("Invalid File Type Uploaded."));
        }
    },

};