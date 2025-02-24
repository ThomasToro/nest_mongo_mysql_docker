import { Controller, Post, Body, Get } from '@nestjs/common';
import { EtiquetasService } from 'src/lugares/servicios/etiquetas.service';
import { EtiquetasDto } from '../dto/etiquetas.dto';

@Controller('tag')
export class EtiquetasController {
    constructor(private tagsService: EtiquetasService) {}

    @Post()
    async createTag(@Body()newTag: EtiquetasDto) {
        return this.tagsService.createTag(newTag);
    }

    @Get()
    getTags(){
        return this.tagsService.getTags();
    }

}
