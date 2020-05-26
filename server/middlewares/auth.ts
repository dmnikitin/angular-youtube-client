import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import config from '../common/config';

interface IRequest extends Request {
  decoded: string;
}

const { JWT_SECRET_KEY } = config;

export default function authMiddleware (req: IRequest, res: Response, next: NextFunction): void {
  if (req.url === '/login' || req.url === '/signup') {
    return next();  }
  if (req.headers.authorization) {
    const [prefix, token] = req.headers.authorization.split(' ');
    if (prefix === 'Bearer') {
      jwt.verify(token, JWT_SECRET_KEY, (err, decoded) => {
        if (err) {
          res.status(401).send({
            success: false,
            error: 'failed to verify token'
          });
          return;
        }
        req.decoded = decoded;
        return next();
      });
    }
  } else {
    res.status(401).send({
      success: false,
      message: 'No token provided'
    });
    return;
  }
}
