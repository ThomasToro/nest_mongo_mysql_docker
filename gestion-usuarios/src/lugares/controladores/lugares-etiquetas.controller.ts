import { LugaresEtiquetasService } from '../servicios/lugares-etiquetas.service';
import { Controller, Post, Body, Get, UseInterceptors, UploadedFile, Param } from '@nestjs/common';
import { LugaresEtiquetasDto } from '../dto/lugares-etiquetas.dto';

/**
 * Controlador para gestionar la relación entre Lugares y Etiquetas
 * Permite la creación de registros en la tabla intermedia 'lugares-etiquetas'
 */

@Controller('lugares-etiquetas')
export class LugaresEtiquetasController {
    /**
     * Proporciona acceso del servicio 'LugaresEtiquetasService' para manejar la lógica de negocio
     * de la relación entre lugares y etiquetas
     */
    constructor(private placeTagsService: LugaresEtiquetasService) {}
    
    /**
     * Crea una nueva relación entre un lugar y una etiqueta en la base de datos
     * @param createPlaceTagsDto Datos de la relación (DTO)
     * @returns La relación creada y almacenada en la base de datos
     */
    @Post('crear-lugar-etiqueta')
    async createPlaceTags( @Body() 
    createPlaceTagsDto: LugaresEtiquetasDto ) {
        return this.placeTagsService.crearLugarEtiqueta(createPlaceTagsDto);
    }
    
}
