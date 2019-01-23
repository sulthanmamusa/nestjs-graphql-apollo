import { Module } from '@nestjs/common';
import { UsersResolver } from './users/users.resolver';
@Module({
	imports: [],
	providers: [UsersResolver]
})
export class DatabaseModule {}