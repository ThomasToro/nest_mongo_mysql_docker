import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoriasDto } from '../dto/categorias.dto';
import { DeepPartial } from 'typeorm';

@Injectable()
export class CategoriasService {
    constructor(@InjectRepository(CategoriasDto) private categoriesRepository: Repository<CategoriasDto>) {}
        //constructor(@InjectRepository(Places) private placesRepository: Repository<Places>) {};
    async createCategory(category: CategoriasDto): Promise<CategoriasDto> {
        const newModel: DeepPartial<CategoriasDto> = {
            nombre: category.nombre, // Asegura que coincide con la entidad
        };

    const createdCategory = this.categoriesRepository.create(newModel);
        return await this.categoriesRepository.save(createdCategory);
    }

    async getCategories(): Promise<CategoriasDto[]> {
        return await this.categoriesRepository.find();
    }
}
