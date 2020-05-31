import * as bcrypt from 'bcrypt';
import { sign } from 'jsonwebtoken';
import config from '../common/config';
import userModel from '../models/user.model';
import { createTokenFn, checkRegistrationFn, createUserFn, checkPasswordFn } from '../models/types';

const { JWT_SECRET_KEY } = config;

const createToken: createTokenFn = async (login, id) =>
  await sign({ login, id }, JWT_SECRET_KEY, { expiresIn: '24h' });
const checkRegistration: checkRegistrationFn = async login => await userModel.findOne({ login });
const createNewUser: createUserFn = async data => await userModel.create(data);
const checkPassword: checkPasswordFn = async (provided, original) =>
  await bcrypt.compare(provided, original);

export { createToken, checkRegistration, checkPassword, createNewUser };
