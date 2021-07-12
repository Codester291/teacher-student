import { Module } from '@nestjs/common';
import { Student } from './student.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { Teacher } from 'src/teacher/teacher.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Student, Teacher])],
    exports: [TypeOrmModule],
    providers: [StudentService],
    controllers: [StudentController]
})
export class StudentModule {}
