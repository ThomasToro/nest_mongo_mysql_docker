import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { Lugares } from "./lugares-entidad";

/**
 * Entidad que representa la tabla 'etiquetas' en la base de datos
 */

@Entity("etiquetas")
export class Etiquetas {
    /**
     * Identificador único de la etiqueta (clave primaria autogenerada)
     */
    @PrimaryGeneratedColumn()
    id_etiqueta: number;

    /**
     * Nombre de la etiqueta
     * Tipo: string
     */
    @Column()
    nombre: string;

    //@ManyToMany(() => Lugares, {cascade:true})
    //lugares: Lugares[];
}
