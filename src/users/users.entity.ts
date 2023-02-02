import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import * as crypto from 'crypto';
@Entity('users')
export class UsersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;
  @Column()
  last_name: string;
  @Column()
  avatar: string;
}
