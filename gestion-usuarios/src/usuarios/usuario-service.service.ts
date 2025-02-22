import { Injectable } from '@nestjs/common';
import { UsuarioDto } from './usuario-dto';
import { InjectModel } from '@nestjs/mongoose';
import { Usuario, UsuarioDocument } from './usuario';
import { Model } from 'mongoose';

@Injectable()
export class UsuarioServiceService {
    constructor(@InjectModel(Usuario.name) private userModel: Model<UsuarioDocument>){}
    getMessage(){
        return "Hola Mundo";
    }
    saludarPersona(nombre:string, apellido:string){
        return `Hola ${nombre} ${apellido}`;
    }

    crearUsuario(usuarioDTO: UsuarioDto){
        const newUser = new this.userModel(usuarioDTO);
        return newUser.save();
    }
}
