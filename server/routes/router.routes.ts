import { Router } from 'express';
import * as fetch from 'node-fetch';
import { createToken, checkRegistration, checkPassword, createNewUser } from './router.services';
import catchErrorsDecorator from '../helpers/error-decorator';
import ExtendedError from '../helpers/error-extended';
import userModel from '../models/user.model';
import { IUserDocument } from '../models/interfaces';
import config from '../common/config';

const router: Router = Router();
const { API_KEY } = config;

// tslint:disable: no-inferrable-types

router.route('/login').post(
  catchErrorsDecorator(async (req, res) => {
    const { login, password } = req.body;
    const isRegistered: IUserDocument = await checkRegistration(login);
    if (!isRegistered) {
      throw new ExtendedError(403, 'Access forbidden');
    }
    const isPasswordValid: boolean = await checkPassword( password, isRegistered.password);
    if (!isPasswordValid) {
      throw new ExtendedError(403, 'Access forbidden');
    }
    const token: string = await createToken(login, isRegistered._id);
    res.header('Authorization', `Bearer ${token}`).send({ token });
  })
);

router.route('/signup').post(
  catchErrorsDecorator(async (req, res) => {
    const { login } = req.body;
    const isRegistered: IUserDocument = await checkRegistration(login);
    if (isRegistered) {
      throw new ExtendedError(403, 'User already exists');
    }
    const user: IUserDocument = await createNewUser(req.body);
    if (!user) {
      throw new ExtendedError(400, 'Bad request');
    }
    res.json(userModel.toResponse(user));
  })
);

router.route(['/search', '/videos']).get(
  catchErrorsDecorator(async (req, res) => {
    const originalUrl: string = `https://www.googleapis.com/youtube/v3${req.originalUrl}&key=${API_KEY}`;
    const response: Response = await fetch(originalUrl);
    const data: Response = await response.json();
    res.json(data);
  })
);

router.route('/token').post(
  catchErrorsDecorator(async (req, res) => {
    const id: string = Math.random().toString();
    const token: string = await createToken(req.body.login, id);
    res.header('Authorization', `Bearer ${token}`).send({ token });
  })
);

router.route('/auth').get((req, res) => res.send(req.body.decoded));

export default router;
