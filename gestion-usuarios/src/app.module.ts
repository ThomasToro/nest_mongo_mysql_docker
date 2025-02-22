import { Module } from '@nestjs/common';
import { UsuariosModule } from './usuarios/usuarios.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [UsuariosModule,
    MongooseModule.forRoot(`mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/demo_nest?authSource=admin`),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
