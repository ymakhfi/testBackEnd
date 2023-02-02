import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UsersEntity } from './users.entity';
import { UsersDTO } from './users.dto';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

@Injectable()
export class UsersService extends TypeOrmCrudService<UsersEntity> {
  constructor(@InjectRepository(UsersEntity) repo) {
    super(repo);
  }
}
