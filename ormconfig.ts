import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import dotenv from 'dotenv';
import { ItemSet } from './src/entities/ItemSet';
import { User } from './src/entities/User';

dotenv.config();
const config: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [User, ItemSet],
  migrations: [__dirname + '/src/migrations/*.ts'],
  cli: { migrationsDir: 'src/migrations' },
  autoLoadEntities: true,
  charset: 'utf8mb4',
  synchronize: false, // 처음 1번만  true로 해서 싱크시켜서 DB에 테이블을 생성시키고 그 이후는 false주는것이 데이터유실을 방지할 수 있다.
  logging: true,
  keepConnectionAlive: true, // 핫리로딩 되도 DB연결 그대로 유지
};

export = config;
