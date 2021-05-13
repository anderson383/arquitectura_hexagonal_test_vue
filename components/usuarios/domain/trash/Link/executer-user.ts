import {UserBaseLink} from "./user-base-link";
import {UserContext} from "../Context/user-context";
import {injectable} from "inversify-props";


@injectable()
export class ExecuterUserLink extends UserBaseLink {
  next(context: UserContext) {
    context.result = context.useCase.internalExecute(context.param)
    this.nextLink.next(context)
  }
}
