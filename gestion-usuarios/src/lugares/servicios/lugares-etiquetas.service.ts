import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeepPartial } from 'typeorm';
import { LugaresEtiquetas } from '../entidades/lugares-etiquetas-entidad';
import {LugaresEtiquetasDto} from '../dto/lugares-etiquetas.dto';

@Injectable()
export class LugaresEtiquetasService {
    constructor(@InjectRepository(LugaresEtiquetas) private placeTagsRepository: Repository<LugaresEtiquetas>) {}

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
