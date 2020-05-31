import { Router } from 'express';
import { createToken, checkRegistration, checkPassword, createNewUser } from './router.services';
import catchErrorsDecorator from '../helpers/error-decorator';
import ExtendedError from '../helpers/error-extended';
import userModel from '../models/user.model';
import { IUser } from '../models/interfaces';
const router: Router = Router();

router.route('/login').post(
  catchErrorsDecorator(async (req, res) => {
    const { login, password } = req.body;
    const isRegistered: IUser = await checkRegistration(login);
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
    const isRegistered: IUser = await checkRegistration(login);
    if (isRegistered) {
      throw new ExtendedError(403, 'User already exists');
    }
    const user: IUser = await createNewUser(req.body);
    if (!user) {
      throw new ExtendedError(400, 'Bad request');
    }
    res.json(userModel.toResponse(user));
  })
);

router.route('/auth').get((req, res) => res.send(req.body.decoded));

export default router;
