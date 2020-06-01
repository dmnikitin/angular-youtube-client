import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({
  path: path.join(__dirname, '../.env')
});

interface IConfig {
  PORT: string;
  MONGO_CONNECTION_STRING: string;
  JWT_SECRET_KEY: string;
  API_KEY: string;
}

const config: IConfig = {
  PORT: process.env.PORT,
  MONGO_CONNECTION_STRING: process.env.MONGO_CONNECTION_STRING,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
  API_KEY: process.env.API_KEY,
};

export default config;
