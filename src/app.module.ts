import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { DatabaseModule } from './database/database.module';

@Module({
	imports: [
		GraphQLModule.forRoot({
		  typePaths: ['./**/**/*.graphql'],
		  context: ({req}) => ({req})
		}),
		DatabaseModule
	],
})
export class AppModule {}