import {UserBaseLink} from "./user-base-link";
import {inject, injectable} from "inversify-props";
import {TYPES} from "../../../../../core/domain/types";
import {UserLogger} from "../Console/console-user";
import {UserContext} from "../Context/user-context";


@injectable()
export class UserLoggerLink extends UserBaseLink {
  @inject(TYPES.LOGGER) private readonly logger: UserLogger

  constructor() {
    super()
  }
  next(context: UserContext): void {
    this.logger.group(context.useCase.constructor.name)
    this.logger.group('PARAMETERS')
    /*for (let item in context.param) this.logger.log(`${item} - ${context.param[item] ?? '-'}`)*/
    this.logger.groupEnd()
    this.logger.group('Result')
    this.logger.object(context.result ?? '-')
    this.logger.groupEnd()
    this.logger.groupEnd()
    this.nextLink.next(context)
  }
}
