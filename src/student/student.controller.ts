import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common'
import { CreateStudentDto, UpdateStudentDto, FindStudentResponseDto, StudentResponseDto } from './dto/student.dto'
import { Student } from './student.entity'
import { StudentService } from './student.service'

@Controller('students')
export class StudentController {

    constructor(private readonly studentService: StudentService) {
    }
    @Get()
    getStudents(): Promise<Student[]> {
        return this.studentService.getStudents()
    }

    @Get("/:studentId")
    getStudentProfile(
        @Param("studentId") studentId: string
    ) : Promise<Student> {
        return this.studentService.getStudentProfile(studentId)
    }

    @Post()
    createStudent(
        @Body() student: CreateStudentDto
    ): Promise<Student>{
        return this.studentService.createStudent(student)
    }

    // @Put("/:studentId")
    // updateStudent(
    //     @Param("studentId") studentId: string,
    //     @Body() student: UpdateStudentDto
    // ) : StudentResponseDto{
    //     return this.studentService.updateStudent(student, studentId)
    // }
}