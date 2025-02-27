import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { Lugares } from "./lugares-entidad";

@Entity("etiquetas")
export class Etiquetas {
    @PrimaryGeneratedColumn()
    id_etiqueta: number;

    @Column()
    nombre: string;

    //@ManyToMany(() => Lugares, {cascade:true})
    //lugares: Lugares[];
}
