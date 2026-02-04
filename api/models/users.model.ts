import {
    AllowNull,
    AutoIncrement,
    Column,
    CreatedAt,
    DataType, DeletedAt, HasMany,
    Model,
    PrimaryKey,
    Table,
    Unique, UpdatedAt
} from "sequelize-typescript";
import {TodosModel} from "./todos.model";

@Table({ tableName: "users" })
export class UsersModel extends Model {
    @AutoIncrement
    @PrimaryKey
    @Column({ type: DataType.INTEGER })
    declare id: number;

    @AllowNull(false)
    @Unique
    @Column
    username: string;

    @AllowNull(false)
    @Column
    password: string;

    /*@HasMany(() => TodosModel)
    todos: TodosModel[];*/

    @CreatedAt
    @Column({ field: "created_at" })
    createdAt?: Date;

    @UpdatedAt
    @Column({ field: "updated_at" })
    updatedAt?: Date;

    @DeletedAt
    @Column({ field: "deleted_at" })
    deletedAt?: Date;
}













