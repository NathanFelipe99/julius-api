import { Router } from "express";
import { LancamentoController } from "../controller/LancamentoController";
import { UsuarioController } from "../controller/UsuarioController";
import { Lancamento } from "../entity/Lancamento";

export const routerLancamento = Router();
const lancamentoCtrl = new LancamentoController();
const usuarioCtrl = new UsuarioController();

/**
 * Serviço para salvar um lançamento
 */
routerLancamento.post('/', async (req, res) => {
   
  const { idUsuario, valor, descricao, data } = req.body;
  const usuario = await usuarioCtrl.recuperarPorId(idUsuario);
   
  if(usuario) {
    const lancamento = new Lancamento(valor, descricao, data, usuario);
    const lancamentoSalvo = await lancamentoCtrl.salvar(lancamento);
    res.json(lancamentoSalvo);
  } else {
    /** Status 404 indica que o recurso não foi encontrado (NOT FOUND)  */
    res.status(404).json( {mensagem: 'Usuário não encontrado!'});
   }
   
});