import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
export type UsuarioDocument = HydratedDocument<Usuario>;
@Schema()
export class Usuario {
    @Prop({required: true})
    name:string
    @Prop({required: true})
    surname:string
}
export const UsuarioSchema = SchemaFactory.createForClass(Usuario);
