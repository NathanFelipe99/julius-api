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

  async recuperarPorId(id: number) {
    const usuario = await getManager().findOne(Usuario, id);
    return usuario;
  }

  async recuperarPorUsuario(id: number) {
    const usuario = await getManager().findOne(Usuario, id, {
      relations: ['lancamentos']
    });

    return usuario.lancamentos;  

  }


}



