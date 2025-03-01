import { Module } from '@nestjs/common'; 
import { ReviewsController } from './controllers/reviews.controller'; 
import { ReviewsService } from './services/reviews.service'; 
import { MongooseModule } from '@nestjs/mongoose'; 
import { Review, ReviewSchema } from './schemas/reviews.schema'; 

@Module({
  // Los controladores gestionan las rutas y solicitudes HTTP
  controllers: [ReviewsController],

  // Los proveedores incluyen servicios que contienen la lógica de negocio
  providers: [ReviewsService],

  // Los módulos importados permiten integrar otras funcionalidades y dependencias
  imports: [
    // Usamos el MongooseModule para registrar el esquema Review en la aplicación
    MongooseModule.forFeature([{ name: Review.name, schema: ReviewSchema }])
  ]
})
// La clase ReviewsModule representa el módulo que agrupa los controladores, servicios y dependencias de reseñas
export class ReviewsModule {}

