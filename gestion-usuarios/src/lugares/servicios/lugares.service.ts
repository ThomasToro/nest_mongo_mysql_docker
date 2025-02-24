import { Injectable,NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lugares } from 'src/lugares/entidades/lugares-entidad';
import { Repository } from 'typeorm';
import { DeepPartial } from 'typeorm';
import { LugaresDto } from '../dto/lugares.dto';

@Injectable()
export class LugaresService {
    constructor(@InjectRepository(Lugares) private placesRepository: Repository<Lugares>) {}

    async crear_Lugar(lugar: LugaresDto): Promise<Lugares> {
        const newModel: DeepPartial<Lugares> = {
            nombre: lugar.nombre,
            direccion: lugar.direccion,
            tipo: lugar.tipo,
            horarioAtencion: lugar.horarioAtencion,
        };
        const createdPlace = this.placesRepository.create(newModel);
        return await this.placesRepository.save(createdPlace);

    }

    async getPlaces(): Promise<Lugares[]> {
        return await this.placesRepository.find();
    }
    
    async getPlaceById(id: number): Promise<Lugares> {
        const place = await this.placesRepository.findOneBy({id: id});
        if (!place) {
            throw new NotFoundException(`lugar con ID ${id} no fue encontrado`);
        }
        return place;
    }
}
