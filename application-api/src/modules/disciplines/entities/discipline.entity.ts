import { BaseEntity } from './../../bases/entities/base.entity';
import { Entity, Column } from 'typeorm';

@Entity()
export class Discipline extends BaseEntity {
  @Column()
  name: string;
}
