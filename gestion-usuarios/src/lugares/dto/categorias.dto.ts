import { Lugares } from "../entidades/lugares-entidad";

/**
 * Se utiliza para transportar datos de categorías de manera estructurada.
 */

export class CategoriasDto {
    /**
     * Identificador único de la categoría.
     */
    id_categoria : number;

    /**
     * Nombre de la categoría.
     */
    nombre : string;
}