import { load } from "dotenv";
load();

export const Config = {
    MONGO_CONNECTION_URL: process.env.MONGO_CONNECTION_URL || "",
};