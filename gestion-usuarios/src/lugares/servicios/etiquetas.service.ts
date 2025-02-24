import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeepPartial } from 'typeorm';
import { Etiquetas } from '../entidades/etiquetas-entidad';
import { EtiquetasDto } from '../dto/etiquetas.dto';

@Injectable()
export class EtiquetasService {
    constructor(@InjectRepository(Etiquetas) private tagsRepository: Repository<Etiquetas>) {}

    async createTag(etiqueta: EtiquetasDto): Promise<Etiquetas> { 
        const newModel: DeepPartial<Etiquetas> = { 
            nombre: etiqueta.nombre 
        };
    
        const createdTag = this.tagsRepository.create(newModel);
        return await this.tagsRepository.save(createdTag);
    }

    async getTags(): Promise<Etiquetas[]> {
        return await this.tagsRepository.find();
    }
}
