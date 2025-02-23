import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("categorias")
export class Categorias {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 100 })
    nombre: string;
}
