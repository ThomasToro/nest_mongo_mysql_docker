import { Entity, Column, ManyToOne, PrimaryColumn, JoinColumn } from "typeorm";
import { Lugares } from "./lugares-entidad";
import { Etiquetas } from "./etiquetas-entidad";

/**
 * Entidad que representa la tabla intermedia 'lugares-etiquetas',
 * la cual establece una relación muchos a muchos entre Lugares y Etiquetas
 */

@Entity({ name: "lugares-etiquetas" })
export class LugaresEtiquetas{
    /**
     * Identificador único del lugar en la tabla intermedia
     * Actúa como clave primaria compuesta junto con 'id'
     */
    @PrimaryColumn({ type: "int" })
    identificador: number;

    /**
     * Identificador único de la etiqueta en la tabla intermedia
     * Actúa como clave primaria compuesta junto con 'identificador'
     */
    @PrimaryColumn({ type: "int" })
    id: number;

    @ManyToOne(() => Lugares, (lugar) => lugar.etiquetas, { onDelete: "CASCADE" })
    @JoinColumn({ name: "id" })
    lugar: Lugares;
    
    @ManyToOne(() => Etiquetas, (etiqueta) => etiqueta.id_etiqueta, { onDelete: "CASCADE" })
    @JoinColumn({ name: "id" })
    etiqueta : Etiquetas;
}
