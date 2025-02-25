import { Module } from '@nestjs/common'; 
import { QaController } from './controllers/qa.controller'; 
import { QaService } from './services/qa.service'; 
import { MongooseModule } from '@nestjs/mongoose'; 
import { Qa, QaSchema } from './schemas/qa-schema'; 

// Decorador Module que define el módulo de NestJS
@Module({
    // Controladores asociados con este módulo. En este caso, el controlador de preguntas y respuestas (QaController)
    controllers: [QaController],
    // Proveedores que estarán disponibles para inyectar en otros componentes, en este caso, el servicio de preguntas y respuestas (QaService)
    providers: [QaService],
    // Módulos que serán importados para usarse dentro de este módulo. Aquí se importa MongooseModule para definir el esquema de Mongoose para la colección 'Qa'
    imports: [MongooseModule.forFeature([{ name: Qa.name, schema: QaSchema }]) // Configuración de Mongoose para conectar el esquema Qa con la colección en MongoDB
    ]
})
export class QaModule {}

