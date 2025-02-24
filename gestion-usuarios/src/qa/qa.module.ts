import { Module } from '@nestjs/common';
import { QaController } from './controllers/qa.controller';
import { QaService } from './services/qa.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Qa , QaSchema} from './schemas/qa-schema';

@Module({
    controllers: [QaController],

    providers: [QaService],
    imports: [
    MongooseModule.forFeature([{name:Qa.name, schema:QaSchema}])
]
})
export class QaModule {}
