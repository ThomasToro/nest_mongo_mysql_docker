// Definición de la clase CreateQaDto que se utilizará como Data Transfer Object (DTO) 
// para crear una nueva pregunta y respuesta en la base de datos
export class CreateQaDto {
    // Identificador del lugar donde se hizo la pregunta
    placeId: string;

    // Texto de la pregunta
    question: string;

    // Fecha y hora en que se hizo la pregunta
    askedAt: Date;

    // Arreglo de respuestas, cada una con su texto y la fecha en que se respondió
    answers: { 
        answerText: string, // Texto de la respuesta
        answeredAt: Date // Fecha y hora en que se dio la respuesta
    }[];
}