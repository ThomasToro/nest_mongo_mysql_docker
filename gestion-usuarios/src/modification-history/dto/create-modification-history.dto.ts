export class CreateModificationHistoryDto {
    placeId: string;
    modifiedAt: Date;
    modifiedFields: {
        fieldName: string;
        oldValue: string;
        newValue: string;
    }[];
    modificationNote?: string;
    }