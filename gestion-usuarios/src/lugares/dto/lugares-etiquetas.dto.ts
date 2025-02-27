import { IsNumber } from 'class-validator';

/**
 * Se utiliza para transportar datos de la relación entre Lugares y Etiquetas
 */

export class LugaresEtiquetasDto {
    /**
     * Identificador del lugar asociado a la etiqueta
     */
    @IsNumber()
    identificador: number;

    /**
     * Identificador de la etiqueta asociada al lugar
     */
    @IsNumber()
    id: number;
}