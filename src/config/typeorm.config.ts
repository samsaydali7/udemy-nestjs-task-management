import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'root',
  database: 'taskmanagment',
  entities: [__dirname + '/../**/*.entity.js'],
  synchronize: true,
};

export const typeOrmMysqlConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'taskmanagment',
  entities: [__dirname + '/../**/*.entity.js'],
  synchronize: true,
};
