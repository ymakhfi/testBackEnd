import { UsersEntity } from './users.entity';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
export declare class UsersService extends TypeOrmCrudService<UsersEntity> {
    constructor(repo: any);
}
