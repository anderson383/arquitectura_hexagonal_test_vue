import {User} from "~/components/usuarios/domain/user/user-model";
import {inject, injectable} from "inversify-props";
import {UserRepository} from "~/components/usuarios/domain/user/user-repository";
import { TYPES } from "~/core/domain/types";
import {GenericCommand} from "~/core/application/generic-commans-classes/generic-command";

@injectable()
export class UserCommandCreate extends GenericCommand {
  @inject(TYPES.USER_REPOSITORY) readonly repositoryService : UserRepository
  constructor () {
    super()
  }
}
