import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';
import { typeOrmConfig, typeOrmMysqlConfig } from './config/typeorm.config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmMysqlConfig),
    TasksModule,
    AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
