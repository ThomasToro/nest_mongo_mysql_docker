import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { Lugar } from "../dto/lugar";

@Entity("etiquetas")
export class Etiquetas {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 100 })
    nombre: string;

    @ManyToMany(() => Lugar, {cascade:true})
    lugares: Lugar[];
}
