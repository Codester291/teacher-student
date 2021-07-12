import { type } from 'os';
import { Student } from 'src/student/student.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinColumn } from 'typeorm';

@Entity()
export class Teacher {

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
  
    @ManyToOne(type => Student, student => student.teachers)
    student: Student

    // @ManyToMany(type => Student, student => student.teachers)
    // @JoinColumn()
    // students: Student[]
}