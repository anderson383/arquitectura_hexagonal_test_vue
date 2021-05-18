import {ID} from "~/core/domain/uuid";

export interface IRequetsRepository {
  list () : Promise<any[]>
  retrieve ( id: ID ): Promise<any>
  create ( data: any ): Promise<void>
  update (id: ID, data: any): Promise<void>
  delete (id: ID): Promise<void>
}
