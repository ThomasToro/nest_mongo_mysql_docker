import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsuarioServiceService } from './usuario-service.service';
import { UsuarioDto } from './usuario-dto';

@Controller('usuario-controller')
export class UsuarioControllerController {
    private usuarioservice:UsuarioServiceService;
    constructor(usuarioService: UsuarioServiceService){
        this.usuarioservice = usuarioService;
    }

    @Get('saludar')
    saludar(){
        return this.usuarioservice.getMessage();
    }
    @Get('saludar-persona/:nombre/:apellido')
    saludarConNombre(@Param('nombre') nombre, @Param('apellido') apellido){
        console.log("Nombre: ", nombre);
        console.log("Apellido: ", apellido);
        return this.usuarioservice.saludarPersona(nombre, apellido);
    }

    @Post('crear-usuario')
    crearUsuario(@Body() usuarioDTO:UsuarioDto){
        return this.usuarioservice.crearUsuario(usuarioDTO);
    }
}
