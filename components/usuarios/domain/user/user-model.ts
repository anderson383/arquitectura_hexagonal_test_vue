import {ID} from "~/core/domain/uuid";

export interface User {
  id: ID
  nombre: string
  apellido: string
  correo: string
  edad: number
}
