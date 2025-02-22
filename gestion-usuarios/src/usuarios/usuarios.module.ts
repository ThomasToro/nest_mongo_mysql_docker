import { Module } from '@nestjs/common';
import { UsuarioControllerController } from './usuario-controller.controller';
import { UsuarioServiceService } from './usuario-service.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Usuario, UsuarioSchema } from './usuario';

@Module({
  controllers: [UsuarioControllerController],
  providers: [UsuarioServiceService],
  imports: [
    MongooseModule.forFeature([{name: Usuario.name, schema: UsuarioSchema}])
  ]
})
export class UsuariosModule {}
