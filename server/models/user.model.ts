import { model, Schema } from 'mongoose';
import hash from '../helpers/hash';
import { v4 as uuidv4 } from 'uuid';
import { IUserDocument, IUserModelInterface } from './interfaces';

const userSchema: Schema = new Schema(
  {
    _id: { type: String, default: uuidv4() },
    login: { type: String },
    password: { type: String }
  },
  { versionKey: false }
);

function toResponse(user: IUserDocument): { login: string, id: string } {
  const { id, login } = user;
  return { id, login };
}

userSchema.statics.toResponse = toResponse;

userSchema.pre('save', hash);

const userModel: IUserModelInterface =  model<IUserDocument, IUserModelInterface>('User', userSchema);
export default userModel;
