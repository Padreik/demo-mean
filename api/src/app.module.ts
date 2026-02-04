import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';
import {SequelizeModule} from "@nestjs/sequelize";
import * as process from "node:process";

@Module({
  imports: [
      TodosModule,
      SequelizeModule.forRoot({
          dialect: 'postgres',
          host: process.env.DB_HOST || 'localhost',
          port: Number(process.env.DB_PORT) || 5432,
          username: process.env.DB_USERNAME || 'postgres',
          password: process.env.DB_PASSWORD || undefined,
          database: process.env.DB_NAME || 'philippe',
          autoLoadModels: true,
          repositoryMode: true,
          define: {
              timestamps: true,
              underscored: true,
              paranoid: true,
              updatedAt: "updated_at",
              createdAt: "created_at",
              deletedAt: "deleted_at"
          }
      })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
