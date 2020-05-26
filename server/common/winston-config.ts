import * as winston from 'winston';
const { createLogger, format, transports } = winston;

const logger: winston.Logger = createLogger({
  format: format.prettyPrint(),
  transports: [
    new transports.Console(),
    new transports.File({
      filename: 'error.log',
      level: 'error'
    }),
    new transports.File({
      filename: 'info.log',
      level: 'info'
    })
  ]
});

export default logger;
