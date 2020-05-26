import { Request, Response, NextFunction } from 'express';
import logger from '../common/winston-config';

export default function loggerMiddleware(req: Request, res: Response, next: NextFunction): void {
  logger.log(
    'info',
    `url: ${req.url}, query params: ${JSON.stringify(
      req.query
    )}, body: ${JSON.stringify(req.body)}`
  );
  next();
}
