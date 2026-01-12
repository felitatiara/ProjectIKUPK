import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Target {
  @PrimaryGeneratedColumn()
  id: number; 
  @Column()
  deadline: string;
  @Column()
  targetType: string;
  @Column()
  sasaran: string;    
  @Column('float')
  capaian: number;    
  @Column()
  action: string;    
} 

