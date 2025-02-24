import { Module } from '@nestjs/common';
import { UsuariosModule } from './usuarios/usuarios.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ReviewsModule } from './reviews/reviews.module';
import { QaModule } from './qa/qa.module';
import { ModificationHistoryModule } from './modification-history/modification-history.module';


@Module({
  imports: [UsuariosModule,
    MongooseModule.forRoot(`mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/demo_nest?authSource=admin`),
    ReviewsModule,
    QaModule,
    ModificationHistoryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}


