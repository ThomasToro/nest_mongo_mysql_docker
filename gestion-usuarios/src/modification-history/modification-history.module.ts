import { Module } from '@nestjs/common';
import { ModificationHistoryController } from './controllers/modification-history.controller';
import { ModificationHistoryService } from './services/modification-history.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ModificationHistory , ModificationHistorySchema} from './schemas/modification-history-schema';

@Module({
    // Se registra el controlador para manejar las rutas relacionadas con el historial de modificaciones.
    controllers: [ModificationHistoryController],
    // Se declara el servicio que implementa la lógica de negocio para el historial de modificaciones.
    providers: [ModificationHistoryService],
    // Se importa el módulo de Mongoose configurado para el modelo ModificationHistory.
    // Esto permite interactuar con la colección correspondiente en MongoDB.
    imports: [
        MongooseModule.forFeature([{ name: ModificationHistory.name, schema: ModificationHistorySchema },]),],
})
export class ModificationHistoryModule {}

