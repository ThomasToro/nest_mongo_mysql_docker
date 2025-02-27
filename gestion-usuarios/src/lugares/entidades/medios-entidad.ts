import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Lugares } from "./lugares-entidad";

/**
 * Entidad que representa la tabla 'medios' en la base de datos
 */

@Entity("medios")
export class Medios {
    /**
     * Identificador único del medio (clave primaria autogenerada)
     */
    @PrimaryGeneratedColumn()
    id_medio: number;

    /**
     * Valor del medio, generalmente una URL o ruta de archivo
     * Tipo: varchar con una longitud máxima de 255 caracteres
     */
    @Column({ type: "varchar", length: 255 })
    valor: string;

    /**
     * Tipo de medio 
     * Tipo: varchar con una longitud máxima de 50 caracteres
     */
    @Column({ type: "varchar", length: 50 })
    tipo: string;  // Ejemplo: imagen

    /**
     * Descripción del medio.
     * Tipo: string.
     */
    @Column()
    descripcion : string;

    /**
     * Identificador del lugar al que pertenece este medio
     */
    @Column()
    identificador: number;

}

