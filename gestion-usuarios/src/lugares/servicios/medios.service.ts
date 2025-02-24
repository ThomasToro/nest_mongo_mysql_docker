import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeepPartial } from 'typeorm';

import { Medios } from '../entidades/medios-entidad';
import { MediosDto } from '../dto/medios.dto';

import { Lugares } from '../entidades/lugares-entidad';

@Injectable()
export class MediaService {
    constructor(
        @InjectRepository(Medios) private mediaRepository: Repository<Medios>,
        @InjectRepository(Lugares) private placesRepository: Repository<Lugares>
    ) {}

    async createMedia(crearMediaDto: MediosDto): Promise<Medios> {
        if (!crearMediaDto.tipo) {
            throw new BadRequestException('La imagen es requerida');
        }

        const place = await this.placesRepository.findOneBy({ id: crearMediaDto.id });
        if (!place) {
            throw new NotFoundException('Lugar no encontrado');
        }

        const newMedia: DeepPartial<Medios> = {
            id: crearMediaDto.id,
            lugar: place,
            tipo: crearMediaDto.tipo,
        };

        const createdMedia = this.mediaRepository.create(newMedia);
        return await this.mediaRepository.save(createdMedia);
    }

    async getMediaById(id: number): Promise<Medios> {
        const media = await this.mediaRepository.findOne({ where: { id : id} });
    
        if (!media) {
            throw new NotFoundException(`No se encontró la imagen con ID ${id}`);
        }
    
        return media;
    }
    
}
