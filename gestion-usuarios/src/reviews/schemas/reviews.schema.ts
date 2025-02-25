import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

// Definimos el tipo ReviewDocument que usaremos más tarde para indicar que el documento de Review
// será un tipo de documento hidratado (con metodos de mongoose) para un esquema Review
export type ReviewDocument = HydratedDocument<Review>;

// Decorador @Schema() que marca esta clase como un esquema de Mongoose
@Schema()
export class Review {
    // Propiedad placeId: Identificador único del lugar al que pertenece la reseña
    // Es obligatorio (required)
    @Prop({ required: true })
    placeId: string;

    // Propiedad rating: Puntuación de la reseña, debe ser un número entre 1 y 5
    @Prop({ required: true })
    rating: number;

    //Propiedad comment: Comentario de la reseña hecho por el usuario
    @Prop({ required: true })
    comment: string;

    // Propiedad multimedia: Un array de cadenas de texto que almacena las rutas o datos base64
    // de imágenes o videos asociados a la reseña, siempre es obligatorio
    @Prop({ type: [String], required: true })
    multimedia: string[];

    // Propiedad createdAt: Fecha en la que se crea la reseña
    @Prop({ required: true })
    createdAt: Date;
}

// Usamos el SchemaFactory para generar el esquema correspondiente de Mongoose para la clase Review
export const ReviewSchema = SchemaFactory.createForClass(Review);

