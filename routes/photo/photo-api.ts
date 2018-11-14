import { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import { Photo } from "../../model/Photo";
import { Config } from "../../helper/Config";
import fs = require("fs");

const upload = require('../file-upload');
const singleUpload = upload.single('path');


export async function addPhoto(req: any, res: Response, next: NextFunction) {
  await singleUpload(req, res, (err) => {
    if (err) {
      return res.status(422)
                .send({errors: [{title: 'File Upload Error', detail: err.message}] });
    }
    // return res.json({'imageUrl': req.file.location});
    else {
      let imageUrl    = req.file.location;
      let currentDate = new Date();
      Photo
        .create({
          path: imageUrl,
          date: currentDate})
        .then(response => res.json(response))
        .catch(error => res.json(error));
      }    
  });
}

export async function getPhoto(req: any, res: Response, next: NextFunction){
  res.json("Hi there");
}