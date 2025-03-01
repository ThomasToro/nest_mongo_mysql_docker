import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeepPartial } from 'typeorm';
import { Medios } from '../entidades/medios-entidad';
import { MediosDto } from '../dto/medios.dto';
import { Lugares } from '../entidades/lugares-entidad';

/**
 * Servicio para gestionar las operaciones relacionadas con la entidad 'Medios'
 */

@Injectable()
export class MediosService {
    /**
     * Proporciona acceso al repositorio de TypeORM para gestionar la persistencia de datos de la entidad 'Medios'
     */
    constructor(
        @InjectRepository(Medios) private mediaRepository: Repository<Medios>,
        /**
        * Proporciona al repositorio de TypeORM para acceder a los datos de 'Lugares',
        * permitiendo validar la existencia del lugar antes de asignarle un medio
        */
        @InjectRepository(Lugares) private placesRepository: Repository<Lugares>
    ) {}

    /**
     * Crea un nuevo medio y lo almacena en la base de datos
     * @param crearMedio Datos del medio a crear (DTO)
     * @returns El medio creado y almacenado en la base de datos
     */
    async crearMedio(crearMedio: MediosDto){

        const createdMedia = this.mediaRepository.create(crearMedio);
        return await this.mediaRepository.save(createdMedia);
    }

    /**
     * Obtiene todos los medios almacenados en la base de datos
     * @returns Lista de medios disponibles
     */
    async getMedioId(){
        return await this.mediaRepository.find();
    }
    
}
