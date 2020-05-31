import { Request } from 'express';
import { Document } from 'mongoose';

export interface IUser extends Document {
  _id: string;
  login: string;
  password: string;
}

export interface IRequest extends Request {
  decoded: string;
}
