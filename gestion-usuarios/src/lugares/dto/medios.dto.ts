import { Lugares } from "../entidades/lugares-entidad";

/**
 * Se utiliza para transportar datos de medios de manera estructurada
 */

export class MediosDto{
    /**
     * Identificador único del medio.
     */
    id_medio : number;

    /**
     * Valor del medio, generalmente una URL o ruta de archivo.
     */
    valor : string;

    /**
     * Tipo de medio (ejemplo: imagen, video, audio).
     */
    tipo : string;

    /**
     * Identificador del lugar al que pertenece este medio.
     */
    identificador : number;
}