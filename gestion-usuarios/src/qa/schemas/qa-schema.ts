import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"; 
import { HydratedDocument } from "mongoose"; 

// Definición del tipo de documento para la entidad Qa en MongoDB, utilizando el tipo HydratedDocument de Mongoose
export type QaDocument = HydratedDocument<Qa>;

// Decorador Schema indica que la clase Qa será un esquema de Mongoose que se mapeará a una colección en la base de datos
@Schema()
export class Qa {
    // Propiedad placeId, un campo requerido que almacena el identificador del lugar al que se refiere la pregunta
    @Prop({ required: true })
    placeId: string;

    // Propiedad question, un campo requerido que almacena la pregunta hecha por un usuario
    @Prop({ required: true })
    question: string;

    // Propiedad askedAt, un campo requerido que almacena la fecha en que se hizo la pregunta
    @Prop({ required: true })
    askedAt: Date;

    // Propiedad answers, que es un array de objetos donde cada objeto contiene una respuesta con su texto y la fecha de respuesta
    @Prop({
        type: [
            {
                answerText: { type: String, required: true }, // Texto de la respuesta, requerido
                answeredAt: { type: Date, required: true },  // Fecha en que se respondió, requerido
            },
        ],
        required: true, // Se requiere al menos una respuesta para cada pregunta
    })
    answers: { answerText: string; answeredAt: Date }[];
}

// Generación del esquema de Mongoose a partir de la clase Qa
export const QaSchema = SchemaFactory.createForClass(Qa);
