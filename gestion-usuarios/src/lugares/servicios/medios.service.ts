import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeepPartial } from 'typeorm';

import { Medios } from '../entidades/medios-entidad';
import { MediosDto } from '../dto/medios.dto';

import { Lugares } from '../entidades/lugares-entidad';

@Injectable()
export class MediosService {
    constructor(
        @InjectRepository(Medios) private mediaRepository: Repository<Medios>,
        @InjectRepository(Lugares) private placesRepository: Repository<Lugares>
    ) {}

    async crearMedio(crearMedio: MediosDto){

        const createdMedia = this.mediaRepository.create(crearMedio);
        return await this.mediaRepository.save(createdMedia);
    }

    async getMedioId(){
        return await this.mediaRepository.find();
    }
    
}
