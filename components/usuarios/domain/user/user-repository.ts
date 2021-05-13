import {User} from "~/components/usuarios/domain/user/user-model";
import {ID} from "~/core/domain/uuid";

export interface UserRepository {
  list () : Promise<User[]>
  retrieve ( id: ID ): Promise<User>
  create ( user: User ): Promise<void>
  update (id: ID, user: User): Promise<void>
  delete (id: ID): Promise<void>
}
