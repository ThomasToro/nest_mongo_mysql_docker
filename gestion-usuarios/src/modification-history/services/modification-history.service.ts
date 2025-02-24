import { Injectable } from '@nestjs/common';
import { ModificationHistory, ModificationHistoryDocument } from '../schemas/modification-history-schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateModificationHistoryDto } from '../dto/create-modification-history.dto';


@Injectable()
export class ModificationHistoryService {
        constructor(@InjectModel(ModificationHistory.name) private ModificationHistoryModel: Model<ModificationHistoryDocument>){}

        createModificationHistory(ModificationHistory: CreateModificationHistoryDto){
            const newModificationHistory = new this.ModificationHistoryModel(ModificationHistory);
            return newModificationHistory.save();
                
            }
    
}

