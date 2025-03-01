import { Injectable } from '@nestjs/common'; 
import { Qa, QaDocument } from '../schemas/qa-schema'; 
import { InjectModel } from '@nestjs/mongoose'; 
import { Model } from 'mongoose'; 
import { CreateQaDto } from '../dto/create-qa.dto'; 

//Decorador Injectable, que permite que el servicio sea inyectado en otras clases
@Injectable()
export class QaService {
    //Constructor que inyecta el modelo de Mongoose asociado con el esquema de preguntas y respuestas (Qa)
    constructor(@InjectModel(Qa.name) private QaModel: Model<QaDocument>){}

    //Método que recibe un DTO (CreateQaDto) y lo guarda en la base de datos
    createQa(Qa: CreateQaDto) {
        //Se crea una nueva instancia del modelo de Qa con los datos recibidos
        const newQa = new this.QaModel(Qa);
        //Guardamos la nueva pregunta y respuesta en la base de datos
        return newQa.save();
    }

    //Método que obtiene todas las preguntas y respuestas de la base de datos
    getQas() {
        return this.QaModel.find().exec();
    }
    //Método que obtiene una pregunta y respuesta por su id
    getQaById(id: string) {
        return this.QaModel.findById(id).exec();
    }
}
