import * as bcrypt from 'bcrypt';
import { sign } from 'jsonwebtoken';
import config from '../../common/config';
import userModel from '../../models/user.model';

const { JWT_SECRET_KEY } = config;
// await
const createToken = async (login, id) => await sign({ login, id }, JWT_SECRET_KEY, { expiresIn: '24h' });
const checkRegistration = async login => await userModel.findOne({ login });
const createNewUser = async data => await userModel.create(data);
const checkPassword = async (provided, original) => await bcrypt.compare(provided, original);

export { createToken, checkRegistration, checkPassword, createNewUser };
