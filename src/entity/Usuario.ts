import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Usuario {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

}
