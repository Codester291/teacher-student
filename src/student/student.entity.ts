import { type } from 'os';
import { Teacher } from 'src/teacher/teacher.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinColumn } from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @OneToMany(type => Teacher, teacher => teacher.student )
  teachers: Teacher[]

  // @ManyToMany(type => Teacher, teacher => teacher.students)
  // @JoinColumn()
  // teachers: Teacher[]
  
}