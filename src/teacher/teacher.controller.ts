import { Controller, Get, Put, Param, Body, Post } from "@nestjs/common";
import { CreateTeacherDto, FindTeacherResponseDto } from "./dto/teacher.dto";
import { TeacherService } from "./teacher.service";
import { Teacher } from "./teacher.entity";

@Controller('teachers')
export class TeacherController {

    constructor(private readonly teacherService: TeacherService) {}
    
    @Get()
    getTeachers() : Promise<Teacher[]> {
        return this.teacherService.getTeachers()
    }

    @Get("/:teacherId") 
    getTeacherProfile(@Param('teacherId') teacherId: string) : Promise<Teacher> {
        return this.teacherService.getTeacherProfile(teacherId)
    }

    @Post()
    createTeacher(@Body() teacher: CreateTeacherDto) : Promise<Teacher>{
        return this.teacherService.createTeacher(teacher);
    }

    @Put("/:id")
    updateTeacher(
        @Param() id: number,
        @Body() payload: CreateTeacherDto
    ): Promise<Teacher> {
        return this.teacherService.updateTeacher(id, payload)
    }

    @Post("/:teacherFirstName/add/:studentName")
    addStudent(
        @Param('studentName') studentName: string, 
        @Param('teacherFirstName') teacherFirstName: string
    ) : Promise<Teacher> {
        return this.teacherService.addStudentToTeacher(teacherFirstName, studentName)
    }

    @Get("/fetchTeacherStudent/:studentName")
    fetchTeacherByStudent(
        @Param('studentName') studentName: string
    ): Promise<Teacher> {
        return this.teacherService.fetchTeacherByStudent(studentName)
    }
    
}
