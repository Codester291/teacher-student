import { type } from 'os';
import { teachers } from 'src/db';
import { Teacher } from 'src/teacher/teacher.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinColumn, CreateDateColumn, UpdateDateColumn, JoinTable} from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @CreateDateColumn()
  createdDate: Date

  @UpdateDateColumn()
  updatedDate: Date

  // @ManyToOne(type => Teacher, teacher => teacher.students)
  // teacher: Teacher

  @ManyToMany(type => Teacher, teacher => teacher.students, {cascade: true})
  @JoinTable()
  teachers: Teacher[]
  
}