import * as mongoose from 'mongoose';
import hash from '../helpers/hash';
import { v4 as uuidv4 } from 'uuid';
import { IUser } from './interfaces';

const userSchema: mongoose.Schema = new mongoose.Schema(
  {
    _id: { type: String, default: uuidv4() },
    login: { type: String },
    password: { type: String }
  },
  { versionKey: false }
);

userSchema.statics.toResponse = user => {
  const { id, login } = user;
  return { id, login };
};

userSchema.pre('save', hash);

const userModel: mongoose.Model<IUser, {}> =  mongoose.model<IUser>('User', userSchema);
export default userModel;
