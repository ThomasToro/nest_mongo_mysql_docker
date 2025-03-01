/**
 * Se utiliza para transportar datos de lugares de manera estructurada
 */

export class LugaresDto{
    /**
     * Identificador único del lugar
     */
    identificador : number;

    /**
     * Nombre del lugar
     */
    nombre : string;

    /**
     * Dirección del lugar
     */
    direccion : string;

    /**
     * Tipo de lugar (ejemplo: "restaurante", "parque", "museo", "cafetería")
     */
    tipo : string; 

    /**
     * Horario de atención del lugar
     */
    horario : string;

    /**
     * Identificador de la categoría a la que pertenece el lugar
     */
    id_categoria : number;
}