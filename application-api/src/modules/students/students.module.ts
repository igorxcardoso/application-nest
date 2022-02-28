import { UpdateStudentInput } from './dto/update-student.input';
import { CreateStudentInput } from './dto/create-student.input';
import { NestjsQueryGraphQLModule, PagingStrategies } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { StudentDTO } from './dto/student.dto';
import { Student } from './entities/student.entity';

@Module({
  imports: [
    // Configurações para nestjs-query (de onde buscar os dados)
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Student])],
      resolvers: [{
        DTOClass: StudentDTO,
        EntityClass: Student,
        CreateDTOClass: CreateStudentInput,
        UpdateDTOClass: UpdateStudentInput,
        enableTotalCount: true,
        pagingStrategy: PagingStrategies.OFFSET
      }],
    }),
  ],
  providers: []
})
export class StudentsModule {}
