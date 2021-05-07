import {UseCase} from "~/core/domain/UseCase";


export interface UserContext {
  result: unknown
  param: unknown
  useCase: UseCase<unknown, unknown>
}
