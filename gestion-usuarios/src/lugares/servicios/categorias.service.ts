import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeepPartial } from 'typeorm';
import { Categorias } from '../entidades/categorias-entidad'; // Se importa la entidad
import { CategoriasDto } from '../dto/categorias.dto';

@Injectable()
export class CategoriasService {
    constructor(
        @InjectRepository(Categorias)
        private readonly categoriesRepository: Repository<Categorias>
    ) {}

    async crearCategoria(category: CategoriasDto) {
        const newmodel = this.categoriesRepository.create(category);
    
    return await this.categoriesRepository.save(newmodel);
    }

    async getCategories(){
    return await this.categoriesRepository.find();
    }
}

