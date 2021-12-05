import { Router } from 'express';
import { UsuarioController } from '../controller/UsuarioController';
import { Usuario } from '../entity/Usuario';
/** Class-validator usado na validação dos campos passados no json */
import { validate } from 'class-validator';

export const routerUsuario = Router();
const usuarioCtrl = new UsuarioController();

/**
 * Criando uma rota padrão
 */

/** Toda função get deve receber dois parâmetros: request (req) e response (res) */
/**
 * routerUsuario.get('/', (req, res) => res.send('UserServices'));
 * Substituir função get por Serviço para salvar novo usuário
 */

routerUsuario.post('/', async (req, res) => {
  try{
    const {nome, email} = req.body;
    const usuario = new Usuario(nome, email);

    const errors = await validate(usuario);

    if (errors.length == 0) {
      const usuarioSalvo = await usuarioCtrl.salvar(usuario);
      res.json(usuarioSalvo);
    }
  } catch(err) {
    /*console.log(err);*/
    return res.status(400).send({ error: err });
  }
 
});

/**Serviço para listar todos os usuarios */
routerUsuario.get('/', async (req, res) => {
  const usuarios = await usuarioCtrl.listar();
  if (usuarios.length != 0 ) {
    res.json(usuarios);
  }
});
