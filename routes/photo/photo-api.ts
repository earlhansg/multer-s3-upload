import { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import { Photo } from "../../model/Photo";
import { Config } from "../../helper/Config";
import fs = require("fs");

const upload = require('../file-upload');
const singleUpload = upload.single('path');


export function addPhoto(req: any, res: Response, next: NextFunction) {

  singleUpload(req, res, (err) => {
    if (err) {
      return res.status(422)
                .send({errors: [{title: 'File Upload Error', detail: err.message}] });
    }
    return res.json({'imageUrl': req.file.location});
  });
}

export async function getPhoto(req: any, res: Response, next: NextFunction){
  res.json("Hi there");
}