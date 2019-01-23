import { Query, Resolver} from '@nestjs/graphql';
@Resolver('Users')
export class UsersResolver {

	constructor(){}

	@Query('users')
	getRole(){
		return {
			id: 1,
			name: 'sulthan',
			age: 32
		};
	}

}