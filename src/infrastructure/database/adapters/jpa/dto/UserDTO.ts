import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { PhysicalEvaluationDTO } from './PhysicalEvaluationDTO';

@Entity()
export class UserDTO {
  constructor(id: number, name: string, email: string, role: string, gender: string, birthday: Date, password: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.role = role;
    this.gender = gender;
    this.birthday = birthday;
    this.password = password;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  role: string;

  @Column()
  gender: string;

  @Column()
  birthday: Date;

  @Column()
  password: string;

  @OneToMany(() => PhysicalEvaluationDTO, (physicalEvaluation) => physicalEvaluation.user)
  physicalEvaluations: PhysicalEvaluationDTO[] | undefined;
}
