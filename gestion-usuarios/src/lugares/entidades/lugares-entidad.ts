import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToMany, JoinTable } from "typeorm";
import { Categorias } from "./categorias-entidad";
import { Medios } from "./medios-entidad";
import { Etiquetas } from "./etiquetas-entidad";

/**
 * Entidad que representa la tabla 'lugares' en la base de datos
 */

@Entity("lugares")
export class Lugares {
    /**
     * Identificador único del lugar (clave primaria autogenerada)
     */
    @PrimaryGeneratedColumn()
    identificador: number;

    /**
     * Nombre del lugar.
     * Tipo: varchar (cadena de texto) con una longitud máxima de 255 caracteres
     */
    @Column({ type: "varchar", length: 255 })
    nombre: string;

    /**
     * Dirección del lugar.
     * Tipo: varchar (cadena de texto) con una longitud máxima de 255 caracteres
     */
    @Column({ type: "varchar", length: 255 })
    direccion: string;

    /**
     * Tipo de lugar (ejemplo: "restaurante", "parque", "museo", "cafetería")
     * Tipo: varchar con una longitud máxima de 100 caracteres
     */
    @Column({ type: "varchar", length: 100 })
    tipo: string; // Por ejemplo: "restaurante", "parque", "museo", "cafetería"

    /**
     * Horario de atención del lugar
     * Tipo: varchar con una longitud máxima de 100 caracteres
     */
    @Column({ type: "varchar", length: 100 })
    horario: string;

    /**
     * Descripción del lugar
     * Tipo: texto (sin límite de longitud), puede ser nulo
     */
    @Column({ type: "text", nullable: true })
    descripcion: string;

    /**
     * Identificador de la categoría a la que pertenece el lugar.
     */
    @Column()
    id_categoria: number;

    //@OneToMany(() => Medios, (medio) => medio.identificador, { cascade: true })
    //medios: Medios[];

    @ManyToMany(() => Etiquetas, { cascade: true })
    @JoinTable({
    name: "lugares_etiquetas", // Nombre de la tabla intermedia
    joinColumn: {
        name: "identificador", // Columna en la tabla intermedia que referencia a Lugar
        referencedColumnName: "identificador",
    },
    inverseJoinColumn: {
        name: "id_etiqueta", // Columna en la tabla intermedia que referencia a Etiqueta
        referencedColumnName: "id_etiqueta",
    },
    })
    etiquetas: Etiquetas[];

}
