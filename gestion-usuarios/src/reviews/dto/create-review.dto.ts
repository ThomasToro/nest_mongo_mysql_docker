// Definición de la clase CreateReviewDto que se utilizará como Data Transfer Object (DTO)
// para crear una nueva reseña en la base de datos
export class CreateReviewDto { 
    // Identificador del lugar donde se hizo la reseña
    placeId: string;

    // Calificación dada en la reseña
    rating: number;

    // Comentario de la reseña
    comment: string;

    // Arreglo de URLs o rutas de archivos multimedia asociados con la reseña
    multimedia: string[];

    // Fecha y hora en que se creó la reseña
    createdAt: Date;
}