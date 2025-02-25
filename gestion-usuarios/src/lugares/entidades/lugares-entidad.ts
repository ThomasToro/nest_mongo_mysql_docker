import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToMany, JoinTable } from "typeorm";
import { Categorias } from "./categorias-entidad";
import { Medios } from "./medios-entidad";
import { Etiquetas } from "./etiquetas-entidad";

@Entity("lugares")
export class Lugares {
    @PrimaryGeneratedColumn()
    identificador: number;

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

    @OneToOne(() => Categorias, {cascade:true})
    categoria: Categorias;

    @OneToMany(() => Medios, (medio) => medio.lugar, { cascade: true })
    medios: Medios[];

    @ManyToMany(() => Etiquetas, { cascade: true })
    @JoinTable({
    name: "lugares_etiquetas", // Nombre de la tabla intermedia
    joinColumn: {
        name: "identificador", // Columna en la tabla intermedia que referencia a Lugar
        referencedColumnName: "identificador",
    },
    inverseJoinColumn: {
        name: "id", // Columna en la tabla intermedia que referencia a Etiqueta
        referencedColumnName: "id",
    },
    })
    etiquetas: Etiquetas[];

}
