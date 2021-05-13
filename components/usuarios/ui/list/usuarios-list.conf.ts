import { Vue, Component, Ref } from 'vue-property-decorator'
import {injectable, inject} from "inversify-props";
import {TYPES} from "~/core/domain/types";
import {UserCommandCreate} from "~/components/usuarios/application/commands/user-command";
import {User} from "~/components/usuarios/domain/user/user-model";



@Component
@injectable()
export default class UsuariosListConf extends Vue {

  @inject(TYPES.CREATE_USER) userService : UserCommandCreate

  formData: any = {}
  listUser: User[] = []

  actions: any[] = [
    { title: 'Editar', action: 'edit' },
    { title: 'Eliminar', action: 'delete' }
  ]

  created() {
    this.getUsers()
  }

  getAction (action: string, id: number) {
    if (action == 'edit') this.$refs.createuser.retrieve(id)
  }

  async getUsers () {
    this.listUser = await this.userService.list()
  }

  openDialog () {
    this.$refs.createuser.dialogUser = true
  }
}
