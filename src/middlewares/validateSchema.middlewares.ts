import { NextFunction, Request, Response } from "express";
import { Schema } from "joi";

export function validateSchemaBody(schema: Schema) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = schema.validate(req.body);
    if (error) {
      res.status(422).send(error.details[0].message);
    } else {
      next();
    }
  };
}

export function validateSchemaParams(schema: Schema) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = schema.validate(req.params);
    if (error) {
      res.status(422).send(error.details[0].message);
    } else {
      next();
    }
  };
}