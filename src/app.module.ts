import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';
import { typeOrmConfig, typeOrmMysqlConfig } from './config/typeorm.config';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmMysqlConfig),
    TasksModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
