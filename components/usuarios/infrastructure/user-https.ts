import {UserRepository} from "~/components/usuarios/domain/user/user-repository";
import {injectable} from "inversify-props";
import {GenericRequest} from "~/core/domain/generic-request-classes/generic-request";

@injectable()
export class UserHttps extends GenericRequest implements UserRepository {
  endpoint = '/user'
  constructor () {
    super();
  }
}
