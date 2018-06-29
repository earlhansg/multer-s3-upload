import { load } from "dotenv";
load();

// const PHOTOS_MIME_TYPES = ["image/gif", "image/jpeg", "image/png"];

const PHOTOS_MIME_TYPES = ["image/gif", "image/jpeg", "image/png"];

export const Config = {
    MONGO_CONNECTION_URL: process.env.MONGO_CONNECTION_URL || "",

    photosFileFilter: (req: any, file: any, cb: any) => {
        if (PHOTOS_MIME_TYPES.includes(file.mimetype)) {
            return cb(null, true);
        }
        cb(new Error("Invalid File Type Uploaded."));
    }
};