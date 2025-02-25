import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LugaresModule } from './lugares/lugares.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Etiquetas } from './lugares/entidades/etiquetas-entidad';
import { Categorias } from './lugares/entidades/categorias-entidad';
import { Lugares } from './lugares/entidades/lugares-entidad';
import { Medios } from './lugares/entidades/medios-entidad';

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/demo_nest?authSource=admin`),
    LugaresModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: parseInt(process.env.MYSQL_PORT || '3306'),
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: 'mapadb',
      entities:[
        Categorias, Etiquetas, Lugares, Medios
      ],
      synchronize:false
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
