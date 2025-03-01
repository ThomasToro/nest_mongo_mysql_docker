import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeepPartial } from 'typeorm';
import { Categorias } from '../entidades/categorias-entidad';
import { CategoriasDto } from '../dto/categorias.dto';

/**
 * Servicio para gestionar las operaciones relacionadas con la entidad 'Categorias'
 */

@Injectable()
export class CategoriasService {
    /**
     * Proporciona acceso al repositorio de TypeORM para interactuar con la base de datos
     */
    constructor(
        @InjectRepository(Categorias)
        private readonly categoriesRepository: Repository<Categorias>
    ) {}

    /**
     * Crea una nueva categoría en la base de datos
     * @param category Datos de la categoría a crear (DTO)
     * @returns La categoría creada y guardada en la base de datos
     */
    async crearCategoria(category: CategoriasDto) {
        const newmodel = this.categoriesRepository.create(category);
    
    return await this.categoriesRepository.save(newmodel);
    }

    /**
     * Obtiene todas las categorías almacenadas en la base de datos
     * @returns Lista de todas las categorías
     */
    async getCategories(){
    return await this.categoriesRepository.find();
    }
}