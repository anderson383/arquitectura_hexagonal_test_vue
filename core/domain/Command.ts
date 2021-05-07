import {UseCase} from "~/core/domain/UseCase";


export abstract class Command<Param = void> extends UseCase<void, Param> {
  readonly = false
}
