import { Request } from 'express';
import { Document, Model } from 'mongoose';
import { toResponseFn } from './types';

export interface IUserDocument extends Document {
  _id: string;
  login: string;
  password: string;
}

export interface IUser extends Model<IUserDocument> {

}

export interface IUserModelInterface extends IUser {
  toResponse: toResponseFn;
}

export interface IRequest extends Request {
  decoded: string;
}
