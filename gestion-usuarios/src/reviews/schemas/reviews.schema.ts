import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
export type ReviewDocument = HydratedDocument<Review>;
@Schema()
export class Review{
    @Prop({required: true})
    placeId:string
    @Prop({required: true})
    rating:number
    @Prop({required: true})
    comment:string
    @Prop({type:[String],required: true})
    multimedia:string[]
    @Prop({required: true})
    createdAt:Date
    
}
export const ReviewSchema = SchemaFactory.createForClass(Review);
