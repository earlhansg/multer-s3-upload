import { Request, Response, NextFunction } from "express";
import { Photo } from "../../model/Photo";


export async function addPhoto(req: any, res: Response, next: NextFunction): Promise<void> {
  const path = req.file.path;

  await Photo
    .create({ path })
    .then(response => res.json(response))
    .catch(err => res.json(err));
} 

export function updatePhoto(req: Request, res: Response, next: NextFunction) {
  res.json("Successfully Updated User");
}

export function getPhoto(req: Request, res: Response, next: NextFunction) {
  res.json("Successfully Get Picture Info");
}

export function deletePhoto(req: Request, res: Response, next: NextFunction) {
  res.json("Successfully Deleted User");
}

