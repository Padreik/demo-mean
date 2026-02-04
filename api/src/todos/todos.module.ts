import { Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import {TodosModel} from "../../models/todos.model";
import {SequelizeModule} from "@nestjs/sequelize";

@Module({
  controllers: [TodosController],
  providers: [TodosService],
  imports: [SequelizeModule.forFeature([TodosModel])],
})
export class TodosModule {}
