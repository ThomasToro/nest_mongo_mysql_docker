import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ModificationHistoryService } from '../services/modification-history.service';
import { CreateModificationHistoryDto } from '../dto/create-modification-history.dto';

// Decorador @Controller para definir la ruta base para este controlador
@Controller('modification-history')
export class ModificationHistoryController {
    // Declaración de la propiedad que almacenará la instancia del servicio
    private modificationHistoryService: ModificationHistoryService;

    /**
     * Constructor que inyecta el servicio de historial de modificaciones.
     * @param modificationHistoryService - Instancia del servicio de ModificationHistory.
     */
    constructor(modificationHistoryService: ModificationHistoryService) {
        // Se asigna la instancia del servicio inyectado a la propiedad local.
        this.modificationHistoryService = modificationHistoryService;
    }

    /**
     *
     * @param modificationHistoryDTO datos para crear el historial de modificación.
     * @returns El resultado de la operación de guardado en la base de datos MongoDB.
     */
    @Post('create-modification-history')
    createQa(@Body() modificationHistoryDTO: CreateModificationHistoryDto) {
    
        console.log("modification-historyDTO: ", modificationHistoryDTO);
        // Se llama al servicio para crear el registro y se retorna el resultado de dicha operación
        return this.modificationHistoryService.createModificationHistory(modificationHistoryDTO);
    }

    @Get('get-modification-history/:id')
        getModificationHistory(@Param('id') id: string) {
            return this.modificationHistoryService.getModificationHistory(id);
}

}
