import { type } from 'os';
import { Student } from 'src/student/student.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

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
  
    // @OneToMany(type => Student, student => student.teacher )
    // students: Student[]

    @ManyToMany(type => Student, student => student.teachers)
    @JoinColumn()
    students: Student[]
}