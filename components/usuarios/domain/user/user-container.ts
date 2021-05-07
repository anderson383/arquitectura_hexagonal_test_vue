import {container} from "inversify-props";
import {UserRepository} from "~/components/usuarios/domain/user/user-repository";
import {User} from './user-model'
import {UserHttps} from "~/components/usuarios/infrastructure/user-https";
import {TYPES} from "~/core/domain/types";
import {UserCommandCreate} from "~/components/usuarios/application/commands/user-command";
import {ExecuterUserLink} from "../Link/executer-user";
import {ConsoleUser} from "../Console/console-user";
import {RunnerUser} from "~/components/usuarios/domain/Runner/runner";
import {UserLoggerLink} from "~/components/usuarios/domain/Link/user-logger-link";
export class UserContainer {

  public static get_actions_container () {
    container.bind(TYPES.CREATE_USER).to(UserCommandCreate).inSingletonScope()
    /* Container.bind recibe una clase que es de tipo de su misma interfaz que implementa */
    container.bind(TYPES.USER_REPOSITORY).to(UserHttps).inSingletonScope()
    container.bind(TYPES.EXECUTER_LINK).to(ExecuterUserLink).inSingletonScope()
    container.bind(TYPES.LOGGER).to(ConsoleUser).inSingletonScope()
    container.bind(TYPES.RUNNER).to(RunnerUser).inSingletonScope()
    container.bind(TYPES.LOGGER_LINK).to(UserLoggerLink).inSingletonScope()
    return container
  }
}
