import {Vue, Component} from "vue-property-decorator";
import {inject, injectable} from "inversify-props";
import {TYPES} from "~/core/domain/types";
import {UserCommandCreate} from "~/components/usuarios/application/commands/user-command";

@Component
@injectable()
export default class UsuariosCreateConf extends Vue {

  @inject(TYPES.CREATE_USER) userService: UserCommandCreate

  formData: any = {}
  dialogUser: boolean = false

  async saveData () {
    if (this.formData.id) await this.userService.update(this.formData.id, this.formData)
    else await this.userService.create(this.formData)
    this.realoadData()
    this.dialogUser = false
  }

  async retrieve (id: number) {
    this.formData = await this.userService.retrieve(id)
    this.dialogUser = true
  }

  realoadData () {
    this.$emit('change_data')
  }

}
