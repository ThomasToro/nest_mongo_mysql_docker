import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Lugares } from "./lugares-entidad";

@Entity("medios")
export class Medios {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 255 })
    url: string;

    @Column({ type: "varchar", length: 50 })
    tipo: string;  // Ejemplo: imagen, video, audio

    @ManyToOne(() => Lugares, (lugar) => lugar.medios)
    lugar: Lugares;

}

