import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskRepository } from './task.repository';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
  constructor(@InjectRepository(TaskRepository)
              private taskRepository: TaskRepository,
  ) {}
  // public getAllTasks(): Task[] {
  //   return this.tasks;
  // }
  // public getTasksWithFilter(filterDto: GetTasksFilterDto): Task[] {
  //   const {status, search} = filterDto;
  //   let tasks: Task[] = this.getAllTasks();
  //   if (status) {
  //     tasks = tasks.filter(task =>
  //       task.status === status);
  //   }
  //   if (search) {
  //     tasks = tasks.filter(task =>
  //       task.title.includes(search) ||
  //       task.description.includes(search));
  //   }
  //   return tasks;
  // }
  public async getTaskById(id: number): Promise<Task> {
    const found = await this.taskRepository.findOne(id);
    if (!found) {
      throw new NotFoundException(`Task with id: ${id} not found`);
    }
    return found;
  }
  // public getTaskById(id: string) {
  //   const found = this.tasks.find(task => task.id === id);
  //   if (!found) {
  //     throw new NotFoundException(`Task with id: ${id} not found`);
  //   }
  //   return found;
  // }
  // public createTask(createTaskDto: CreateTaskDto): Task {
  //   const {title, description} = createTaskDto;
  //   const task: Task = {
  //     id: uuid(),
  //     title,
  //     description,
  //     status: TaskStatus.OPEN,
  //   };
  //   this.tasks.push(task);
  //   return task;
  // }
  // public updateTaskStatus(id: string, staus: TaskStatus): Task {
  //   const task = this.getTaskById(id);
  //   task.status = staus;
  //   return task;
  // }
  // public deleteTask(id: string): void {
  //   const found = this.getTaskById(id);
  //   this.tasks = this.tasks.filter(task => task.id !== found.id);
  // }
}
