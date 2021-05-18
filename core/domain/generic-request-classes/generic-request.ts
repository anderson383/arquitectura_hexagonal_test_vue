import {$axios} from "~/utils/api";
import {ID} from "~/core/domain/uuid";
import {IRequetsRepository} from "~/core/domain/repositories/requets-repository";
import {AxiosRequest} from "~/core/infrastructure/request-axios";

export class GenericRequest implements IRequetsRepository  {
  endpoint = ''
  private axiosInstance = new AxiosRequest()

  get getAxiosInstance () {
    return this.axiosInstance
  }

  /**
   * Regular description
   *
   * @category Category Name
   */
  public async list(): Promise<any[]> {
    return await this.axiosInstance.get(this.endpoint)
  }

  public async create(data: any): Promise<void> {
    await this.axiosInstance.post(this.endpoint, data)
  }

  public async retrieve(id: ID): Promise<any> {
    return  await this.axiosInstance.get(this.endpoint + '/' + id)
  }

  public async update(id: ID, data: any): Promise<void> {
    await this.axiosInstance.put(this.endpoint + '/' + id, data)
  }

  public async delete(id: ID): Promise<void> {
    console.log('delete')
  }

}
