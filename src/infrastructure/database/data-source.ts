import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { UserDTO } from './adapters/jpa/dto/UserDTO';
import { PhysicalEvaluationDTO } from './adapters/jpa/dto/PhysicalEvaluationDTO';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'admin',
  database: 'gym',
  synchronize: true,
  logging: true,
  entities: [UserDTO, PhysicalEvaluationDTO],
  subscribers: [],
  migrations: [],
});

AppDataSource.initialize()
  .then(() => {})
  .catch(error => console.log(error));
