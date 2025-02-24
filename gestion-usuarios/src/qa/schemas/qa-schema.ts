import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type QaDocument = HydratedDocument<Qa>;

@Schema()
export class Qa {
@Prop({ required: true })
placeId: string;

@Prop({ required: true })
question: string;

@Prop({ required: true })
askedAt: Date;

@Prop({
    type: [
    {
        answerText: { type: String, required: true },
        answeredAt: { type: Date, required: true },
    },
    ],
    required: true,
})
answers: { answerText: string; answeredAt: Date }[];
}

export const QaSchema = SchemaFactory.createForClass(Qa);
