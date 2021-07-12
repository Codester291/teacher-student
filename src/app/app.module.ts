import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentController } from 'src/student/student.controller'
import { Student } from 'src/student/student.entity';
import { StudentModule } from 'src/student/student.module';
import { StudentService } from 'src/student/student.service';
import { TeacherController } from 'src/teacher/teacher.controller';
import { Teacher } from 'src/teacher/teacher.entity';
import { TeacherModule } from 'src/teacher/teacher.module';
import { TeacherService } from 'src/teacher/teacher.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'tolani_doye',
      database: 'test',
      entities: [Student, Teacher],
      synchronize: true,
    }),
    StudentModule,
    TeacherModule
  ],
  controllers: [
    StudentController,
    TeacherController
  ],
  providers: [
    StudentService,
    TeacherService
  ]
})
export class AppModule {}
