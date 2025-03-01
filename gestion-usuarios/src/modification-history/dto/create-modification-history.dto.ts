// Definición de la clase CreateModificationHistoryDto que se utilizará como Data Transfer Object (DTO)
// para registrar el historial de modificaciones en la base de datos
export class CreateModificationHistoryDto {
    // Identificador del lugar donde se hizo la modificación
    placeId: string;

    // Fecha y hora en que se realizó la modificación
    modifiedAt: Date;

    // Tipo de operación realizada: puede ser 'CREATE', 'UPDATE' o 'DELETE'
    operation: 'CREATE' | 'UPDATE' | 'DELETE';

    // Nota opcional que describe la modificación
    modificationNote?: string;
}
