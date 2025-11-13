import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Customers{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    email: string;

    @Column()
    idade: number;
}