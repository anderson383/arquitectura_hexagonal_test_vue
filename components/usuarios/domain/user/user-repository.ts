import {User} from "~/components/usuarios/domain/user/user-model";
import {ID} from "~/core/domain/uuid";

export interface UserRepository {
  list () : User[]
  retrieve ( id: ID ): User
  create ( user: User ): void
  update (id: ID, user: User): void
  delete (id: ID): void
}
