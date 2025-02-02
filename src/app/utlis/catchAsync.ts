import { NextFunction, Request, RequestHandler, Response } from 'express';

// higher order function to prevent try catch repetation
const catchAsync = (fn: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((error) => next(error));
  };
};

export default catchAsync;
