import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ModificationHistoryController } from './controllers/modification-history.controller';
import { ModificationHistoryService } from './services/modification-history.service';
import { ModificationHistory, ModificationHistorySchema } from './schemas/modification-history-schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: ModificationHistory.name, schema: ModificationHistorySchema }]),
    ],
    controllers: [ModificationHistoryController],
    providers: [ModificationHistoryService],
    exports: [ModificationHistoryService], // Exportamos el servicio para que sea usado por lugares.module.ts
})
export class ModificationHistoryModule {}
