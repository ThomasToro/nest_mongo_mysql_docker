export class CreateModificationHistoryDto {
placeId: string;
modifiedAt: Date;
operation: 'CREATE' | 'UPDATE' | 'DELETE';
modificationNote?: string;
}
