import { Module } from '@nestjs/common';
import { Discipline } from './entities/discipline.entity';
import { DisciplineDTO } from './dto/discipline.dto';
import { CreateDisciplineInput } from './dto/create-discipline.input';
import { UpdateDisciplineInput } from './dto/update-discipline.input';
import { NestjsQueryGraphQLModule, PagingStrategies } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';

@Module({
  imports: [
    // Configurações para nestjs-query (de onde buscar os dados)
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Discipline])],
      resolvers: [{
        DTOClass: DisciplineDTO,
        EntityClass: Discipline,
        CreateDTOClass: CreateDisciplineInput,
        UpdateDTOClass: UpdateDisciplineInput,
        enableTotalCount: true,
        pagingStrategy: PagingStrategies.OFFSET
      }],
    }),
  ],
  providers: []
})
export class DisciplinesModule {}
