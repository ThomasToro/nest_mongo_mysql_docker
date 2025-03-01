import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeepPartial } from 'typeorm';
import { Etiquetas } from '../entidades/etiquetas-entidad';
import { EtiquetasDto } from '../dto/etiquetas.dto';

/**
 * Servicio que gestiona las operaciones relacionadas con la entidad 'Etiquetas'.
 */
@Injectable()
export class EtiquetasService {
    /**
     * Proporciona acceso al repositorio de TypeORM para gestionar la persistencia de datos de la entidad 'Etiquetas'
     */
    constructor(
        @InjectRepository(Etiquetas) 
        private readonly tagsRepository: Repository<Etiquetas>
    ) {}

    /**
     * Crea una nueva etiqueta en la base de datos
     * @param etiqueta Datos de la etiqueta a crear (DTO)
     * @returns La etiqueta creada y almacenada en la base de datos
     */
    async crearEtiqueta(etiqueta: EtiquetasDto){ 
        const createdTag = this.tagsRepository.create(etiqueta);
        return await this.tagsRepository.save(createdTag);
    }

    /**
     * Obtiene todas las etiquetas almacenadas en la base de datos
     * @returns Lista de etiquetas disponibles
     */
    async getTags(){
        return await this.tagsRepository.find();
    }
}
