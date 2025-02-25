import { IsNumber } from 'class-validator';

export class LugaresEtiquetasDto {
    @IsNumber()
    identificador: number;
    
    @IsNumber()
    id: number;
}