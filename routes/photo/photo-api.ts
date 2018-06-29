import { Request, Response, NextFunction } from "express";
import { Photo } from "../../model/Photo";


export async function addPhoto(req: any, res: Response, next: NextFunction): Promise<void> {
  const path = req.file.path;

  await Photo
    .create({ path })
    .then(response => res.json(response))
    .catch(err => res.json(err));
} 

export async function updatePhoto(req: any, res: Response, next: NextFunction) {
    res.json("Updated the Photo");
}

export async function getPhoto(req: Request, res: Response, next: NextFunction) {
  const id = req.params.id;

  await Photo
    .findById( id )
    .then(response => res.json(response))
    .catch(err => res.json(err));
}

export async function deletePhoto(req: Request, res: Response, next: NextFunction) {
  const id = req.params.id;

  await Photo
    .findByIdAndRemove( id )
    .then(response => res.json(response))
    .catch(err => res.json(err));
}

