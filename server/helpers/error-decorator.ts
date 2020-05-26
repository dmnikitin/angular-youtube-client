import { Handler, RequestHandler, Request, Response, NextFunction } from 'express';

function catchErrorsDecorator(fnc: Handler): RequestHandler {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      return await fnc(req, res, next);
    } catch (error) {
      return next(error);
    }
  };
}

export default catchErrorsDecorator;
