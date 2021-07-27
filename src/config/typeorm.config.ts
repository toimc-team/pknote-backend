import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as config from 'config';
import * as path from 'path';

export const resolve = (dir) =>
  path.join(path.resolve(__dirname, '../../'), dir);

const dbConfig = config.get('db');

console.log(`dbConfig.synchronize: ${dbConfig.synchronize}`);
console.log(`dbConfig.host: ${process.env.DB_HOST || dbConfig.host}`);
console.log(`dbConfig.host: ${process.env.DB_PORT || dbConfig.port}`);
console.log(`sync: ${process.env.TYPEORM_SYNC || dbConfig.synchronize}`);

const entities = resolve('dist') + '/**/*.entity{.ts,.js}';
const srcPath = resolve('dist') + '/entity/*.{.ts,.js}';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: dbConfig.type,
  host: process.env.DB_HOST || dbConfig.host,
  port: process.env.DB_PORT || dbConfig.port,
  username: process.env.DB_USERNAME || dbConfig.username,
  password: process.env.DB_PASSWORD || dbConfig.password,
  database: process.env.DB_NAME || dbConfig.database,
  entities: [entities, srcPath],
  synchronize: process.env.TYPEORM_SYNC || dbConfig.synchronize,
  logging: ['error'],
  autoLoadEntities: true,
};
