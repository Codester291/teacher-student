import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from 'src/student/student.entity';
import { Repository } from 'typeorm';
import { CreateTeacherDto } from './dto/teacher.dto';
import { Teacher } from './teacher.entity';

@Injectable()
export class TeacherService {

    constructor (
        @InjectRepository(Teacher)
        private teacherRepository: Repository<Teacher>,

        @InjectRepository(Student)
        private studentRepository: Repository<Student>
    ) {}

    async getTeachers(): Promise<Teacher[]> {
        return await this.teacherRepository.find({
            relations: ['student']
        });
    }

    async getTeacherProfile(teacherId: string): Promise<Teacher> {
        return await this.teacherRepository.findOne(teacherId, {relations: ['student']})
    }

    async createTeacher(payload: CreateTeacherDto): Promise<Teacher> {
        return await this.teacherRepository.save(payload)
    }

    async updateTeacher(teacherId: number, payload: CreateTeacherDto): Promise<Teacher>{
        const teacher = await this.teacherRepository.findOne({where: {id: teacherId}})
        const teacherToBeUpdated = await this.teacherRepository.create({...teacher, ...payload})
        return this.teacherRepository.save(teacherToBeUpdated)
    }

    async addStudentToTeacher(teacherFirstName: string, studentName: string) : Promise<Teacher>{
        const student = await this.studentRepository.findOne({where: {firstName: studentName}})
        const teacher = await this.teacherRepository.findOne({where: {firstName: teacherFirstName}})
        const teacherToBeUpdated = this.teacherRepository.create({...teacher, student: student})
        await this.teacherRepository.save(teacherToBeUpdated)
        return teacherToBeUpdated
    }

    async fetchTeacherByStudent(studentName: string) : Promise<Teacher>{
        const student = await this.studentRepository.findOne({where: {firstName: studentName}})
        const teacher = await this.teacherRepository.findOne({student: student}, {relations: ['student']})
        return teacher
    }
}
