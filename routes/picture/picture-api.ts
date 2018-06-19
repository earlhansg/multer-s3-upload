import { Request, Response, NextFunction } from "express";


export function addPicture(req: Request, res: Response, next: NextFunction) {
  console.log(req);
}

export function updatePicture(req: Request, res: Response, next: NextFunction) {
  res.json("Successfully Updated User");
}

export function getPicture(req: Request, res: Response, next: NextFunction) {
  res.json("Successfully Get Picture Info");
}

export function deletePicture(req: Request, res: Response, next: NextFunction) {
  res.json("Successfully Deleted User");
}

