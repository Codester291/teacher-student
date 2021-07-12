import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from 'src/student/student.entity';
import { TeacherController } from './teacher.controller';
import { Teacher } from './teacher.entity';
import { TeacherService } from './teacher.service';

@Module({
    imports: [TypeOrmModule.forFeature([Teacher, Student])],
    exports: [TypeOrmModule],
    providers: [TeacherService],
    controllers: [TeacherController],
})
export class TeacherModule {}
