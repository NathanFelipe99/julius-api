import { getManager } from "typeorm";
import { Lancamento } from "../entity/Lancamento";
import { Usuario } from "../entity/Usuario";

export class LancamentoController {
  
  async salvar(lancamento: Lancamento) {
    const lancamentoSalvo = await getManager().save(lancamento);
    return lancamentoSalvo;
  }

  async listar() {
    const lancamentos = await getManager().find(Usuario);
    return lancamentos;
  }

}