import { Request } from 'express';

export interface IUser {
  _id: string;
  login: string;
  password: string;
}

export interface IRequest extends Request {
  decoded: string;
}
