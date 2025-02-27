import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeepPartial } from 'typeorm';
import { LugaresEtiquetas } from '../entidades/lugares-etiquetas-entidad';
import {LugaresEtiquetasDto} from '../dto/lugares-etiquetas.dto';

/**
 * Servicio para gestionar la relación entre 'Lugares' y 'Etiquetas'
 * Permite la creación de registros en la tabla intermedia 'lugares-etiquetas'
 */

@Injectable()
export class LugaresEtiquetasService {
    /**
     * Proporciona acceso repositorio de TypeORM para gestionar la persistencia de datos
     * en la tabla intermedia 'lugares-etiquetas'
     */
    constructor(@InjectRepository(LugaresEtiquetas) private placeTagsRepository: Repository<LugaresEtiquetas>) {}

    /**
     * Crea una nueva relación entre un lugar y una etiqueta en la base de datos
     * @param createPlaceTagsDto Datos de la relación (DTO)
     * @returns La relación creada y almacenada en la base de datos
     * @throws BadRequestException Si faltan datos requeridos
     */
    async crearLugarEtiqueta(createPlaceTagsDto: LugaresEtiquetasDto): Promise<LugaresEtiquetas> {
        if (!createPlaceTagsDto.identificador || !createPlaceTagsDto.id) {
            throw new BadRequestException('Se requiere el lugar y la etiqueta');
        }

        const newPlaceTags: DeepPartial<LugaresEtiquetas> = {
            identificador: createPlaceTagsDto.identificador,
            id: createPlaceTagsDto.id,
        };

        const createdPlaceTags = this.placeTagsRepository.create(newPlaceTags);
        return await this.placeTagsRepository.save(createdPlaceTags);
    }
}
