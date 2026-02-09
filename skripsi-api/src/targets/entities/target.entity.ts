import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TargetEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}