import { Controller, Post, Body, Get,Param } from '@nestjs/common';
import { LugaresService } from 'src/lugares/servicios/lugares.service';
import { LugaresDto } from '../dto/lugares.dto';
import { get } from 'mongoose';

@Controller('lugares')
export class LugaresController {
        constructor(private placesService: LugaresService) {}
    
    @Post('createLugar')
    createPlace(@Body()newPlace: LugaresDto) {
        return this.placesService.crear_Lugar(newPlace);
    }

    @Get('get-places')
    getPlaces(){
        return this.placesService.getLugares();
    }

    @Get('get-one-place')
    getPlaceById(@Param('id') id: string) {
        return this.placesService.getLugarById(Number(id));
    }

}
