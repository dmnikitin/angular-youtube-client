import { Router } from 'express';
const router: Router = Router();
import { createToken, checkRegistration, checkPassword, createNewUser } from './auth.service';
import catchErrorsDecorator from '../../helpers/error-decorator';
import ExtendedError from '../../helpers/error-extended';
import userModel from '../../models/user.model';

router.route('/login').post(
  catchErrorsDecorator(async (req, res) => {
    const { login, password } = req.body;
    const isRegistered: any = await checkRegistration(login);
    if (!isRegistered) {
      throw new ExtendedError(403, 'Access forbidden');
    }
    const isPasswordValid = await checkPassword( password, isRegistered.password);
    if (!isPasswordValid) {
      throw new ExtendedError(403, 'Access forbidden');
    }
    const token = await createToken(login, isRegistered._id);
    res.header('Authorization', `Bearer ${token}`).send({ token });
  })
);

router.route('/signup').post(
  catchErrorsDecorator(async (req, res) => {
    const { login } = req.body;
    const isRegistered: any = await checkRegistration(login);
    if (isRegistered) {
      throw new ExtendedError(403, 'User already exists');
    }
    const user: any = await createNewUser(req.body);
    if (!user) {
      throw new ExtendedError(400, 'Bad request');
    }
    res.json(userModel.toResponse(user));
  })
);

export default router;
