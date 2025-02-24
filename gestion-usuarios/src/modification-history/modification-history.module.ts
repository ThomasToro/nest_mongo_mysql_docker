import { Module } from '@nestjs/common';
import { ModificationHistoryController } from './controllers/modification-history.controller';
import { ModificationHistoryService } from './services/modification-history.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ModificationHistory , ModificationHistorySchema} from './schemas/modification-history-schema';

@Module({
    controllers: [ModificationHistoryController],

    providers: [ModificationHistoryService],
    imports: [
    MongooseModule.forFeature([{name:ModificationHistory.name, schema:ModificationHistorySchema}])
]
})
export class ModificationHistoryModule {}
