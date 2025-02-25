import { Entity, Column, ManyToOne, PrimaryColumn, JoinColumn } from "typeorm";
import { Lugares } from "./lugares-entidad";
import { Etiquetas } from "./etiquetas-entidad";

@Entity({ name: "lugares-etiquetas" })
export class LugaresEtiquetas{
    @PrimaryColumn({ type: "int" })
    identificador: number;
    @PrimaryColumn({ type: "int" })
    id: number;

    @ManyToOne(() => Lugares, (lugar) => lugar.etiquetas, { onDelete: "CASCADE" })
    @JoinColumn({ name: "id" })
    lugar: Lugares;
    
    @ManyToOne(() => Etiquetas, (etiqueta) => etiqueta.id_etiqueta, { onDelete: "CASCADE" })
    @JoinColumn({ name: "id" })
    etiqueta : Etiquetas;
}
