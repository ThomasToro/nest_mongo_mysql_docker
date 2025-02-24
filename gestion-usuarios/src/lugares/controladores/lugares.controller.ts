import { Controller, Post, Body, Get,Param } from '@nestjs/common';
import { LugaresService } from 'src/lugares/servicios/lugares.service';
import { LugaresDto } from '../dto/lugares.dto';
import { get } from 'mongoose';

@Controller('place')
export class LugaresController {
        constructor(private placesService: LugaresService) {}
    
    @Post()
    createPlace(@Body()newPlace: LugaresDto) {
        return this.placesService.crear_Lugar(newPlace);
    }

    @Get()
    getPlaces(){
        return this.placesService.getPlaces();
    }

    @Get(':id')
    getPlaceById(@Param('id') id: string) {
        return this.placesService.getPlaceById(Number(id));
    }

}
