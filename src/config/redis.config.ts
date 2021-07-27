import { RedisModuleOptions } from '@liaoliaots/nestjs-redis';

import * as config from 'config';
import { Logger } from '@nestjs/common';

const rsConfig = config.get('redis');
const logger = new Logger('redis');

export const redisConfig: RedisModuleOptions = {
  config: {
    namespace: 'main',
    host: process.env.REDIS_HOST || rsConfig.host,
    port: parseInt(process.env.REDIS_PORT) || rsConfig.port,
    password: process.env.REDIS_PASSWORD || rsConfig.password,
    // db: parseInt(process.env.REDIS_DB) || rsConfig.db,
    // keyPrefix: process.env.REDIS_PRIFIX || rsConfig.prefix,
    reconnectOnError: (err) => {
      logger.error(`Redis Connection error: ${err}`);
      return true;
    },
  },
};
