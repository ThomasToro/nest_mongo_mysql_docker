import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { Lugares } from "./lugares-entidad";

/**
 * Entidad que representa la tabla 'categorias' en la base de datos
 */

@Entity("categorias")
export class Categorias {
    /**
     * Identificador único de la categoría (clave primaria autogenerada)
     */
    @PrimaryGeneratedColumn()
    id_categoria: number;

    /**
     * Nombre de la categoría.
     * Tipo: varchar (cadena de texto) con una longitud máxima de 100 caracteres
     */
    @Column({ type: "varchar", length: 100 })
    nombre: string;

    /*@OneToOne(() => Lugares, {cascade:true})
        lugar: Lugares;*/
}
