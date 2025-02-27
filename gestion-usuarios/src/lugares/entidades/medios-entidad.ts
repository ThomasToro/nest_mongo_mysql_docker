import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Lugares } from "./lugares-entidad";

@Entity("medios")
export class Medios {
    @PrimaryGeneratedColumn()
    id_medio: number;

    @Column({ type: "varchar", length: 255 })
    valor: string;

    @Column({ type: "varchar", length: 50 })
    tipo: string;  // Ejemplo: imagen, video, audio

    @Column()
    descripcion : string;

    @Column()
    identificador: number;

}

