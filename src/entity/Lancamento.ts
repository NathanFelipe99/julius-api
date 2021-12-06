import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "./Usuario";

@Entity()
export class Lancamento {

  constructor(valor: number, descricao: string, data_lancamento: Date, usuario: Usuario){
    this.valor = valor;
    this.descricao = descricao;
    this.data_lancamento = data_lancamento;
    this.usuario = usuario;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column( {type: 'float'} )
  valor: number;

  @Column()
  descricao: string;

  @Column()
  data_lancamento: Date;

  @ManyToOne( () => Usuario)
  usuario: Usuario;

}