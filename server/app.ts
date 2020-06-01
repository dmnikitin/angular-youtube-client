import * as express from 'express';
import * as cors from 'cors';
import * as path from 'path';
import authRouter from './routes/router.routes';
import authMiddleware from './middlewares/auth';
import loggerMiddleware from './middlewares/logger';
import errorMidlleware from './middlewares/error';

const app: express.Express = express();
const dir: string = path.join(__dirname, '../dist/angular-youtube');

app.use(express.json());
app.use(express.static(dir));
app.use(cors());
app.use(loggerMiddleware);
app.use(authMiddleware);
app.use('/', authRouter);
app.use(errorMidlleware);

export default app;
