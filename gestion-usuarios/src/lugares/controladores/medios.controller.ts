import { Express } from 'express';
import { Controller, Post, Body, Get, UseInterceptors, UploadedFile, Param } from '@nestjs/common';
import { MediosService } from 'src/lugares/servicios/medios.service';
import { MediosDto } from '../dto/medios.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('medios')
export class MediosController {
    constructor(private mediaService: MediosService) {}

    @Post('create-medio')
    async createMedia(@Body()newMedio: MediosDto) {
        return this.mediaService.crearMedio(newMedio)
    }

    @Get('get-medio')
    getMedioId() {
        return this.mediaService.getMedioId();
    } 

}
