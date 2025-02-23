import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("lugares")
export class Lugares {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 255 })
    nombre: string;

    @Column({ type: "varchar", length: 255 })
    direccion: string;

    @Column({ type: "varchar", length: 100 })
    tipo: string; // Por ejemplo: "restaurante", "parque", "museo", "cafetería"

    @Column({ type: "varchar", length: 100 })
    horarioAtencion: string;

    @Column({ type: "text", nullable: true })
    descripcion: string;

}
