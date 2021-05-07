import {UserContext} from "~/components/usuarios/domain/Context/user-context";
import {injectable} from "inversify-props";


export interface UserLink {
  setNext(link: UserLink) : UserLink
  next(context: UserContext): void
}

@injectable()
export class EmptyUserLink implements UserLink {
  setNext () {
    return this
  }
  next (): void {}
}
