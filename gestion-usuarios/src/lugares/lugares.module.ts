import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { LugaresService } from './servicios/lugares.service';
import { MediosService } from './servicios/medios.service';
import { EtiquetasService } from './servicios/etiquetas.service';
import { CategoriasService } from './servicios/categorias.service';
import { LugaresEtiquetasService } from './servicios/lugares-etiquetas.service';

import { LugaresController } from './controladores/lugares.controller';
import { MediosController } from './controladores/medios.controller';
import { EtiquetasController } from './controladores/etiquetas.controller';
import { CategoriasController } from './controladores/categorias.controller';
import { LugaresEtiquetasController } from './controladores/lugares-etiquetas.controller';

import { Categorias } from './entidades/categorias-entidad';
import { Lugares } from './entidades/lugares-entidad';
import { Etiquetas } from './entidades/etiquetas-entidad';
import { Medios } from './entidades/medios-entidad';
import { LugaresEtiquetas } from './entidades/lugares-etiquetas-entidad';

/**
 * Módulo de NestJS que gestiona la funcionalidad relacionada con los lugares,
 * incluyendo sus relaciones con categorías, etiquetas y medios
 */

@Module({
  /**
   * Importa las entidades en TypeORM para que estén disponibles en el módulo
   */
  imports: [TypeOrmModule.forFeature([Categorias, Lugares, Etiquetas, Medios, LugaresEtiquetas])],

  /**
   * Proveedores (services) que contienen la lógica de negocio de cada entidad
   */
  providers: [LugaresService, MediosService, EtiquetasService, CategoriasService, LugaresEtiquetasService],

  /**
   * Controladores responsables de manejar las solicitudes HTTP relacionadas con cada entidad
   */
  controllers: [LugaresController, MediosController, EtiquetasController, CategoriasController, LugaresEtiquetasController]
})
export class LugaresModule {}
