import { Controller, Post, Body, Get } from '@nestjs/common';
import { EtiquetasService } from 'src/lugares/servicios/etiquetas.service';
import { EtiquetasDto } from '../dto/etiquetas.dto';

@Controller('etiquetas')
export class EtiquetasController {
    constructor(private tagsService: EtiquetasService) {}

    @Post('create-tag')
    async crearEtiqueta(@Body()newTag: EtiquetasDto) {
        return this.tagsService.crearEtiqueta(newTag);
    }

    @Get('get-tags')
    getTags(){
        return this.tagsService.getTags();
    }

}
