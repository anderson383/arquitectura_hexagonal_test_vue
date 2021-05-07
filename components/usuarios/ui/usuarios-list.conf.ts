import { Vue, Component, Prop } from 'vue-property-decorator'
import {injectable, inject} from "inversify-props";
import {TYPES} from "~/core/domain/types";
import {UserRepository} from "~/components/usuarios/domain/user/user-repository";
import {UserCommandCreate} from "~/components/usuarios/application/commands/user-command";


@Component
@injectable()
export default class UsuariosListConf extends Vue {
  @inject(TYPES.CREATE_USER) userService : UserCommandCreate
  formData: any = {}
  submitForm () {
    this.userService.execute(this.formData)
  }
}
