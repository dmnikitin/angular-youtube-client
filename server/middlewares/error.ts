import { Response, NextFunction } from 'express';
import { INTERNAL_SERVER_ERROR, getStatusText } from 'http-status-codes';
import logger from '../common/winston-config';

export default function errorMiddleware (err, res: Response, next: NextFunction): void {
  const { code, message } = err;
  if (code) {
    logger.log('error', `error: ${code}: ${message}`);
    res.status(code).send(message);
  } else {
    logger.log(
      'error',
      `error:${INTERNAL_SERVER_ERROR}: INTERNAL_SERVER_ERROR`
    );
    res
      .status(INTERNAL_SERVER_ERROR)
      .send(getStatusText(INTERNAL_SERVER_ERROR));
  }
  next();
}
