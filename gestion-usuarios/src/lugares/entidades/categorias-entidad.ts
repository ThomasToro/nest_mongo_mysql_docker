import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { Lugares } from "./lugares-entidad";

@Entity("categorias")
export class Categorias {
    @PrimaryGeneratedColumn()
    id_categoria: number;

    @Column({ type: "varchar", length: 100 })
    nombre: string;

    /*@OneToOne(() => Lugares, {cascade:true})
        lugar: Lugares;*/
}
