import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lugares } from 'src/lugares/entidades/lugares-entidad';
import { Repository } from 'typeorm';
import { LugaresDto } from '../dto/lugares.dto';
import { ModificationHistoryService } from 'src/modification-history/services/modification-history.service'; // Importamos el servicio de MongoDB
import { CreateModificationHistoryDto } from 'src/modification-history/dto/create-modification-history.dto'; // Importamos el DTO de MongoDB

@Injectable()
export class LugaresService {
    constructor(
        @InjectRepository(Lugares) private placesRepository: Repository<Lugares>,
        private readonly modificationHistoryService: ModificationHistoryService, // Esto debe estar bien inyectado
    ) {}

    /**
     * Crea un nuevo lugar en la base de datos y registra la modificación en MongoDB.
     * @param lugar Datos del lugar a crear (DTO)
     * @returns El lugar creado y almacenado en la base de datos
     */
    async crear_Lugar(lugar: LugaresDto) {
        // Guardamos el lugar en MySQL
        const createdPlace = this.placesRepository.create(lugar);
        const savedPlace = await this.placesRepository.save(createdPlace);

        //Creamos el registro en MongoDB
        const modificationHistoryDto: CreateModificationHistoryDto = {
            placeId: savedPlace.identificador.toString(), //Convertimos el ID a string
            modifiedAt: new Date(), // Fecha actual
            operation: 'CREATE', // Operación de creación
            modificationNote: 'Lugar creado exitosamente',//Nota opcional
        };

        // Guardamos el registro en MongoDB
        await this.modificationHistoryService.createModificationHistory(modificationHistoryDto);

        return savedPlace; // Retornamos el lugar creado en MySQL
    }

    /**
     * Obtiene todos los lugares almacenados en la base de datos.
     * @returns Lista de lugares disponibles
     */
    async getLugares() {
        return await this.placesRepository.find();
    }

    /**
     * Obtiene un lugar por su ID.
     * @param id Identificador único del lugar
     * @returns El lugar encontrado
     * @throws NotFoundException Si el lugar no existe
     */
    async getLugarById(id: number): Promise<Lugares> {
        const place = await this.placesRepository.findOneBy({ identificador: id });
        if (!place) {
            throw new NotFoundException(`Lugar con ID ${id} no fue encontrado`);
        }
        return place;
    }
}