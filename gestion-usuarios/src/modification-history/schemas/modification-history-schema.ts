import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type ModificationHistoryDocument = HydratedDocument<ModificationHistory>;

@Schema()
export class ModificationHistory {
//Id del lugar
@Prop({ required: true })
placeId: string;
//fecha de modificacion
@Prop({ required: true })
modifiedAt: Date;

//Campo para indicar el tipo de operación realizada
@Prop({ required: true })
operation: string;
//campo opcional
@Prop()
modificationNote?: string;
}

export const ModificationHistorySchema = SchemaFactory.createForClass(ModificationHistory);
