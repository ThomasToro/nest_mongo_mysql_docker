import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type ModificationHistoryDocument = HydratedDocument<ModificationHistory>;

@Schema()
export class ModificationHistory {
@Prop({ required: true })
placeId: string;

@Prop({ required: true })
modifiedAt: Date;

@Prop({
    type: [
        {
        fieldName: { type: String, required: true },
        oldValue: { type: String, required: true },
        newValue: { type: String, required: true },
        },
    ],
    required: true,
})
modifiedFields: { fieldName: string; oldValue: string; newValue: string }[];

@Prop()
modificationNote?: string;
}

export const ModificationHistorySchema = SchemaFactory.createForClass(ModificationHistory);
