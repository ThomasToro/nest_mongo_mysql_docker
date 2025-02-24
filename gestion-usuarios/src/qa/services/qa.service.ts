import { Injectable } from '@nestjs/common';
import { Qa, QaDocument } from '../schemas/qa-schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateQaDto } from '../dto/create-qa.dto';


@Injectable()
export class QaService {
        constructor(@InjectModel(Qa.name) private QaModel: Model<QaDocument>){}

        createQa(Qa: CreateQaDto){
            const newQa = new this.QaModel(Qa);
            return newQa.save();
                
            }
    
}
