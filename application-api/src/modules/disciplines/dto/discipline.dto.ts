import { FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { BaseDTO } from './../../bases/dto/base.dto';

// Dentro de ObjectType é possível definir o como será chamado na requisição do GraphQL
@ObjectType('Discipline')
export class DisciplineDTO extends BaseDTO {
  @FilterableField()
  name: string;
}
