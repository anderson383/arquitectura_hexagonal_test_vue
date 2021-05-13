import {injectable} from "inversify-props";

export interface  UserLogger {
  log(message: string): void
  group(label: string): void
  groupEnd(): void
  object<T>(object: T): void
  info(message: string): void
}


@injectable()
export class ConsoleUser implements  UserLogger {

  object<T>(objec: T): void {
    console.dir(objec)
  }

  groupEnd(): void {
    console.groupEnd()
  }

  info (message: string): void {
    console.info(message)
  }

  group(label: string): void {
    console.group(label)
  }

  log (message: string): void {
    console.log(message)
  }

}

