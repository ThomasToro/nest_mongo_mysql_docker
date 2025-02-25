import { Lugares } from "../entidades/lugares-entidad";

export class MediosDto{
    id_medio : number;
    url : string;
    tipo : string;
    lugar : Lugares;
}