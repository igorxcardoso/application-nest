import { FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { BaseDTO } from './../../bases/dto/base.dto';

@ObjectType()
export class DisciplineDTO extends BaseDTO {
  @FilterableField()
  name: string;
}
