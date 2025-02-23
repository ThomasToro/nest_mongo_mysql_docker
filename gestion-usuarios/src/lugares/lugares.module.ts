import { Module } from '@nestjs/common';
import { LugaresService } from './servicios/lugares.service';
import { LugaresController } from './controladores/lugares.controller';

@Module({
  providers: [LugaresService],
  controllers: [LugaresController]
})
export class LugaresModule {}
