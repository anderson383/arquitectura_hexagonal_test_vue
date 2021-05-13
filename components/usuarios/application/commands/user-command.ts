import {User} from "~/components/usuarios/domain/user/user-model";
import {inject, injectable} from "inversify-props";
import {UserRepository} from "~/components/usuarios/domain/user/user-repository";
import { TYPES } from "~/core/domain/types";
import {ID} from "~/core/domain/uuid";

@injectable()
export class UserCommandCreate {

  @inject(TYPES.USER_REPOSITORY) private readonly userRepository : UserRepository

  list () {
    return this.userRepository.list()
  }

  async create (data: User) {
    await this.userRepository.create(data)
  }

  async retrieve (id: ID) {
    return await this.userRepository.retrieve(id)
  }

  async update (id: ID, data: User) {
    await this.userRepository.update(id, data)
  }
}
