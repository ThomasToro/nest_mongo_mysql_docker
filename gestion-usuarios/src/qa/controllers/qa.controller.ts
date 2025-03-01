import { Body, Controller, Get, Param, Post } from '@nestjs/common'; 
import { QaService } from '../services/qa.service'; 
import { CreateQaDto } from '../dto/create-qa.dto';

// Decorador Controller define este archivo como un controlador para manejar las rutas '/qa'
@Controller('qa')
export class QaController {
    // Instanciamos el servicio que manejará la lógica de negocio de preguntas y respuestas
    private qaService: QaService;

    // Constructor que inyecta el servicio QaService en el controlador
    constructor(qaService: QaService) {
        this.qaService = qaService;
    }

    // Ruta POST que recibe datos para crear una pregunta y respuesta
    @Post('create-qa')
    // Método que recibe un DTO (Data Transfer Object) que contiene los datos de la pregunta y respuesta
    createQa(@Body() qaDTO: CreateQaDto) {
        // Se imprime el DTO recibido para depuración
        console.log("QaDTO: ", qaDTO);

        // Llamada al servicio para crear una pregunta y respuesta en la base de datos
        return this.qaService.createQa(qaDTO);
    }

    //Ruta GET que obtiene todas las preguntas y respuestas
    @Get('get-qas')
    getQas() {
        return this.qaService.getQas();
    }

    //Ruta que obtiene una pregunta y respuesta por su id
    @Get('get-qa/:id')
    getQaById(@Param('id') id: string) {
        return this.qaService.getQaById(id);
    }
}
