import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LugaresModule } from './lugares/lugares.module';


@Module({
  imports: [
    MongooseModule.forRoot(`mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/demo_nest?authSource=admin`),
    LugaresModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
