import gql from "graphql-tag";
import {injectable} from "inversify-props";
import {$axios} from "~/utils/api";


let query = gql`
  query {
    allUsers {
      id
      nombre
      correo
      edad
      apellido
    }
  }
`

@injectable()
export class UserGrapql {
  private client: object = window.$nuxt.$apollo.getClient()
  private apolloInstance:object = window.$nuxt.$apollo
  public async list(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this.apolloInstance.query({query}).then(({ data }) => {
        resolve(data.allUsers)
      }).catch((error)  => {
        reject(error)
      })
    })
  }
}
