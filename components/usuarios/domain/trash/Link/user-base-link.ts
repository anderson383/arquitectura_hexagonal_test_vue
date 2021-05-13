import {EmptyUserLink, UserLink} from "~/components/usuarios/domain/trash/Link/user-link";
import {UserContext} from "~/components/usuarios/domain/trash/Context/user-context";




export abstract class UserBaseLink {
  nextLink: UserLink = new EmptyUserLink()

  setNext (link: UserLink): UserLink {
    this.nextLink = link
    return this
  }

  abstract next(context: UserContext): void
}
