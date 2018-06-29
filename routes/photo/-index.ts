"use strict";

import { Router } from "express";
import { Config } from "../../helper/Config";

import * as multer from "multer";

import * as photoApi from "./photo-api";

const router: Router = Router();

const photoUpload = multer({
    dest: "dist/uploads/",
    fileFilter: Config.photosFileFilter
});

router.post("/", photoUpload.single("path"), photoApi.addPhoto);
router.put("/:id", photoUpload.single("path"), photoApi.updatePhoto);
router.get("/:id", photoApi.getPhoto);
router.delete("/:id", photoApi.deletePhoto);

export const photoRoutes: Router = router;