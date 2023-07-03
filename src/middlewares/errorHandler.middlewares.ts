import { ErrorRequestHandler, NextFunction, Request, Response } from "express";

export default function errorHandler(
  error: ErrorRequestHandler,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log(error);
  console.log("aiaiai");
  return res.status(500).send("Sorry, something went wrong 😢");
}