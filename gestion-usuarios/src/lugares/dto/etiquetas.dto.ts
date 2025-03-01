import { Lugares } from "../entidades/lugares-entidad";

    /**
    * Se utiliza para transportar datos de etiquetas de manera estructurada.
    */

export class EtiquetasDto{
    /**
     * Identificador único de la etiqueta.
     */
    id_etiqueta : number;

    /**
     * Nombre de la etiqueta.
     */
    nombre : string;
}