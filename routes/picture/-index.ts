"use strict";

import { Router } from "express";

import * as pictureApi from "./picture-api";

const router: Router = Router();

router.post("/", pictureApi.addPicture);
router.put("/", pictureApi.updatePicture);
router.get("/:id", pictureApi.getPicture);
router.delete("/:id", pictureApi.deletePicture);

export const pictureRoutes: Router = router;