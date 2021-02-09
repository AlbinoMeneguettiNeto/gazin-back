/* eslint-disable camelcase */
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

type GenderType = 'M' | 'F';

@Entity()
export default class Developers extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({ type: 'varchar' })
  gender!: GenderType;

  @Column({ type: 'int' })
  age!: number;

  @Column()
  hobby!: string;

  @Column()
  birthday!: Date;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
