import { Controller, Post, Body, Get } from '@nestjs/common';
import { CategoriasDto } from 'src/lugares/dto/categorias.dto';
import { CategoriasService } from 'src/lugares/servicios/categorias.service';

@Controller('categorias')
export class CategoriasController {
    constructor(private categoriesService: CategoriasService) {}

    @Post('create-category')
    createCategory(@Body()newCategory: CategoriasDto) {
        return this.categoriesService.crearCategoria(newCategory);
    }

    @Get('get-all-categories')
    getCategories() {
        return this.categoriesService.getCategories();
    }  

}
