export class FindStudentResponseDto {
    id: string
    name: string
    teacher: string
}

export class StudentResponseDto {
    id: string
    name: string
    teacher: string
}

export class CreateStudentDto {
  firstName: string;
  lastName: string;
}

export class UpdateStudentDto {
    name: string
    teacher: string
}