import { Express } from 'express';
import { Controller, Post, Body, Get, UseInterceptors, UploadedFile, Param } from '@nestjs/common';
import { MediosService } from 'src/lugares/servicios/medios.service';
import { MediosDto } from '../dto/medios.dto';
import { FileInterceptor } from '@nestjs/platform-express';

/**
 * Controlador para gestionar las operaciones relacionadas con la entidad 'Medios'
 */

@Controller('medios')
export class MediosController {
    /**
     * Proporciona acceso del servicio 'MediosService' para manejar la lógica de negocio de medios
     */
    constructor(private mediaService: MediosService) {}

    /**
     * Crea un nuevo medio en la base de datos
     * @param newMedio Datos del nuevo medio (DTO)
     * @returns El medio creado
     */
    @Post('create-medio')
    async createMedia(@Body()newMedio: MediosDto) {
        return this.mediaService.crearMedio(newMedio)
    }

    /**
     * Obtiene todos los medios almacenados en la base de datos
     * @returns Lista de todos los medios disponibles
     */
    @Get('get-medio')
    getMedioId() {
        return this.mediaService.getMedioId();
    } 

}
