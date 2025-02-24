import { Express } from 'express';
import { Controller, Post, Body, Get, UseInterceptors, UploadedFile, Param } from '@nestjs/common';
import { MediaService } from 'src/lugares/servicios/medios.service';
import { MediosDto } from '../dto/medios.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('medios')
export class MediosController {
    constructor(private mediaService: MediaService) {}

    @Post()
    @UseInterceptors(FileInterceptor('tipo'))
    async createMedia(
        @UploadedFile() file: Express.Multer.File,
        @Body() newMedia: MediosDto
    ) {
        if (!file) {
            return { message: 'No se subió ninguna imagen' };
        }

        const base64Image = file.buffer.toString('base64');

        return this.mediaService.createMedia({
            ...newMedia,
            tipo: base64Image,
        });
    }

    @Get(':id')
    async getImage(@Param('id') id: number) {
        const medios = await this.mediaService.getMediaById(id);
        if (!medios) {
            return { message: 'Imagen no encontrada' };
        }

        return {
            id: medios.id,
            image: `data:image/jpeg;base64,${medios.tipo}`,
        };
    }
}
