"use strict";

import { Router } from "express";
import fs = require("fs");
import aws = require('aws-sdk');
import multer = require('multer');
import multerS3 = require('multer-s3');
import * as photoApi from "./photo-api";

const router: Router = Router();

router.get("/:id", photoApi.getPhoto);
router.post("/", photoApi.addPhoto);

export const photoRoutes: Router = router;