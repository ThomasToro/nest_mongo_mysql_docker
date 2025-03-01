import { Controller, Post, Body, Get } from '@nestjs/common';
import { CategoriasDto } from 'src/lugares/dto/categorias.dto';
import { CategoriasService } from 'src/lugares/servicios/categorias.service';

/**
 * Controlador para gestionar las operaciones relacionadas con la entidad 'Categorias'
 */

@Controller('categorias')
export class CategoriasController {
    /**
     * Proporciona acceso del servicio 'CategoriasService' para gestionar la lógica de negocio de categorías
     */
    constructor(private categoriesService: CategoriasService) {}

    /**
     * Crea una nueva categoría en la base de datos
     * @param newCategory Datos de la nueva categoría (DTO)
     * @returns La categoría creada
     */
    @Post('create-category')
    createCategory(@Body()newCategory: CategoriasDto) {
        return this.categoriesService.crearCategoria(newCategory);
    }

    /**
     * Obtiene todas las categorías almacenadas en la base de datos
     * @returns Lista de todas las categorías disponibles
     */
    @Get('get-all-categories')
    getCategories() {
        return this.categoriesService.getCategories();
    }  

}
