import {Injectable} from '@nestjs/common';
import {CreateTodoDto} from './dto/create-todo.dto';
import {UpdateTodoDto} from './dto/update-todo.dto';
import {TodosModel} from "../../models/todos.model";
import {InjectModel} from "@nestjs/sequelize";
import {UsersModel} from "../../models/users.model";

@Injectable()
export class TodosService {
  constructor(
      @InjectModel(TodosModel)
      private todoModel: typeof TodosModel,
  ) {}

  create(createTodoDto: CreateTodoDto) {
      return this.todoModel.create({...createTodoDto});
  }

  findAll() {
    return this.todoModel.findAll({attributes: ['id', 'title', 'done'] });
  }

  findOne(id: number) {
    return this.todoModel.findByPk(id, {
        include: [{
            model: UsersModel,
            //required: false
        }]
    });
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return this.todoModel.update({...updateTodoDto}, {where: {id}});
    /*const todo =  this.todoModel.findByPk(id);
    return todo.then((todo) => {
        if (todo) {
            return todo.update({...updateTodoDto});
        }
        return null;
    });*/
  }

  remove(id: number) {
    return this.todoModel.destroy({where: {id}});
  }
}
