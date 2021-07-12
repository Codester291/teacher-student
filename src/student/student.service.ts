import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/student.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './student.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StudentService {
    constructor(
        @InjectRepository(Student)
        private studentRepository: Repository<Student>,
        ) {}

    getStudents() : Promise<Student[]> {
        return this.studentRepository.find({relations: ['teachers']})
    }

    getStudentProfile(studentId: string): Promise<Student> {
       return this.studentRepository.findOne(studentId, {relations: ['teachers']})
    }

    createStudent(payload: CreateStudentDto): Promise<Student>  {
        return this.studentRepository.save(payload)
    }

}
