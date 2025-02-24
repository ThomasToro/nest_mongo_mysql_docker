import { Controller, Post, Body, Get } from '@nestjs/common';
import { CategoriasDto } from 'src/lugares/dto/categorias.dto';
import { CategoriasService } from 'src/lugares/servicios/categorias.service';

@Controller('category')
export class CategoriasController {
    constructor(private categoriesService: CategoriasService) {}

    @Post()
    createCategory(@Body()newCategory: CategoriasDto) {
        return this.categoriesService.createCategory(newCategory);
    }

    @Get()
    getCategories() {
        return this.categoriesService.getCategories();
    }

}
