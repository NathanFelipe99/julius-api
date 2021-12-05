import { getManager } from "typeorm";
import { Usuario } from "../entity/Usuario";

/** Utilizando o EntityManager do typeorm */
export class UsuarioController {

  async salvar(usuario: Usuario) {
    const usuarioSalvo =  await getManager().save(usuario);
    return usuarioSalvo;
  }

  async listar() {
    const usuarios = await getManager().find(Usuario);
    return usuarios;
  }
}