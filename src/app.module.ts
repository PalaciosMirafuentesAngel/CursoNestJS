import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskRepository } from './tasks/task.repository';
import { TasksService } from './tasks/tasks.service';
import { TasksController } from './tasks/tasks.controller';

@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'task-management',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
