import {User} from "~/components/usuarios/domain/user/user-model";
import {inject, injectable} from "inversify-props";
import {UserRepository} from "~/components/usuarios/domain/user/user-repository";
import { TYPES } from "~/core/domain/types";
import {Command} from "~/core/domain/Command";

@injectable()
export class UserCommandCreate extends Command {

  @inject(TYPES.USER_REPOSITORY) private readonly userRepository : UserRepository


  constructor () {
    super()
  }
  internalExecute (data: User) {
    this.userRepository.create(data)
  }
}
