import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("etiquetas")
export class Etiquetas {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 100 })
    nombre: string;
}
