import { Controller, Post, Body, Get,Param } from '@nestjs/common';
import { LugaresService } from 'src/lugares/servicios/lugares.service';
import { LugaresDto } from '../dto/lugares.dto';
import { get } from 'mongoose';

/**
 * Controlador para gestionar las operaciones relacionadas con la entidad 'Lugares'
 */

@Controller('lugares')
export class LugaresController {
    /**
     * Proporciona acceso del servicio 'LugaresService' para manejar la lógica de negocio de lugares
     */
        constructor(private placesService: LugaresService) {}
    
    /**
     * Crea un nuevo lugar en la base de datos
     * @param newPlace Datos del nuevo lugar (DTO)
     * @returns El lugar creado
     */
    @Post('createLugar')
    createPlace(@Body()newPlace: LugaresDto) {
        console.log(newPlace);
        return this.placesService.crear_Lugar(newPlace);
    }

    /**
     * Obtiene todos los lugares almacenados en la base de datos
     * @returns Lista de todos los lugares disponibles
     */
    @Get('get-places')
    getPlaces(){
        return this.placesService.getLugares();
    }

    /**
     * Obtiene un lugar por su ID
     * @param id Identificador único del lugar
     * @returns El lugar encontrado
     */
    @Get('get-one-place/:id')
    getPlaceById(@Param('id') id: string) {
        return this.placesService.getLugarById(Number(id));
    }

}
