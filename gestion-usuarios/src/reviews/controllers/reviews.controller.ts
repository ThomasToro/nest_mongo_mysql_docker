import { Body, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ReviewsService } from '../services/reviews.service';
import { CreateReviewDto } from '../dto/create-review.dto';

@Controller('reviews')
export class ReviewsController {
constructor(private reviewsService: ReviewsService) {}

@Post('create-review')
  @UseInterceptors(FileInterceptor('image'))  // 'image' es el nombre del campo en el form-data
createReview(
    @Body() reviewDTO: CreateReviewDto,
    @UploadedFile() file: Express.Multer.File,
) {
    console.log("ReviewDTO: ", reviewDTO);

    // Si se envió un archivo, se convierte a Base64 y se agrega al campo multimedia
    if (file) {
    const base64Image = file.buffer.toString('base64');
    reviewDTO.multimedia = [base64Image];
    }

    return this.reviewsService.createReview(reviewDTO);
}
}
