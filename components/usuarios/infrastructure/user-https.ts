import {UserRepository} from "~/components/usuarios/domain/user/user-repository";
import {injectable} from "inversify-props";
import {ID} from "~/core/domain/uuid";
import {User} from "~/components/usuarios/domain/user/user-model";
import {$axios} from "~/utils/api";

@injectable()
export class UserHttps implements UserRepository  {

  endpoint = '/user'

  async list(): Promise<User[]> {
    return $axios.$get(this.endpoint)
  }

  async create(user: User): Promise<void> {
    await $axios.post(this.endpoint, user)
  }

  async retrieve(id: ID): Promise<User> {
    return $axios.$get(this.endpoint + '/' + id)
  }

  async update(id: ID, user: User): Promise<void> {
    await $axios.put(this.endpoint + '/' + id, user)
  }

  async delete(id: ID): Promise<void> {
    console.log('delete')
  }

}
