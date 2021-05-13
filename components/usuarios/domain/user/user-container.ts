import {container} from "inversify-props";
import {UserHttps} from "~/components/usuarios/infrastructure/user-https";
import {TYPES} from "~/core/domain/types";
import {UserCommandCreate} from "~/components/usuarios/application/commands/user-command";

/* Container.bind recibe una clase que es de tipo de su misma interfaz que implementa */
export class UserContainer {

  public static get_actions_container () {
    container.bind(TYPES.CREATE_USER).to(UserCommandCreate).inSingletonScope()
    container.bind(TYPES.USER_REPOSITORY).to(UserHttps).inSingletonScope()
    return container
  }
}
