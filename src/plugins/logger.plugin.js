const winston = require('winston');


const logger = winston.createLogger({   

    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
      //
      // - Write to all logs with level `info` and below to `combined.log` 
      // - Write all logs error (and below) to `error.log`.
      //
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.File({ filename: 'combined.log' }),
      new winston.transports.Console()
    ],
  });


  module.exports = function buildLogger(service){
    return{
        log: (message) => {
            logger.log('info', {message,service });
        },
        error:(message) => {
            logger.log('error', {message,service });
        }
    }
}