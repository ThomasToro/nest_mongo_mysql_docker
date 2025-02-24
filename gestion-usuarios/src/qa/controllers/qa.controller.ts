import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { QaService } from '../services/qa.service';
import { CreateQaDto } from '../dto/create-qa.dto';

@Controller('qa')
export class QaController {
    private qaService: QaService;
        constructor(qaService: QaService){
            this.qaService = qaService;
    
        
        }
        @Post('create-qa')
        createQa(@Body() qaDTO:CreateQaDto){
            console.log("QaDTO: ", qaDTO);
            return this.qaService.createQa(qaDTO);
        }


}
