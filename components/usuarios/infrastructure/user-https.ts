import {UserRepository} from "~/components/usuarios/domain/user/user-repository";
import {injectable} from "inversify-props";
import {ID} from "~/core/domain/uuid";
import {User} from "~/components/usuarios/domain/user/user-model";

@injectable()
export class UserHttps implements UserRepository {

  list(): User[] {
    console.log('list :v')
    return [];
  }

  create(user: User): void {
    console.log('create')
  }

  retrieve(id: ID): User {
    console.log('retrieve')
    return {} as User;
  }

  update(id: ID, user: User): void {
      console.log('update')
  }

  delete(id: ID): void {
    console.log('delete')
  }

}
