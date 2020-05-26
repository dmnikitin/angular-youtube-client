import * as mongoose from 'mongoose';
import app from './app';
import logger from './common/winston-config';
import config from './common/config';

const { PORT, MONGO_CONNECTION_STRING } = config;

(function (): void {
  mongoose.connect(MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  mongoose.connection.once('open', () => {
    console.log('mongoDB connection success');
    app.listen(PORT, () =>
      console.log(`App is running on http://localhost:${PORT}`)
    );
  });
  mongoose.connection.on('error', (err: Error) => {
    logger.error({ statusCode: 500, message: err.message });
    process.exit(1);
  });
})();

process.on('uncaughtException', (err: Error) => {
  logger.error({ statusCode: 500, message: err.message });
  process.exit(1);
});

process.on('unhandledRejection', (err: Error) => {
  logger.error({ statusCode: 500, message: err.message });
});
