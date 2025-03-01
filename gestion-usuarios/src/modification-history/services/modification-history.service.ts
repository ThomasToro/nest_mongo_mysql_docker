import { Injectable } from '@nestjs/common';
import { ModificationHistory, ModificationHistoryDocument } from '../schemas/modification-history-schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateModificationHistoryDto } from '../dto/create-modification-history.dto';


@Injectable()
export class ModificationHistoryService {
    // Inyectamos el modelo de ModificationHistory usando @InjectModel.
    // Esto nos permite interactuar con la colección "modificationhistories" en MongoDB.
    constructor( @InjectModel(ModificationHistory.name)private ModificationHistoryModel: Model<ModificationHistoryDocument>,
    ) {}

    /**
     * Creamos y guardamos un nuevo registro en la colección de historial de modificaciones.
     * @param modificationHistory Objeto que cumple con la estructura definida en CreateModificationHistoryDto.
     * @returns El resultado de la operación de guardado en la base de datos MongoDB
     */
    createModificationHistory(modificationHistory: CreateModificationHistoryDto) {
        // Se crea una nueva instancia del modelo con los datos proporcionados.
        const newModificationHistory = new this.ModificationHistoryModel(modificationHistory);
        // Se guarda el nuevo documento en la base de datos y se retorna el resultado.
        return newModificationHistory.save();
    }

    getModificationHistory(id: string) {
        return this.ModificationHistoryModel.find({placeId: id}).exec();
    }
}


