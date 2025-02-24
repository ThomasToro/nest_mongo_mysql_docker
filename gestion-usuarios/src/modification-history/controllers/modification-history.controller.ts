import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ModificationHistoryService } from '../services/modification-history.service';
import { CreateModificationHistoryDto } from '../dto/create-modification-history.dto';

@Controller('modification-history')
export class ModificationHistoryController {
    private modificationHistoryService: ModificationHistoryService;
        constructor(modificationHistoryService: ModificationHistoryService){
            this.modificationHistoryService = modificationHistoryService;
    
        
        }
        @Post('create-modification-history')
        createQa(@Body() modificationHistoryDTO:CreateModificationHistoryDto){
            console.log("modification-historyDTO: ", modificationHistoryDTO);
            return this.modificationHistoryService.createModificationHistory(modificationHistoryDTO);
        }


}
