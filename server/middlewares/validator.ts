import { Request, Response, NextFunction } from 'express';
import ExtendedError from '../helpers/error-extended';

export default function validatorMiddleware (req: Request, res: Response, next: NextFunction): void {
  const idRegexp: RegExp = /\w{8}-\w{4}-\w{4}-\w{4}-\w{12}/g;
  const validId: boolean = idRegexp.test(req.params.id);
  if (!validId) {
    throw new ExtendedError(400, 'Incorrect request format');
  }
  next();
}
