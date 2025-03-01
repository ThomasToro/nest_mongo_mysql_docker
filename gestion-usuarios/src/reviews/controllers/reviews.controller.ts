import { Body, Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ReviewsService } from '../services/reviews.service';
import { CreateReviewDto } from '../dto/create-review.dto';

/**
 * Controlador para manejar las operaciones relacionadas con las reseñas.
 */
@Controller('reviews')
export class ReviewsController {
  /**
   * Inyecta el servicio de reseñas.
   * @param reviewsService Servicio encargado de la lógica de negocio de las reseñas.
   */
  constructor(private reviewsService: ReviewsService) {}

  /**
   * Endpoint para crear una nueva reseña
   * 
   *Si se enviamos un archivo en el campo image del form data, se convierte a base64 y se asigna
   *al campo multimedia del DTO
   *
   * @param reviewDTO -Objeto que contiene los datos de la reseña a crear
   * @param file -Archivo subido ,esperado en el campo image
   * @returns La reseña creada
   */
  @Post('create-review')
  @UseInterceptors(FileInterceptor('image')) // 'image' es el nombre del campo en el form-data
  createReview(
    @Body() reviewDTO: CreateReviewDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    console.log("ReviewDTO: ", reviewDTO);

    //Si se envió un archivo, se convierte a Base64 y se agrega al campo multimedia
    if (file) {
      const base64Image = file.buffer.toString('base64');
      reviewDTO.multimedia = [base64Image];
    }

    return this.reviewsService.createReview(reviewDTO);
  }

  /**
   * Endpoint para obtener todas las reseñas
   * @returns Todas las reseñas
   **/
  
  @Get('get-reviews')
  getReviews() {
    return this.reviewsService.getReviews();
  }
}