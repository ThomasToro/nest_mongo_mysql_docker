import { LugaresEtiquetasService } from '../servicios/lugares-etiquetas.service';
import { Controller, Post, Body, Get, UseInterceptors, UploadedFile, Param } from '@nestjs/common';
import { LugaresEtiquetasDto } from '../dto/lugares-etiquetas.dto';

@Controller('lugares-etiquetas')
export class LugaresEtiquetasController {
    constructor(private placeTagsService: LugaresEtiquetasService) {}
    
    @Post('crear-lugar-etiqueta')
    async createPlaceTags( @Body() 
    createPlaceTagsDto: LugaresEtiquetasDto ) {
        return this.placeTagsService.crearLugarEtiqueta(createPlaceTagsDto);
    }
    
}
