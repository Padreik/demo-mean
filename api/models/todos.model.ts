import {
    AllowNull,
    AutoIncrement, BelongsTo,
    Column,
    CreatedAt,
    DataType, Default, DeletedAt, HasOne,
    Model,
    PrimaryKey,
    Table,
    Unique, UpdatedAt
} from "sequelize-typescript";
import {UsersModel} from "./users.model";

@Table({ tableName: "todos" })
export class TodosModel extends Model {
    @AutoIncrement
    @PrimaryKey
    @Column({ type: DataType.INTEGER })
    declare id: number;

    @AllowNull(false)
    @Column({ type: DataType.STRING })
    title: string;

    @AllowNull(false)
    @Column({ type: DataType.BOOLEAN, defaultValue: false })
    done: boolean;

    /*@BelongsTo(() => UsersModel)
    user: UsersModel;*/

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













