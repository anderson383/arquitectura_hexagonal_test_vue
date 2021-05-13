import {container} from "inversify-props";
import {TYPES} from "~/core/domain/types";
import {RunnerUser} from "~/components/usuarios/domain/trash/Runner/runner";


export abstract class UseCase<Result = void, Param = void> {
  abstract readonly: boolean
  abstract internalExecute(param: Param): Result

  execute(param: Param): Result {
    return container.get<RunnerUser>(TYPES.RUNNER).run(this, param) as Result
  }
}
