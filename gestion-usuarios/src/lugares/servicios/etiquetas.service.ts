import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeepPartial } from 'typeorm';
import { Etiquetas } from '../entidades/etiquetas-entidad';
import { EtiquetasDto } from '../dto/etiquetas.dto';

@Injectable()
export class EtiquetasService {
    constructor(
        @InjectRepository(Etiquetas) 
        private readonly tagsRepository: Repository<Etiquetas>
    ) {}

    async crearEtiqueta(etiqueta: EtiquetasDto){ 
        const createdTag = this.tagsRepository.create(etiqueta);
        return await this.tagsRepository.save(createdTag);
    }

    async getTags(){
        return await this.tagsRepository.find();
    }
}
