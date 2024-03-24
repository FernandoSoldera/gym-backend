import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { UserDTO } from './UserDTO';

@Entity()
export class PhysicalEvaluationDTO {
  constructor(id: number, date: Date, user: UserDTO, weight: number, chest: number, abdominal: number, thigh: number, tricep: number, subscapular: number, suprailiac: number, midaxillary: number, arm: number, forearm: number, chestPerimeter: number, waist: number, hip: number, leg: number, calf: number) {
    this.id = id;
    this.date = date;
    this.user = user;
    this.weight = weight;
    this.chest = chest;
    this.abdominal = abdominal;
    this.thigh = thigh;
    this.tricep = tricep;
    this.subscapular = subscapular;
    this.suprailiac = suprailiac;
    this.midaxillary = midaxillary;
    this.arm = arm;
    this.forearm = forearm;
    this.chestPerimeter = chestPerimeter;
    this.waist = waist;
    this.hip = hip;
    this.leg = leg;
    this.calf = calf;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @ManyToOne(() => UserDTO, (user) => user.physicalEvaluations)
  user: UserDTO;

  @Column()
  weight: number;

  @Column()
  chest: number;

  @Column()
  abdominal: number;

  @Column()
  thigh: number;

  @Column()
  tricep: number;

  @Column()
  subscapular: number;

  @Column()
  suprailiac: number;

  @Column()
  midaxillary: number;

  @Column()
  arm: number;

  @Column()
  forearm: number;

  @Column()
  chestPerimeter: number;

  @Column()
  waist: number;

  @Column()
  hip: number;

  @Column()
  leg: number;

  @Column()
  calf: number;
}