import {ID} from "~/core/domain/uuid";
import {IRequetsRepository} from "~/core/domain/repositories/requets-repository";
import { Logger, LoggerManager } from "typescript-logger";


export class GenericCommand {

  public readonly repositoryService : IRequetsRepository
  public _model:any = null

  /**
   * Obtener genericamente un listado de un modulo cualquiera.
   *
   * @returns Un array o un objecto dependiendo del endpoint.
   * */
  async list () {
    return await this.repositoryService.list()
  }

  async create (data:any) {
    await this.repositoryService.create(data)
  }

  async retrieve (id: ID) {
    return await this.repositoryService.retrieve(id)
  }

  async update (id: ID, data: any) {
    await this.repositoryService.update(id, data)
  }
}
