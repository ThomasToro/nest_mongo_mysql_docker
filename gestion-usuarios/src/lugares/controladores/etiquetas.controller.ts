import { Controller, Post, Body, Get } from '@nestjs/common';
import { EtiquetasService } from 'src/lugares/servicios/etiquetas.service';
import { EtiquetasDto } from '../dto/etiquetas.dto';

/**
 * Controlador para gestionar las operaciones relacionadas con la entidad 'Etiquetas'
 */

@Controller('etiquetas')
export class EtiquetasController {
    /**
     * Proporciona acceso del servicio 'EtiquetasService' para manejar la lógica de negocio de etiquetas.
     */
    constructor(private tagsService: EtiquetasService) {}

    /**
     * Crea una nueva etiqueta en la base de datos
     * @param newTag Datos de la nueva etiqueta (DTO)
     * @returns La etiqueta creada
     */
    @Post('create-tag')
    async crearEtiqueta(@Body()newTag: EtiquetasDto) {
        return this.tagsService.crearEtiqueta(newTag);
    }

    /**
     * Obtiene todas las etiquetas almacenadas en la base de datos
     * @returns Lista de todas las etiquetas disponibles
     */
    @Get('get-tags')
    getTags(){
        return this.tagsService.getTags();
    }

}
