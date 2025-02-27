import { Injectable,NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lugares } from 'src/lugares/entidades/lugares-entidad';
import { Repository } from 'typeorm';
import { DeepPartial } from 'typeorm';
import { LugaresDto } from '../dto/lugares.dto';

/**
 * Servicio para gestionar las operaciones relacionadas con la entidad 'Lugares'
 */

@Injectable()
export class LugaresService {
    /**
     * Proporciona acceso al repositorio de TypeORM para gestionar la persistencia de datos de la entidad 'Lugares'
     */
    constructor(@InjectRepository(Lugares) private placesRepository: Repository<Lugares>) {}

    /**
     * Crea un nuevo lugar en la base de datos
     * @param lugar Datos del lugar a crear (DTO)
     * @returns El lugar creado y almacenado en la base de datos
     */
    async crear_Lugar(lugar: LugaresDto){
        const createdPlace = this.placesRepository.create(lugar);
        return await this.placesRepository.save(createdPlace);

    }

    /**
     * Obtiene todos los lugares almacenados en la base de datos
     * @returns Lista de lugares disponibles
     */
    async getLugares(){
        return await this.placesRepository.find();
    }
    
    /**
     * Obtiene un lugar por su ID
     * @param id Identificador único del lugar
     * @returns El lugar encontrado
     * @throws NotFoundException Si el lugar no existe
     */
    async getLugarById(id: number): Promise<Lugares> {
        const place = await this.placesRepository.findOneBy({identificador: id});
        if (!place) {
            throw new NotFoundException(`lugar con ID ${id} no fue encontrado`);
        }
        return place;
    }
}
