import * as express from 'express';
import * as cors from 'cors';
import authRouter from './resources/auth/auth.router';
import authMiddleware from './middlewares/auth';
import loggerMiddleware from './middlewares/logger';
import errorMidlleware from './middlewares/error';
const app: express.Express = express();

app.use(express.json());
app.use(cors());
app.use(loggerMiddleware);
app.use(authMiddleware);
app.use('/', authRouter);
app.use(errorMidlleware);

export default app;
