import * as mongoose from 'mongoose';
import hash from '../helpers/hash';
import { v4 as uuidv4 } from 'uuid';

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

const userModel: any =  mongoose.model('User', userSchema);
export default userModel;
