import {UseCase} from "~/core/domain/UseCase";
import {inject, injectable} from "inversify-props";
import {ExecuterUserLink} from "../Link/executer-user";
import {TYPES} from "../../../../core/domain/types";
import {UserLogger} from "../Console/console-user";
import {UserLoggerLink} from "../Link/user-logger-link";


@injectable()
export class RunnerUser {
  chain = this.executerLink.setNext(this.loggerLink)
  constructor(
    @inject(TYPES.EXECUTER_LINK) private readonly executerLink: ExecuterUserLink,
    @inject(TYPES.LOGGER_LINK) private readonly loggerLink: UserLoggerLink
  ) {

  }


  

  run(useCase: UseCase<unknown, unknown>, param: unknown) : unknown {
    const context = { useCase, result: undefined, param }
    this.chain.next(context)
    return context.result
  }
}

