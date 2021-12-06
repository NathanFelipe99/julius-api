import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany} from "typeorm";
import { Contains, contains, IsEmail, IsNotEmpty, Length, length, Max, MaxLength, MIN, MinLength } from 'class-validator';
import { Lancamento } from "./Lancamento";

@Entity()
export class Usuario {

    constructor(name: string, email: string) {
      this.name = name;
      this.email = email;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsNotEmpty()
    @Length(3, 60, {message: 'Tamanho do nome está fora do padrão!'})
    name: string;

    @Column()
    @IsNotEmpty()
    @IsEmail()
    @Contains("@")
    @Length(10, 60, {message: 'Email de tamanho inválido!'})
    email: string;

    @CreateDateColumn({name: 'createdAt'})
    createdAt: Date;

    @UpdateDateColumn({name: 'updatedAt'})
    updatedAt: Date;

    @OneToMany(() => Lancamento, lancamento => lancamento.usuario)
    lancamentos: Lancamento[];
}
